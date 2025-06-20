import { Locator } from '@playwright/test';

export class CartItem {
  private readonly name: Locator;
  private readonly description: Locator;
  private readonly price: Locator;
  private readonly removeFromCartButton: Locator;

  constructor(rootLocator: Locator) {
    this.name = rootLocator.locator('//*[@data-test="inventory-item-name"]');
    this.description = rootLocator.locator('//*[@data-test="inventory-item-desc"]');
    this.price = rootLocator.locator('//*[@data-test = "inventory-item-price"]');
    this.removeFromCartButton = rootLocator.getByRole('button', { name: 'Remove' });
  }

  getLocatorName() {
    return this.name;
  }

  async removeFromCart() {
    await this.removeFromCartButton.click();
  }
}
