import { test, expect } from '@playwright/test';
import { Registration } from '../../conduit/pages/registration';
import { ArticleCreationFormPage } from '../../conduit/pages/article-creation';
import { Profile } from '../../conduit/pages/profile';
import { generateArticles, generateRegistrationUserData } from '../../conduit/helpers/creation-test-data';
import { NavigationBar } from '../../conduit/pages/top-bar-navigation';

const user = generateRegistrationUserData();
let registerPage: Registration;
let articleCreationPage: ArticleCreationFormPage;
let profilePage: Profile;
let navigation: NavigationBar;

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com/');
});

test('Should allow me to create multiple articles', { tag: '@webdriverio' }, async ({ page }) => {
  const articles = generateArticles(3);

  registerPage = new Registration(page);
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
  registerPage = new Registration(page);
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
