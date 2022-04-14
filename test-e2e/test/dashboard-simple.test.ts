import  puppeteer, { Browser, Page } from 'puppeteer';
import {BrowserInit} from '../browser/BrowserInit'
import {LoginPage} from '../page-objects/LoginPage'
import {DashBoardMainPage} from '../page-objects/DashBoardPage'
import { TestConstants } from "../../TestConstants";
import { TheiaIDE } from "../page-objects/TheiaIDE";

describe('Simple Dashboard test', () => {
  let browser: Browser;
  let loginPage: LoginPage;
  let theiaIDE: TheiaIDE;
  let dashboardPage: DashBoardMainPage;
  let  pageContext: puppeteer.Page;

  beforeAll(async () => {
   browser = await new BrowserInit().getBrowserInstance();
   pageContext = await browser.newPage();
   loginPage = new LoginPage(pageContext);
   dashboardPage = new DashBoardMainPage(pageContext);
   theiaIDE = new TheiaIDE(pageContext);

  });

  afterAll(async () => {
    await browser.close();
  });

  it('login and verify dashboard loading', async () => {
    await loginPage.login();
    await dashboardPage.waitDashboardPage();
    await pageContext.goto(`${TestConstants.BASE_URL}#${TestConstants.FACTORY_URL}`, {waitUntil: 'load', timeout: 300_000});
    await theiaIDE.waitTheiaContainer();
  })

})
