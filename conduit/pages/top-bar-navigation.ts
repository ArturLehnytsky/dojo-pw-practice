import { Locator, Page } from '@playwright/test';

export class NavigationBar {
  private page: Page;
  private signInBtn: Locator;
  private signUpBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInBtn = page.locator('[href="/login"]');
    this.signUpBtn = page.locator('[href="/register"]');
  }

  async clickSignInBtn() {
    await this.signInBtn.click();
  }

  async clickSignUpBtn() {
    await this.signUpBtn.click();
  }
}
