import puppeteer, { Browser, Page } from "puppeteer";

export class BrowserInit {
  public async getBrowserInstance(): Promise<puppeteer.Browser> {
    return await puppeteer.launch({
      headless: false,
      ignoreHTTPSErrors: true,
    });
  }
}
