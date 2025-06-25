import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { SauceUserData } from '../../../tests/saucedemo/test-data';

export class CheckoutPage extends BasePage {
  private firstNameField: Locator;
  private lastNameField: Locator;
  private zipCodeField: Locator;
  private continueButton: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameField = page.getByPlaceholder('First Name');
    this.lastNameField = page.getByPlaceholder('Last Name');
    this.zipCodeField = page.getByPlaceholder('Zip/Postal Code');
    this.continueButton = page.getByRole('button', { name: 'Continue' });
  }

  async fillFirstName(firstName: string) {
    await this.firstNameField.fill(firstName);
  }

  async fillLastName(lastName: string) {
    await this.lastNameField.fill(lastName);
  }

  async fillZipCode(zipCode: string) {
    await this.zipCodeField.fill(zipCode);
  }

  async fillCheckoutForm(user: SauceUserData) {
    await this.fillFirstName(user.firstName);
    await this.fillLastName(user.lastName);
    await this.fillZipCode(user.zip);
  }

  async clickContinue() {
    await this.continueButton.click();
  }
}
