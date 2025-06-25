import { Locator, Page } from '@playwright/test';

export abstract class BasePage {
  protected page: Page;
  private cart: Locator;

  protected constructor(page: Page) {
    this.page = page;
    this.cart = page.locator('//a[@data-test= "shopping-cart-link"]');
  }

  async goToCart() {
    await this.cart.click();
  }
}
