import { Locator, Page } from '@playwright/test';
import { User } from '../helpers/creation-test-data';

export class Registration {
  protected page: Page;
  userNameInput: Locator;
  userEmailInput: Locator;
  userPasswordInput: Locator;
  signUpBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.userNameInput = page.locator('[placeholder="Username"]');
    this.userEmailInput = page.locator('[placeholder="Email"]');
    this.userPasswordInput = page.locator('[placeholder="Password"]');
    this.signUpBtn = page.locator('//button[contains(text(), "Sign up")]');
  }

  async goToRegistrationForm() {
    await this.page.locator('[href="/register"]').click();
  }

  async fillUserNameInput(username: string) {
    await this.userNameInput.fill(username);
  }

  async fillUserEmailInput(email: string) {
    await this.userEmailInput.fill(email);
  }

  async fillUserPasswordInput(password: string) {
    await this.userPasswordInput.fill(password);
  }

  async registerUser(user: User) {
    await this.fillUserNameInput(user.name);
    await this.fillUserEmailInput(user.email);
    await this.fillUserPasswordInput(user.password);
    await this.signUpBtn.click();
  }
}
