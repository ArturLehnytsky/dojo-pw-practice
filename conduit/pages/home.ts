import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  private page: Page;

  private myFeedTabBtn: Locator;
  private globalFeedTabBtn: Locator;
  private popularTags: Locator;
  private filteredByTagTabBtn: Locator;
  private firstArticleBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myFeedTabBtn = page.locator('[href="/my-feed"]');
    this.globalFeedTabBtn = page.locator('//a[contains(text(), "Global Feed")]');
    this.popularTags = page.locator('//*[@class="sidebar"]/*[@class = "tag-list"]/a');
    this.filteredByTagTabBtn = page.locator('//*[@data-qa-type = "feed-tab"][3]');
    this.firstArticleBtn = page.locator('[data-qa-type = "article-preview"]:first-child');
  }

  async clickMyFeedTab() {
    await this.myFeedTabBtn.click();
    await expect(this.myFeedTabBtn).toContainClass('active');
  }

  async clickGlobalFeedTab() {
    await this.globalFeedTabBtn.click();
    await expect(this.globalFeedTabBtn).toContainClass('active');
  }

  async clickPopularTag(tagName: string) {
    const tags = await this.popularTags.all();

    for (const tag of tags) {
      if (tagName === (await tag.innerText())) {
        await tag.click();
      }
    }
    await expect(this.filteredByTagTabBtn).toHaveText(tagName);
  }

  async clickFirstArticle() {
    await this.firstArticleBtn.click();
  }
}
