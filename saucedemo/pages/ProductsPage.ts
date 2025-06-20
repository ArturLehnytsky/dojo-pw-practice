import { Locator, Page } from '@playwright/test';
import { ProductItem } from './components/ProductItem';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  private products: Locator;

  constructor(page: Page) {
    super(page);
    this.products = this.page.locator('//*[@data-test = "inventory-item"]');
  }

  async addProductToCartByNumber(number: number) {
    const item = new ProductItem(this.products.nth(number));
    await item.addToCartButton.click();
  }

  private async getAllProducts() {
    const productsItems: ProductItem[] = [];
    const count = await this.products.count();

    for (let i = 0; i < count; i++) {
      const item = this.products.nth(i);
      productsItems.push(new ProductItem(item));
    }
    return productsItems;
  }

  async addProductToCartByName(name: string) {
    const products = await this.getAllProducts();

    for (const item of products) {
      if ((await item.getName()) === name) {
        await item.addToCartButton.click();
      }
    }
  }
}
