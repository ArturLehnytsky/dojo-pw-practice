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

  async fillSignInForm(user: Partial<User>) {
    if (user.email !== undefined) {
      await this.userEmailInput.fill(user.email);
    }
    if (user.password !== undefined) {
      await this.userPasswordInput.fill(user.password);
    }
  }

  async clickSignInBtn() {
    await this.signInBtn.click();
  }

  async signInAs(user: User) {
    await this.fillSignInForm(user);
    await this.clickSignInBtn();
  }
}
