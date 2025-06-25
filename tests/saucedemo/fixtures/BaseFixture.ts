import { test as base } from '@playwright/test';
import { LoginPage } from '../../../app/saucedemo/pages/LoginPage';
import { ProductPage } from '../../../app/saucedemo/pages/ProductPage';
import { CheckoutPage } from '../../../app/saucedemo/pages/CheckoutPage';
import { CheckoutOverviewPage } from '../../../app/saucedemo/pages/CheckoutOverviewPage';
import { CartPage } from '../../../app/saucedemo/pages/CartPage';

type Pages = {
  loginPage: LoginPage;
  productPage: ProductPage;
  checkoutPage: CheckoutPage;
  checkoutOverviewPage: CheckoutOverviewPage;
  cartPage: CartPage;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  checkoutOverviewPage: async ({ page }, use) => {
    await use(new CheckoutOverviewPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
});
