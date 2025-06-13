import { Locator, Page } from '@playwright/test';

export class Profile {
  protected page: Page;
  articlePreviewTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.articlePreviewTitle = page.locator('//*[@data-qa-type = "preview-title"]');
  }
  async goToProfile({ name }: { name: string }) {
    await this.page.locator(`//li[@class = "nav-item"]/a[@href="/@${name.toLowerCase()}/"]`).click();
  }
}
