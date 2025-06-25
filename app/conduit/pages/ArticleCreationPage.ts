import { expect, Locator, Page } from '@playwright/test';

export class ArticleCreationFormPage {
  protected page: Page;

  articleTitleInput: Locator;
  articleDescriptionInput: Locator;
  articleTextInput: Locator;
  articleTagInput: Locator;
  createArticleBtn: Locator;
  justCreatedArticleTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.articleTitleInput = page.locator('[data-qa-id="editor-title"]');
    this.articleDescriptionInput = page.locator('[data-qa-id="editor-description"]');
    this.articleTextInput = page.locator('[placeholder="Write your article (in markdown)"]');
    this.articleTagInput = page.locator('[data-qa-id="editor-tags"]');
    this.createArticleBtn = page.locator('[data-qa-id="editor-publish"]');
    this.justCreatedArticleTitle = page.locator('[data-qa-id="article-title"]');
  }

  async goToArticleCreationPage() {
    await this.page.locator('[href="/editor"]').click();
  }

  async createFullFilledArticle({ title, description, text, tag }: { title: string; description: string; text: string; tag: string }) {
    await this.articleTitleInput.fill(title);
    await this.articleDescriptionInput.fill(description);
    await this.articleTextInput.fill(text);
    await this.articleTagInput.fill(tag);
    await this.createArticleBtn.click();
  }

  async expectArticleTitleToBe(expectedTitle: string) {
    await expect(this.justCreatedArticleTitle).toHaveText(expectedTitle);
  }
}
