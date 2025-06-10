import { Page } from '@playwright/test';

export function ArticleCreationFormPage(page: Page) {
  this.goToArticleCreationPage = async () => page.locator('[href="/editor"]').click();
  this.articleTitleInputLocator = page.locator('[data-qa-id="editor-title"]');
  this.articleDescriptionInputLocator = page.locator('[data-qa-id="editor-description"]');
  this.articleTextInputLocator = page.locator('[placeholder="Write your article (in markdown)"]');
  this.articleTagInputLocator = page.locator('[data-qa-id="editor-tags"]');
  this.createArticleBtnLocator = page.locator('[data-qa-id="editor-publish"]');
  this.justCreatedArticleTitleLocator = page.locator('[data-qa-id="article-title"]');
}
