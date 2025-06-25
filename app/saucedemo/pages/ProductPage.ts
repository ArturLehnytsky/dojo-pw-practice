import { ProductItem } from '../components/ProductItem';
import { BasePage } from './BasePage';
import { Page } from '@playwright/test';

export class ProductPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  getProductItem(productName: string) {
    return new ProductItem(this.page, productName);
  }
}
