import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const textBoxLabel = 'Text Box';
const checkBoxLabel = 'Check Box';
const reactLabel = 'React';
const radioButtonLabel = 'Radio Button';
const buttonsLabel = 'Buttons';
const inputNameFullName = 'Full Name';
const inputNameEmail = 'Email';
const currentAddressTextAreaName = 'Current Address';
const permanentAddressTextAreaName = 'Permanent Address';

test.beforeEach(async ({ page }) => {
  await page.route(/ads\?|google|sodar|serving|zero-step/i, (route) => route.abort());
  await page.goto('https://demoqa.com/elements');
});

test('DQ-01 Text box - Fill allowed inputs', { tag: '@demoqa' }, async ({ page }) => {
  const userFullName = faker.person.fullName();
  const userAddress = faker.location.streetAddress({ useFullAddress: true });
  const userEmail = faker.internet.email().toLowerCase();
  const menuTextBoxSection = page.locator(`//ul[@class = 'menu-list']/li/span[contains(text(), '${textBoxLabel}')]`);
  const inputFullName = page.locator(`//label[text() = '${inputNameFullName}']/../..//input`);
  const inputEmail = page.locator(`//label[text() = '${inputNameEmail}']/../..//input`);
  const textAreaCurrentAddress = page.locator(`//label[text() = '${currentAddressTextAreaName}']/../..//textarea`);
  const textAreaPermanentAddress = page.locator(`//label[text() = '${permanentAddressTextAreaName}']/../..//textarea`);
  const submitBtn = page.locator(`//button[text() = 'Submit']`);

  await menuTextBoxSection.click();
  await inputFullName.fill(userFullName);
  await inputEmail.fill(userEmail);
  await textAreaCurrentAddress.fill(userAddress);
  await textAreaPermanentAddress.fill(userAddress);
  await submitBtn.click();
});

test('DQ-02 Checkboxes should be selectable', { tag: '@demoqa' }, async ({ page }) => {
  const menuCheckboxSection = page.locator(`//ul[@class = 'menu-list']/li/span[contains(text(), '${checkBoxLabel}')]`);
  const expandAllBtn = page.locator(`//button[@title = 'Expand all']`);
  const reactCheckbox = page.locator(`//*[text()='${reactLabel}']/parent::label`);
  const resultMessage = page.locator(`//*[@class = 'text-success']`);

  await menuCheckboxSection.click();
  await expandAllBtn.click();
  await reactCheckbox.click();
  await expect(resultMessage).toHaveText(reactLabel.toLowerCase());
});

test('DQ-03 Radio buttons should be selectable', { tag: '@demoqa' }, async ({ page }) => {
  const yesLabel = 'Yes';
  const impressiveLabel = 'Impressive';
  const menuRadioBtnSection = page.locator(`//ul[@class = 'menu-list']/li/*[contains(text(),'${radioButtonLabel}')]`);
  const yesRadioBtn = page.locator(`//label[text()='${yesLabel}']/preceding-sibling::input`);
  const impressiveRadioBtn = page.locator(`//label[text()='${impressiveLabel}']/preceding-sibling::input`);
  const resultMessage = page.locator(`//*[@class = 'text-success']`);

  await menuRadioBtnSection.click();
  await yesRadioBtn.click({ force: true });
  await expect(resultMessage).toHaveText(yesLabel);
  await impressiveRadioBtn.click({ force: true });
  await expect(resultMessage).toHaveText(impressiveLabel);
});

test('DQ-04 Buttons - should be clickable', { tag: '@demoqa' }, async ({ page }) => {
  const menuButtonsSection = page.locator(`//ul[@class = 'menu-list']/li/*[contains(text(),'${buttonsLabel}')]`);
  const doubleClickBtn = page.locator(`//button[@id = 'doubleClickBtn']`);
  const dblclickBtnResultMessage = page.locator(`//p[@id = 'doubleClickMessage']`);
  const rightClickBtn = page.locator(`//button[@id = 'rightClickBtn']`);
  const rightClickBtnResultMessage = page.locator(`//p[@id = 'rightClickMessage']`);
  const clickMeBtn = page.locator(`//button[text() = 'Click Me']`);
  const clickMeBtnResultMessage = page.locator(`//p[contains(text(), 'dynamic click')]`);

  await menuButtonsSection.click();
  await doubleClickBtn.dblclick();
  await expect(dblclickBtnResultMessage).toHaveText('You have done a double click');
  await rightClickBtn.click({ button: 'right' });
  await expect(rightClickBtnResultMessage).toHaveText('You have done a right click');
  await clickMeBtn.click();
  await expect(clickMeBtnResultMessage).toHaveText('You have done a dynamic click');
});
