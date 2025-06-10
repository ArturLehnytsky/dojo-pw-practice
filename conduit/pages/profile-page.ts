import { Page } from '@playwright/test';

export function ProfilePage(page: Page) {
  this.goToProfile = (userName: string) => page.locator(`//li[@class = "nav-item"]/a[@href="/@${userName.toLowerCase()}/"]`).click();
  this.articlePreviewTitleLocator = page.locator('//*[@data-qa-type = "preview-title"]');
}
