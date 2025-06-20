import { Locator } from '@playwright/test';

export class ProductItem {
  name: Locator;
  description: Locator;
  price: Locator;
  addToCartButton: Locator;
  removeFromCartButton: Locator;

  constructor(rootLocator: Locator) {
    this.name = rootLocator.locator('//*[@data-test = "inventory-item-name"]');
    this.description = rootLocator.locator('//*[@data-test = "inventory-item-desc"]');
    this.price = rootLocator.locator('//*[@data-test = "inventory-item-price"]');
    this.addToCartButton = rootLocator.locator('//button[text() = "Add to cart"]');
    this.removeFromCartButton = rootLocator.locator('//button[text() = "Remove"]');
  }

  async getName() {
    return await this.name.innerText();
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async removeFromCart() {
    await this.removeFromCartButton.click();
  }

  async getDescription() {
    return await this.description.innerText();
  }

  async getPrice() {
    return await this.price.innerText();
  }
}
