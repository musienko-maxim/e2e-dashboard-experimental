import  puppeteer, { Browser, Page } from 'puppeteer';
import {BrowserInit} from '../browser/BrowserInit'
import {LoginPage} from '../page-objects/LoginPage'
import {DashBoardMainPage} from '../page-objects/DashBoardPage'

describe('Simple Dashboard test', () => {
  let browser: Browser;
  let loginPage: LoginPage;
  let dashboardPage: DashBoardMainPage;

  beforeAll(async () => {
   browser = await new BrowserInit().getBrowserInstance();
   const pageContext = await browser.newPage();
   loginPage = new LoginPage(pageContext);
   dashboardPage = new DashBoardMainPage(pageContext);

  });

  afterAll(async () => {
    await browser.close();
  });

  it('login and verify dashboard loading', async () => {
    await loginPage.login();
    await dashboardPage.waitDashboardPage();
  })

})
