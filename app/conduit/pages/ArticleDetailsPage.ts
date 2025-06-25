import { Locator, Page } from '@playwright/test';

export class ArticleDetailsPage {
  private page: Page;
  private tagList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tagList = page.locator('//*[@class = "tag-list"]//a');
  }

  getTagLocatorByName(tagName: string) {
    return this.page.locator(`//*[@data-qa-type="article-tag"]/a[@href='/tag/${tagName}']`);
  }
}
