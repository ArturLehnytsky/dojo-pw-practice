import { BaseComponent } from './BaseComponent';
import { ItemLocators } from './ItemLocators';
import { Page } from '@playwright/test';

export class ProductItem extends BaseComponent {
  locators: ItemLocators = new ItemLocators(this.page);
  productName: string;

  constructor(page: Page, productName: string) {
    super(page);
    this.productName = productName;
  }

  async addProductToCart() {
    await this.locators.getAddToCartButton(this.productName).click();
  }

  async removeFromCart() {
    await this.locators.getRemoveFromCartButton(this.productName).click();
  }

  async getDescription() {
    return await this.locators.getDescriptionLocator(this.productName).textContent();
  }

  async getPrice() {
    return await this.locators.getPriceLocator(this.productName).textContent();
  }
}
