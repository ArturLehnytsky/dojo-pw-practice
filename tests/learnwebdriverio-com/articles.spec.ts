import { test, expect } from '@playwright/test';
import { User } from '../../conduit/helpers/creation-test-data';
import { LoginPage } from '../../conduit/pages/login';
import { HomePage } from '../../conduit/pages/home';
import { NavigationBar } from '../../conduit/pages/top-bar-navigation';

const user: User = {
  name: 'cryptozeus',
  email: 'cryptozeus@yopmail.com',
  password: 'JHgFD&kl',
};

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com/');
});

test('Selected article has the same tag', { tag: '@conduit' }, async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const navigation = new NavigationBar(page);

  await navigation.clickSignInBtn();

  await loginPage.logIn(user);
  await page.waitForLoadState('load');

  await homePage.clickMyFeedTab();
  await homePage.clickGlobalFeedTab();

  await homePage.clickPopularTag('dojo');
  await homePage.clickFirstArticle();

  await expect(page.locator('//*[@data-qa-type="article-tag"]/*[contains(text(), "dojo")]')).toBeVisible();
});
