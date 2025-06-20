import { Locator, Page } from '@playwright/test';

export class BasePage {
  protected page: Page;
  private cart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cart = page.locator('//a[@data-test= "shopping-cart-link"]');
  }

  async goToCart() {
    await this.cart.click();
  }
}
