import { BasePage } from './BasePage';
import { Locator, Page } from '@playwright/test';
import { CartItem } from '../components/CartItem';

export class CartPage extends BasePage {
  private checkoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }

  getCartItem(productName: string) {
    return new CartItem(this.page, productName);
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }
}
