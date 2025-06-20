import { BasePage } from './BasePage';
import { Locator, Page } from '@playwright/test';

export class CheckoutOverviewPage extends BasePage {
  private finishButton: Locator;
  private cancelButton: Locator;
  private completeMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.finishButton = page.getByRole('button', { name: 'Finish' });
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    this.completeMessage = page.locator('//*[@data-test="complete-text"]');
  }

  async getItemLocatorByName(name: string) {
    return this.page.locator('//*[@data-test = "inventory-item-name"]', { hasText: name });
  }

  async clickFinish() {
    await this.finishButton.click();
  }

  async clickCancel() {
    await this.cancelButton.click();
  }

  async getCompleteMessageLocator() {
    return this.completeMessage;
  }
}
