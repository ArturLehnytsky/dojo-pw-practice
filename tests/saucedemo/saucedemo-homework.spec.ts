/*
Написати тест + page object

Напишіть до цього два Page Object на ці сторінки (можна більше)
1) https://www.saucedemo.com/inventory.html
2) https://www.saucedemo.com/cart.html
*/

import { expect, test } from '@playwright/test';
import { LoginPage } from '../../saucedemo/pages/LoginPage';
import { getStandardUser } from '../../saucedemo/test-data/TestData';
import { ProductsPage } from '../../saucedemo/pages/ProductsPage';
import { CartPage } from '../../saucedemo/pages/CartPage';
import { CheckoutPage } from '../../saucedemo/pages/CheckoutPage';
import { CheckoutOverviewPage } from '../../saucedemo/pages/CheckoutOverviewPage';

test('SC-01 User successfully completes purchase flow', { tag: ['@smoke'] }, async ({ page }) => {
  const user = getStandardUser();
  const loginPage = new LoginPage(page);
  const productPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const checkoutOverviewPage = new CheckoutOverviewPage(page);
  const testProduct = 'Sauce Labs Onesie';
  const expCompleteText = 'Your order has been dispatched, and will arrive just as fast as the pony can get there!';

  //login
  await loginPage.goToLoginForm();
  await loginPage.login(user);

  //add to cart
  await productPage.addProductToCartByName(testProduct);

  //open cart
  await productPage.goToCart();
  await expect(await cartPage.getLocatorByProductName(testProduct)).toBeVisible();

  //checkout
  await cartPage.clickCheckout();
  await checkoutPage.fillCheckoutForm(user);
  await checkoutPage.clickContinue();
  await expect(await checkoutOverviewPage.getItemLocatorByName(testProduct)).toBeVisible();

  //finish
  await checkoutOverviewPage.clickFinish();
  await expect(await checkoutOverviewPage.getCompleteMessageLocator()).toHaveText(expCompleteText);
});
