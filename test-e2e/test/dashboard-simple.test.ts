import puppeteer, { Browser, Page } from 'puppeteer';
import { BrowserInit } from '../browser/BrowserInit'
import { LoginPage } from '../page-objects/LoginPage'
import { DashBoardMainPage } from '../page-objects/DashBoardPage'
import { TestConstants } from "../../TestConstants";
import { TheiaIDE } from "../page-objects/TheiaIDE";

describe('Simple Dashboard test', () => {
  let browser: Browser;
  let loginPage: LoginPage;
  let theiaIDE: TheiaIDE;
  let dashboardPage: DashBoardMainPage;
  let pageContext: puppeteer.Page;
  let pageTarget: puppeteer.Target;

  beforeAll(async () => {
    browser = await new BrowserInit().getBrowserInstance();
    pageContext = await browser.newPage();
    pageTarget = pageContext.target();
    loginPage = new LoginPage(pageContext);
    dashboardPage = new DashBoardMainPage(pageContext);
    theiaIDE = new TheiaIDE(pageContext);

  });

  afterAll(async () => {
    await browser.close();
  });

  it('Check recreation behavior DevSpace from  Dashboard', async () => {
    //register number of opened tabs on the start test
    const numPagesOnStartPhase = await browser.pages();
    // use Bash project as more simplier
    const devWsStackName: string = 'Bash'
    await loginPage.login();
    await dashboardPage.waitDashboardPage();
    await dashboardPage.clickOnDevNameCard(devWsStackName);
    const  ideTarget = await browser.waitForTarget(target => target.opener() === pageTarget);
    const numPagesAfterDevSpaceCreation = await browser.pages();

    //after creation DewSpace from the DashBoard we are expecting of openning one more tab
    expect(numPagesAfterDevSpaceCreation.length - numPagesOnStartPhase.length).toBe(1)

    const idePageAfterFirsrCreation = await ideTarget.page();
    await idePageAfterFirsrCreation?.waitForSelector("div#theia-app-shell", {timeout:120_000})
    await idePageAfterFirsrCreation?.close();

    await dashboardPage.waitDashboardPage();
    await dashboardPage.clickOnDevNameCard(devWsStackName);

    const ideTargetAfterSecondCreation = await browser.waitForTarget(target2 => target2.opener() === pageTarget);
    const idePageAfterSecondCreation = await ideTargetAfterSecondCreation.page();
    await idePageAfterSecondCreation?.screenshot({ path: "./screenshot3.png",  fullPage: true});
    const createAnewWorkspaceButton = await idePageAfterSecondCreation?.waitForXPath("//button[text()='Open the existing workspace']");
    await createAnewWorkspaceButton?.click();
    await idePageAfterSecondCreation?.waitForSelector("div#theia-app-shell", {timeout:30_000})
  })

})

function delay(time: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  });
}
