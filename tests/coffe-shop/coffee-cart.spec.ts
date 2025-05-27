import { expect, test } from '@playwright/test';

test(
  'СS-01 Complete purchase from shopping cart with agrees to receive promotions',
  { tag: '@coffee' },
  async ({ page }) => {
    await page.goto('https://coffee-cart.app/');
    await expect(page).toHaveTitle(/Coffee cart/);
    await page.locator("[data-test='Espresso']").click();
    await page.locator("[aria-label='Cart page']").click();
    await page.locator("[data-test='checkout']").click();
    await page.locator("#name").fill('Artur');
    await page.locator("#email").fill('coffeeshopping@test.com');
    await page.locator("#promotion").click();
    await page.locator("#submit-payment").click();
    await expect(page.locator(".snackbar:not([style='display: none;'])")).toBeVisible();
  }
);

test('СS-02 Remove added coffee from shopping cart', { tag: '@coffee' }, async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await expect(page).toHaveTitle(/Coffee cart/);
  await page.locator("[data-test='Espresso']").click();
  await page.locator("[aria-label='Cart page']").click();
  await page.locator(".delete").click();
  await expect(page.locator(".list>p")).toHaveText("No coffee, go add some.");
});

test(
  'СS-03 Display promo pop up when adding 3 coffee to shopping cart',
  { tag: '@coffee' },
  async ({ page }) => {
    await page.goto('https://coffee-cart.app/');
    await expect(page).toHaveTitle(/Coffee cart/);
    await page.locator("[data-test='Espresso']").click();
    await page.locator("[data-test='Cappuccino']").click();
    await page.locator("[data-test='Flat_White']").click();
    await expect(page.locator(".promo span")).toHaveText("It's your lucky day! Get an extra cup of Mocha for $4.")
  }
);

test(
  'СS-04 Double click on coffee title to translate it to Chinese',
  { tag: '@coffee' },
  async ({ page }) => {
    await page.goto('https://coffee-cart.app/');
    await expect(page).toHaveTitle(/Coffee cart/);
    await page.locator("ul>li:nth-child(3)>h4").dblclick(); //double click Cappuccino title
    await expect(page.locator("ul>li:nth-child(3)>h4")).toHaveText('卡布奇诺 $19.00');
  }
);

test(
  'СS-05 Add coffee to shopping card via right click menu',
  { tag: '@coffee' },
  async ({ page }) => {
    await page.goto('https://coffee-cart.app/');
    await expect(page).toHaveTitle(/Coffee cart/);
    await page.locator("[data-test='Espresso']").click({ button: 'right' });
    await expect(page.locator("[data-cy='add-to-cart-modal'][open]")).toBeVisible();
    await page.locator("[method]>button:first-child").click();
    await page.locator("[aria-label='Cart page']").click();
    await expect(page.locator('.list ul:not(.cart-preview) .list-item div:first-child')).toBeVisible();
  }
);
