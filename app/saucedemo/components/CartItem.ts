import { BaseComponent } from './BaseComponent';
import { ItemLocators } from './ItemLocators';
import { Page } from '@playwright/test';

export class CartItem extends BaseComponent {
  locators: ItemLocators = new ItemLocators(this.page);
  private productName: string;

  constructor(page: Page, productName: string) {
    super(page);
    this.productName = productName;
  }

  async removeFromCart() {
    await this.locators.getRemoveFromCartButton(this.productName).click();
  }

  async getItemDescription() {
    return await this.locators.getDescriptionLocator(this.productName).textContent();
  }

  async getItemPrice() {
    return await this.locators.getPriceLocator(this.productName).textContent();
  }
}
