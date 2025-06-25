import { expect } from '@playwright/test';
import { test } from './fixtures/BaseFixture';
import { getStandardUser } from './test-data';

test(
  'SC-01 User successfully completes purchase flow',
  { tag: ['@smoke'] },
  async ({ loginPage, productPage, cartPage, checkoutPage, checkoutOverviewPage }) => {
    const user = getStandardUser();
    const testProduct = 'Sauce Labs Onesie';
    const expCompleteText = 'Your order has been dispatched';

    await test.step('Login as standard_user', async () => {
      await loginPage.goToLoginForm();
      await loginPage.login(user);
    });

    await test.step('Add "Sauce Labs Onesie" to cart', async () => {
      await productPage.getProductItem(testProduct).addProductToCart();
    });

    await test.step('Open cart and observe that the selected product in the cart', async () => {
      await productPage.goToCart();
      await expect(
        cartPage.getCartItem(testProduct).locators.getProductItemLocatorByName(testProduct)
      ).toBeVisible();
    });

    await test.step('Fill the checkout form and click "Continue"', async () => {
      await cartPage.clickCheckout();
      await checkoutPage.fillCheckoutForm(user);
      await checkoutPage.clickContinue();
      await expect(await checkoutOverviewPage.getItemLocatorByName(testProduct)).toBeVisible();
    });

    await test.step('Complete purchase', async () => {
      await checkoutOverviewPage.clickFinish();
      await expect(await checkoutOverviewPage.getCompleteMessageLocator()).toContainText(
        expCompleteText
      );
    });
  }
);
