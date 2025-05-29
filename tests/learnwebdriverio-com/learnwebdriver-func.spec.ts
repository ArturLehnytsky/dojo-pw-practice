import { test, expect, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker';

//Test-Data: User
const user = {
  name: faker.person.firstName(),
  email: faker.internet.email(),
  password: 'JHgFD&kl',
};

//Test-Data: Articles
const textForArticle = faker.lorem.text();
const articles = [
  { title: 'First Article - Test', description: 'Description for article (1)', text: textForArticle, tag: 'test-tag' },
  { title: 'Second Article - Test', description: 'Description for article (2)', text: textForArticle, tag: 'test-tag' },
  { title: 'Third Article - Test', description: 'Description for article (3)', text: textForArticle, tag: 'test-tag' },
];

//Home page
const goToRegistrationForm = (page: Page) => page.locator('[href="/register"]').click();

//Register new user form page
const fillUserName = (page: Page) => page.locator('[placeholder="Username"]').fill(user.name);
const fillUserEmail = (page: Page) => page.locator('[placeholder="Email"]').fill(user.email);
const fillUserPassword = (page: Page) => page.locator('[placeholder="Password"]').fill(user.password);
const clickSignUpBtn = (page: Page) => page.locator('//button[contains(text(), "Sign up")]').click();

//Create new article form page
const goToArticleCreationPage = (page: Page) => page.locator('[href="/editor"]').click();
const fillArticleTitle = (page: Page, title: string) => page.locator('[data-qa-id="editor-title"]').fill(title);
const fillArticleDescription = (page: Page, desc: string) => page.locator('[data-qa-id="editor-description"]').fill(desc);
const fillArticleText = (page: Page, text: string) => page.locator('[placeholder="Write your article (in markdown)"]').fill(text);
const fillArticleTag = (page: Page, tag: string) => page.locator('[data-qa-id="editor-tags"]').fill(tag);
const clickCreateArticleBtn = (page: Page) => page.locator('[data-qa-id="editor-publish"]').click();
const createdArticleTitle = (page: Page) => page.locator('[data-qa-id="article-title"]');

//Profile page
const goToProfile = (page: Page) => page.locator(`//li[@class = "nav-item"]/a[@href="/@${user.name.toLowerCase()}/"]`).click();
const getArticlePreviewTitleLocator = (page: Page) => page.locator('//*[@data-qa-type = "preview-title"]');

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com/');
});

test('Should allow me to create multiple articles', { tag: '@webdriverio' }, async ({ page }) => {
  await registerNewUser(page);

  for (let i = 0; i < articles.length; i++) {
    await createNewArticle(page, articles[i].title, articles[i].description, articles[i].text, articles[i].tag);
    await expect(createdArticleTitle(page)).toHaveText(articles[i].title);
  }

  await goToProfile(page);

  for (let i = articles.length; i <= 0; i--) {
    await expect(getArticlePreviewTitleLocator(page).nth(i)).toHaveText(articles[i].title);
  }
});

async function registerNewUser(page: Page) {
  await goToRegistrationForm(page);
  await fillUserName(page);
  await fillUserEmail(page);
  await fillUserPassword(page);
  await clickSignUpBtn(page);
}

async function createNewArticle(page: Page, title: string, desc: string, text: string, tag: string) {
  await goToArticleCreationPage(page);
  await fillArticleTitle(page, title);
  await fillArticleDescription(page, desc);
  await fillArticleText(page, text);
  await fillArticleTag(page, tag);
  await clickCreateArticleBtn(page);
}
