import { Locator, Page } from '@playwright/test';
import { User } from '../helpers/creation-test-data';

export class HomePage {
  private page: Page;

  myFeedTabBtn: Locator;
  globalFeedTabBtn: Locator;
  popularTags: Locator;
  articlePreviews: Locator;
  articleTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myFeedTabBtn = this.page.locator('[href="/my-feed"]');
    this.globalFeedTabBtn = this.page.locator('//a[contains(text(), "Global Feed")]');
    this.popularTags = this.page.locator('//*[@class="sidebar"]/*[@class = "tag-list"]/a');
    this.articlePreviews = this.page.locator('//*[@class = "preview-link"]');
    this.articleTitle = this.page.locator('[data-qa-type =article-title]');
  }

  async clickMyFeedTab() {
    await this.myFeedTabBtn.click();
  }

  async clickGlobalFeedTab() {
    await this.globalFeedTabBtn.click();
  }

  async clickPopularTag(tagName: string) {
    await this.page.locator(`//a[@href='/tag/${tagName}']`).click();
  }

  async clickArticleByNumber(number = 0) {
    await this.articlePreviews.nth(number).click();
  }

  async clickArticleByTitle(title: string) {
    await this.page.locator('[data-qa-type =article-title]', { hasText: title }).click();
  }

  getProfileBtnLocatorByUsername(user: User) {
    //@ts-ignore
    return this.page.locator(`//a[@href = '/@${user.name.toLowerCase()}/']`);
  }

  getTabBtnLocator(tag: 'my-feed' | 'global' | 'tag') {
    return this.page.locator(`//*[@class='home-${tag}']`);
  }
}
