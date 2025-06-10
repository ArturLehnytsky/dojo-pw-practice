import { Page } from '@playwright/test';

export function RegistrationPage(page: Page) {
  this.goToRegistrationForm = async () => page.locator('[href="/register"]').click();
  this.userNameInputdLocator = page.locator('[placeholder="Username"]');
  this.userEmailInputLocator = page.locator('[placeholder="Email"]');
  this.userPasswordInputLocator = page.locator('[placeholder="Password"]');
  this.signUpBtnLocator = page.locator('//button[contains(text(), "Sign up")]');
}
