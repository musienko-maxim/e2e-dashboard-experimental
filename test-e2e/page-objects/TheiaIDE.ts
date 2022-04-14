import puppeteer, { Page } from "puppeteer";

export class TheiaIDE {
  private readonly page: Page;

  private readonly theiaIDE = {
    mainContainer: "div#theia-app-shell",
  };

  constructor(private readonly pageContext: Page) {
    this.page = pageContext;
  }

  public async waitTheiaContainer() {
    await this.page.waitForSelector(this.theiaIDE.mainContainer);
  }
}
