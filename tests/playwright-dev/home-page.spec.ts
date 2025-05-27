import { test, expect } from '@playwright/test';
import { PLAYWRIGHT_HOME_PAGE_NAVBAR } from '../../constants/playwright-constants';
import * as PlaywrightConstants from '../../constants/playwright-constants';

test('PW-01 Theme toggle - theme should be change', { tag: '@playwright' }, async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  const oldTheme = await page.locator('html').getAttribute('data-theme');
  await page.locator(PLAYWRIGHT_HOME_PAGE_NAVBAR.themeSwitchBtn).click();
  const newTheme = await page.locator('html').getAttribute('data-theme');
  expect(oldTheme).not.toEqual(newTheme);
});

test('PW-02 Change programming language to Java', { tag: '@playwright' }, async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  expect(await page.locator(PLAYWRIGHT_HOME_PAGE_NAVBAR.navBarTitle).innerText()).toEqual(
    'Playwright'
  );
  await page.locator(PLAYWRIGHT_HOME_PAGE_NAVBAR.langDropdown).click();
  await page.locator(PLAYWRIGHT_HOME_PAGE_NAVBAR.langDropdownJava).click();
  expect(await page.locator(PLAYWRIGHT_HOME_PAGE_NAVBAR.navBarTitle).innerText()).toEqual(
    'Playwright for Java'
  );
});

test('PW-03 Browsers logo should be visible', { tag: '@playwright' }, async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  expect(await page.locator(PLAYWRIGHT_HOME_PAGE_NAVBAR.browsersLogo).isVisible()).toBeTruthy();
});

test(
  'PW-04 Click on "Get started" button should redirect to Installation page',
  { tag: '@playwright' },
  async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    await page.locator(PlaywrightConstants.startedButton).click();
    await expect(page).toHaveTitle('Installation | Playwright');
  }
);

test(
  'PW-05 Click on "Community" button should redirect to Welcome page',
  { tag: '@playwright' },
  async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    await page.locator(PLAYWRIGHT_HOME_PAGE_NAVBAR.communityButton).click();
    await expect(page).toHaveTitle('Welcome | Playwright');
  }
);
