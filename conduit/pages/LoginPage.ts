import { Locator, Page } from '@playwright/test';
import { User } from '../helpers/creation-test-data';

export class LoginPage {
  private page: Page;
  userEmailInput: Locator;
  userPasswordInput: Locator;
  signInBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userEmailInput = page.locator('input[placeholder = "Email"]');
    this.userPasswordInput = page.locator('input[placeholder = "Password"]');
    this.signInBtn = page.locator('//form/button[contains(text(), "Sign in")]');
  }

  async logIn(user: User) {
    await this.userEmailInput.fill(user.email);
    await this.userPasswordInput.fill(user.password);
    await this.signInBtn.click();
  }
}
