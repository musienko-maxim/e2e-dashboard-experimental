import puppeteer, { Browser, Page } from "puppeteer";
import { TestConstants } from "../../TestConstants";

enum Platform {
  Openshift = 'OpenShift',
  k8s = 'k8s',
  SanBox = 'SandBox'
}
export class LoginPage {
  private readonly page: Page;

  private readonly k8sLoginPage = {
    loginPageMainForm: "div.dex-container",
    loginPageLoginField: "input#login",
    loginPagePasswordField: "input#password",
    loginButton: "button#submit-login",
  };

  private readonly gitHubAuthpage = {
    userNameEmalAdressField:'input#login_field',
    userPasswordField:'input#password',
    signInBtn: `input[type='submit'][value='Sign in']`
  };

  private readonly openShiftLoginPage = {
    githubAppSreIdp: "a[title='Log in with github-app-sre']",
    loginPageMainForm: "div.pf-c-login__container",
    loginPageLoginField: "input#inputUsername",
    loginPagePasswordField: "input#inputPassword",
    loginButton: "button[type='submit']",
  };

  constructor(private readonly pageContext: Page) {
    this.page = pageContext;
  }


  public async login() {
    switch (TestConstants.PLATFORM) {
      case Platform.Openshift:
        this.openShiftLogin();
        break;
      case Platform.k8s:
        this.k8sLogin();
        break;
      case Platform.SanBox:
        this.sandBoxLogin();
        break;
      default: {
        throw new Error(`Platform is not defined. Please set up ${Platform.Openshift}, ${Platform.k8s} or ${Platform.SanBox}`);
      }
    }

  }

  private async openShiftLogin() {
    await this.page.waitForSelector(this.openShiftLoginPage.loginPageMainForm);

    if (TestConstants.IDP_ITEM !== "") {
      const elements = await this.page.$x(`//a[text()='${TestConstants.IDP_ITEM}']`);
      elements[0].click();
    }
    await this.page.waitForSelector(this.openShiftLoginPage.loginPageLoginField)
    await this.page.type(this.openShiftLoginPage.loginPageLoginField, TestConstants.USERNAME);
    await this.page.type(this.openShiftLoginPage.loginPagePasswordField, TestConstants.USER_PASSWORD);
    await this.page.click(this.openShiftLoginPage.loginButton);
  }

  private async k8sLogin() {
    await this.page.goto(TestConstants.BASE_URL);
    await this.page.waitForSelector(this.k8sLoginPage.loginPageMainForm);
    await this.page.type(this.k8sLoginPage.loginPageLoginField, TestConstants.USERNAME);
    await this.page.type(this.k8sLoginPage.loginPagePasswordField, TestConstants.USER_PASSWORD);
    await this.page.click(this.k8sLoginPage.loginButton);
  }

  private async sandBoxLogin() {
    await this.page.goto(TestConstants.BASE_URL);
    await this.page.waitForSelector(this.openShiftLoginPage.loginButton);
    await this.page.click(this.openShiftLoginPage.loginButton);
    this.gitHubOAuthLogin();
  }
  private async gitHubOAuthLogin() {
    let idpItem = await this.page.waitForSelector(this.openShiftLoginPage.githubAppSreIdp);
    await idpItem?.click();
    for (let selector of Object.values(this.gitHubAuthpage)){
      await this.page.waitForSelector(selector);
    }
    await this.page.type(this.gitHubAuthpage.userNameEmalAdressField, TestConstants.GIT_HUB_LOGIN);
    await this.page.type(this.gitHubAuthpage.userPasswordField, TestConstants.GIT_HUB_PASSWORD);
    await this.page.click(this.gitHubAuthpage.signInBtn);
  }

}
