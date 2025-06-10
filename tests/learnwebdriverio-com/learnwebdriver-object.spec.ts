import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../../conduit/pages/registration-page';
import { ArticleCreationFormPage } from '../../conduit/pages/article-creation-page';
import { ProfilePage } from '../../conduit/pages/profile-page';
import { generateArticles, generateRegistrationUserData } from '../../conduit/helpers/creation-test-data';

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com/');
});

test('Should allow me to create multiple articles', { tag: '@webdriverio' }, async ({ page }) => {
  const articles = generateArticles(3);
  const user = generateRegistrationUserData();
  const registerPage = new RegistrationPage(page);
  const articleCreationPage = new ArticleCreationFormPage(page);
  const profilePage = new ProfilePage(page);

  await registerPage.goToRegistrationForm();
  await registerPage.userNameInputdLocator.fill(user.name);
  await registerPage.userEmailInputLocator.fill(user.email);
  await registerPage.userPasswordInputLocator.fill(user.password);
  await registerPage.signUpBtnLocator.click();

  for (let i = 0; i < articles.length; i++) {
    await articleCreationPage.goToArticleCreationPage();
    await articleCreationPage.articleTitleInputLocator.fill(articles[i].title);
    await articleCreationPage.articleDescriptionInputLocator.fill(articles[i].description);
    await articleCreationPage.articleTextInputLocator.fill(articles[i].text);
    await articleCreationPage.articleTagInputLocator.fill(articles[i].tag);
    await articleCreationPage.createArticleBtnLocator.click();

    await expect(articleCreationPage.justCreatedArticleTitleLocator).toHaveText(articles[i].title);
  }

  await profilePage.goToProfile(user.name);

  for (let i = articles.length; i <= 0; i--) {
    await expect(profilePage.articlePreviewTitleLocator.nth(i)).toHaveText(articles[i].title);
  }
});

test('Should allow me to create article with title filled only', { tag: '@webdriverio' }, async ({ page }) => {
  const articles = generateArticles();
  const user = generateRegistrationUserData();
  const registerPage = new RegistrationPage(page);
  const articleCreationPage = new ArticleCreationFormPage(page);
  const profilePage = new ProfilePage(page);

  await registerPage.goToRegistrationForm();
  await registerPage.userNameInputdLocator.fill(user.name);
  await registerPage.userEmailInputLocator.fill(user.email);
  await registerPage.userPasswordInputLocator.fill(user.password);
  await registerPage.signUpBtnLocator.click();

  for (let i = 0; i < articles.length; i++) {
    await articleCreationPage.goToArticleCreationPage();
    await articleCreationPage.articleTitleInputLocator.fill(articles[i].title);
    await articleCreationPage.createArticleBtnLocator.click();

    await expect(articleCreationPage.justCreatedArticleTitleLocator).toHaveText(articles[i].title);
  }

  await profilePage.goToProfile(user.name);

  for (let i = articles.length; i <= 0; i--) {
    await expect(profilePage.articlePreviewTitleLocator.nth(i)).toHaveText(articles[i].title);
  }
});
