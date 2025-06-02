import { test, expect, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker';

//Test-Data: User

interface User {
  name: string;
  email: string;
  password: string;
}

const user: User = {
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
const getUserNameFieldLocator = (page: Page) => page.locator('[placeholder="Username"]');
const getUserEmailFieldLocator = (page: Page) => page.locator('[placeholder="Email"]');
const getUserPasswordFieldLocator = (page: Page) => page.locator('[placeholder="Password"]');
const getSignUpBtnLocator = (page: Page) => page.locator('//button[contains(text(), "Sign up")]');

//Create new article form page
const goToArticleCreationPage = (page: Page) => page.locator('[href="/editor"]').click();
const getArticleTitleLocator = (page: Page, title: string) => page.locator('[data-qa-id="editor-title"]').fill(title);
const getArticleDescriptionLocator = (page: Page, desc: string) => page.locator('[data-qa-id="editor-description"]').fill(desc);
const getArticleTextLocator = (page: Page, text: string) => page.locator('[placeholder="Write your article (in markdown)"]').fill(text);
const getArticleTagLocator = (page: Page, tag: string) => page.locator('[data-qa-id="editor-tags"]').fill(tag);
const getCreateArticleBtnLocator = (page: Page) => page.locator('[data-qa-id="editor-publish"]').click();
const getJustCreatedArticleTitleLocator = (page: Page) => page.locator('[data-qa-id="article-title"]');

//Profile page
const goToProfile = (page: Page, user: User) => page.locator(`//li[@class = "nav-item"]/a[@href="/@${user.name.toLowerCase()}/"]`);
const getArticlePreviewTitleLocator = (page: Page) => page.locator('//*[@data-qa-type = "preview-title"]');

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.learnwebdriverio.com/');
});

test('Should allow me to create multiple articles', { tag: '@webdriverio' }, async ({ page }) => {
  await goToRegistrationForm(page);
  await fillRegistrationForm(page, user.name, user.email, user.password);
  await getSignUpBtnLocator(page).click();

  for (let i = 0; i < articles.length; i++) {
    await createNewArticle(page, articles[i].title, articles[i].description, articles[i].text, articles[i].tag);
    await expect(getJustCreatedArticleTitleLocator(page)).toHaveText(articles[i].title);
  }

  await goToProfile(page, user).click();

  for (let i = articles.length; i <= 0; i--) {
    await expect(getArticlePreviewTitleLocator(page).nth(i)).toHaveText(articles[i].title);
  }
});

async function fillRegistrationForm(page: Page, name?: string, email?: string, password?: string) {
  if (name) await getUserNameFieldLocator(page).fill(name);
  if (email) await getUserEmailFieldLocator(page).fill(email);
  if (password) await getUserPasswordFieldLocator(page).fill(password);
}

async function createNewArticle(page: Page, title: string, desc: string, text: string, tag: string) {
  await goToArticleCreationPage(page);
  await getArticleTitleLocator(page, title);
  await getArticleDescriptionLocator(page, desc);
  await getArticleTextLocator(page, text);
  await getArticleTagLocator(page, tag);
  await getCreateArticleBtnLocator(page);
}
