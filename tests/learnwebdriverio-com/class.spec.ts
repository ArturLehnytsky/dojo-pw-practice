import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../../app/conduit/pages/RegistrationPage';
import { ArticleCreationFormPage } from '../../app/conduit/pages/ArticleCreationPage';
import { Profile } from '../../app/conduit/pages/ProfilePage';
import { generateArticles, generateRegistrationUserData } from '../../app/conduit/helpers/creation-test-data';
import { NavigationBar } from '../../app/conduit/pages/TopBarNavigation';

const user = generateRegistrationUserData();
let registerPage: RegistrationPage;
let articleCreationPage: ArticleCreationFormPage;
let profilePage: Profile;
let navigation: NavigationBar;

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com/');
});

test('Should allow me to create multiple articles', { tag: '@webdriverio' }, async ({ page }) => {
  const articles = generateArticles(3);

  registerPage = new RegistrationPage(page);
  articleCreationPage = new ArticleCreationFormPage(page);
  profilePage = new Profile(page);
  navigation = new NavigationBar(page);

  await navigation.clickSignUpBtn();
  await registerPage.registerUser(user);

  for (let i = 0; i < articles.length; i++) {
    await articleCreationPage.goToArticleCreationPage();
    await articleCreationPage.createFullFilledArticle(articles[i]);

    await articleCreationPage.expectArticleTitleToBe(articles[i].title);
  }

  await profilePage.goToProfile(user);

  for (let i = articles.length; i <= 0; i--) {
    await expect(profilePage.articlePreviewTitle.nth(i)).toHaveText(articles[i].title);
  }
});

test('Should allow me to create article with title filled only', { tag: '@webdriverio' }, async ({ page }) => {
  const articles = generateArticles();
  registerPage = new RegistrationPage(page);
  articleCreationPage = new ArticleCreationFormPage(page);
  profilePage = new Profile(page);
  navigation = new NavigationBar(page);

  await navigation.clickSignUpBtn();
  await registerPage.registerUser(user);

  for (let i = 0; i < articles.length; i++) {
    await articleCreationPage.goToArticleCreationPage();
    await articleCreationPage.createFullFilledArticle(articles[i]);

    await articleCreationPage.expectArticleTitleToBe(articles[i].title);
  }

  await profilePage.goToProfile(user);

  for (let i = articles.length; i <= 0; i--) {
    await expect(profilePage.articlePreviewTitle.nth(i)).toHaveText(articles[i].title);
  }
});
