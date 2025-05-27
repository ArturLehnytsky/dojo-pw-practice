import { expect, test } from '@playwright/test';
import { faker } from '@faker-js/faker';

const userName = faker.person.firstName();
const userEmail = faker.internet.email();

test.beforeEach(async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await expect(page).toHaveTitle(/Coffee cart/);
});

test('СS-01 Complete purchase from shopping cart with agrees to receive promotions', { tag: '@coffee' }, async ({ page }) => {
  const cupBodyEspresso = page.locator("[data-test='Espresso']");
  const cartPageNavBarBtn = page.locator("[aria-label='Cart page']");
  const checkoutBtn = page.locator("[data-test='checkout']");
  const inputNameInPayForm = page.locator('#name');
  const inputEmailInPayForm = page.locator('#email');
  const checkboxPromoInPayForm = page.locator('#promotion');
  const submitBtnInPayForm = page.locator("[type='submit']");
  const successSnackbar = page.locator(".snackbar:not([style='display: none;'])");

  await cupBodyEspresso.click();
  await cartPageNavBarBtn.click();
  await checkoutBtn.click();
  await inputNameInPayForm.fill(userName);
  await inputEmailInPayForm.fill(userEmail);
  await checkboxPromoInPayForm.click();
  await submitBtnInPayForm.click();
  await expect(successSnackbar).toBeVisible();
});

test('СS-02 Remove added coffee from shopping cart', { tag: '@coffee' }, async ({ page }) => {
  await page.locator("[data-test='Espresso']").click();
  await page.locator("[aria-label='Cart page']").click();
  await page.locator('.delete').click();
  await expect(page.locator('.list>p')).toHaveText('No coffee, go add some.');
});

test('СS-03 Display promo pop up when adding 3 coffee to shopping cart', { tag: '@coffee' }, async ({ page }) => {
  const cupBodyEspresso = page.locator("[data-test='Espresso']");
  const cupBodyCappuccino = page.locator("[data-test='Cappuccino']");
  const cupBodyFlatWhite = page.locator("[data-test='Flat_White']");
  const promoPopUp = page.locator('.promo');

  await cupBodyEspresso.click();
  await cupBodyCappuccino.click();
  await cupBodyFlatWhite.click();
  await expect(promoPopUp).toContainText("It's your lucky day! Get an extra cup of Mocha for $4.");
});

test('СS-04 Double click on coffee title to translate it to Chinese', { tag: '@coffee' }, async ({ page }) => {
  const coffeeNameEN = 'Cappuccino';
  const coffeeNameCH = '卡布奇诺';
  const cupTitle = page.locator(`//div[@data-test = '${coffeeNameEN}']/ancestor::li//h4`);

  await cupTitle.dblclick();
  await expect(cupTitle).toContainText(coffeeNameCH);
});

test('СS-05 Add coffee to shopping card via right click menu', { tag: '@coffee' }, async ({ page }) => {
  const cupBodyEspresso = page.locator("[data-test='Espresso']");
  const addToCartDialog = page.locator("[data-cy='add-to-cart-modal'][open]");
  const yesBtnInAddToCartDialog = page.locator('[method]>button:first-child');
  const cartPageNavBarBtn = page.locator("[aria-label='Cart page']");
  const firstItemInCart = page.locator('//li[@class = "list-header"]/following-sibling::li/div[text()="Espresso"]');

  await cupBodyEspresso.click({ button: 'right' });
  await expect(addToCartDialog).toBeVisible();
  await yesBtnInAddToCartDialog.click();
  await cartPageNavBarBtn.click();
  await expect(firstItemInCart).toBeVisible();
});
