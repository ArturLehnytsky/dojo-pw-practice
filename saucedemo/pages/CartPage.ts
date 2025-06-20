import { BasePage } from './BasePage';
import { Locator, Page } from '@playwright/test';
import { CartItem } from './components/CartItem';

export class CartPage extends BasePage {
  private checkoutButton: Locator;
  private inventoryItems: Locator;

  constructor(page: Page) {
    super(page);
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    this.inventoryItems = page.locator('//*[@data-test = "inventory-item"]');
  }

  async getLocatorByProductName(name: string) {
    return this.page.locator('//*[@data-test = "inventory-item-name"]', { hasText: name });
  }

  private async getAllInventoryItems() {
    const items: CartItem[] = [];
    const count = await this.inventoryItems.count();

    for (let i = 0; i < count; i++) {
      const item = this.inventoryItems.nth(i);
      items.push(new CartItem(item));
    }
    return items;
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }
}
