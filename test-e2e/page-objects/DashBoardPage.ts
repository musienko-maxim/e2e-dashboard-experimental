import puppeteer, { Browser, Page } from "puppeteer";
export class DashBoardMainPage {
    private readonly page:Page;

  public readonly loginPage = {
    dashboardSideBar: "div#page-sidebar",
    dashboardHeaderBrand: "div.pf-c-page__header-brand",
    dashboardWorkspaceMainContainer: "main.pf-c-page__main",
  };

  constructor(private readonly pageContext: Page) {
    this.page = pageContext;
  }

 public async waitDashboardPage(){
    await this.page.waitForSelector(this.loginPage.dashboardSideBar, {timeout: 100000});
    await this.page.waitForSelector(this.loginPage.dashboardHeaderBrand);
    await this.page.waitForSelector(this.loginPage.dashboardWorkspaceMainContainer);
 }

public createWorkspace (){

}

}
