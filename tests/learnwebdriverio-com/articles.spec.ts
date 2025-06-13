import { test, expect } from '@playwright/test';
import { User } from '../../conduit/helpers/creation-test-data';
import { LoginPage } from '../../conduit/pages/LoginPage';
import { HomePage } from '../../conduit/pages/HomePage';
import { NavigationBar } from '../../conduit/pages/TopBarNavigation';
import { ArticleDetailsPage } from '../../conduit/pages/ArticleDetailsPage';

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
  const articleDetails = new ArticleDetailsPage(page);

  await navigation.clickSignInBtn();

  await loginPage.logIn(user);
  await page.waitForLoadState('load');

  await homePage.clickMyFeedTab();
  await homePage.clickGlobalFeedTab();

  await homePage.clickPopularTag('dojo');
  await homePage.clickFirstArticle();

  expect(await articleDetails.isTagVisible('dojo')).toBeTruthy();
});
