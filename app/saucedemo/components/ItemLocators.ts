import { Page } from '@playwright/test';

export class ItemLocators {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  getProductItemLocatorByName = (productName: string) => {
    return this.page
      .getByRole('link', { name: productName })
      .locator('xpath=ancestor::*[@data-test="inventory-item"]');
  };

  getAddToCartButton(productName: string) {
    return this.getProductItemLocatorByName(productName).getByRole('button', {
      name: 'Add to cart',
    });
  }

  getRemoveFromCartButton(productName: string) {
    return this.getProductItemLocatorByName(productName).getByRole('button', { name: 'Remove' });
  }

  getDescriptionLocator(productName: string) {
    return this.getProductItemLocatorByName(productName).locator(
      '//*[@data-test = "inventory-item-desc"]'
    );
  }

  getPriceLocator(productName: string) {
    return this.getProductItemLocatorByName(productName).locator(
      '//*[@data-test = "inventory-item-price"]'
    );
  }
}
