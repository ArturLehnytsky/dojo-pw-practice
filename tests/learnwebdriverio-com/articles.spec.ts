import { test, expect } from '@playwright/test';
import { User } from '../../app/conduit/helpers/creation-test-data';
import { HomePage } from '../../app/conduit/pages/HomePage';
import { NavigationBar } from '../../app/conduit/pages/TopBarNavigation';
import { ArticleDetailsPage } from '../../app/conduit/pages/ArticleDetailsPage';
import { RegistrationPage } from '../../app/conduit/pages/RegistrationPage';

const user: User = {
  name: 'cryptozeus',
  email: 'cryptozeus@yopmail.com',
  password: 'JHgFD&kl',
};

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com/');
});

test('WBDR-01 Selected article has the same tag', { tag: '@conduit' }, async ({ page }) => {
  const registrationPage = new RegistrationPage(page);
  const homePage = new HomePage(page);
  const navigation = new NavigationBar(page);
  const articleDetails = new ArticleDetailsPage(page);

  await navigation.clickSignUpBtn();

  await registrationPage.registerUser(user);
  await expect(homePage.getProfileBtnLocatorByUsername(user)).toBeVisible();

  await homePage.clickMyFeedTab();
  await expect(homePage.getTabBtnLocator('my-feed')).toBeVisible();

  await homePage.clickGlobalFeedTab();
  await expect(homePage.getTabBtnLocator('global')).toBeVisible();

  await homePage.clickPopularTag('dojo');
  await expect(homePage.getTabBtnLocator('tag')).toBeVisible();

  await homePage.clickArticleByNumber();
  await expect(articleDetails.getTagLocatorByName('dojo')).toBeVisible();
});
