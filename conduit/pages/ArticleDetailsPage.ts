import { Locator, Page } from '@playwright/test';

export class ArticleDetailsPage {
  private page: Page;
  private tagList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tagList = page.locator('//*[@class = "tag-list"]//a');
  }

  async isTagVisible(tagName: string) {
    const tags = await this.tagList.all();

    for (const tag of tags) {
      if (tagName === (await tag.innerText())) {
        return true;
      }
    }
    return false;
  }
}
