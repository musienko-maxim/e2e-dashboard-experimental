import puppeteer, { Browser, Page } from "puppeteer";
import { TestConstants } from "../../TestConstants";

export class LoginPage {
  private readonly page: Page;

  private readonly k8sLoginPage = {
    loginPageMainForm: "div.dex-container",
    loginPageLoginField: "input#login",
    loginPagePasswordField: "input#password",
    loginButton: "button#submit-login",
  };

  private readonly openShiftLoginPage = {
    loginPageMainForm: "div.pf-c-login__container",
    loginPageLoginField: "input#inputUsername",
    loginPagePasswordField: "input#inputPassword",
    loginButton: "button[type='submit']",
  };

  constructor(private readonly pageContext: Page) {
    this.page = pageContext;
  }


  public async login () {
    TestConstants.INFRASTRUCTURE ==='k8s' ? this.k8sLogin() : this.openShiftLogin()
  }

  private async openShiftLogin() {
    await this.page.goto(TestConstants.BASE_URL);
    await this.page.waitForSelector(this.openShiftLoginPage.loginPageMainForm);

    if (TestConstants.IDP_ITEM !== "") {
      const elements = await this.page.$x(`//a[text()='${TestConstants.IDP_ITEM}']`);
      elements[0].click();
    }
    await this.page.waitForSelector(this.openShiftLoginPage.loginPageLoginField)
      await this.page.type(this.openShiftLoginPage.loginPageLoginField, TestConstants.USERNAME);
      await this.page.type(this.openShiftLoginPage.loginPagePasswordField,TestConstants.USER_PASSWORD);
      await this.page.click(this.openShiftLoginPage.loginButton);
  }

  private async k8sLogin() {
    await this.page.goto(TestConstants.BASE_URL);
    await this.page.waitForSelector(this.k8sLoginPage.loginPageMainForm);
    await this.page.type(this.k8sLoginPage.loginPageLoginField, TestConstants.USERNAME);
    await this.page.type(this.k8sLoginPage.loginPagePasswordField,TestConstants.USER_PASSWORD);
    await this.page.click(this.k8sLoginPage.loginButton);
  }
}
