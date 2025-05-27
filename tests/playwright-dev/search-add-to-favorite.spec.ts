import {test, expect, Page} from "playwright/test"

test("PW-06 Add recent search data to favorite", {tag: ['@search', '@playwright']}, async ({ page }) => {
    await addSearchDataToRecent(page);
    //Відкриваю пошук
    await page.locator(".DocSearch-Button").click();
    //Перевіряю, що присутній розділ Recent
    expect(await page.locator(".DocSearch-Hit-source").innerText()).toEqual("Recent");
    //Клікаю на зірочку, додаючи елемент в Favorite
    await page.locator("[title = 'Save this search']").click();
    //Тут я додав вейт на очікування елементу першого елемента списку, так як скрипт відпрацьовує дуже повільно
    await page.locator("#docsearch-favoriteSearches-item-0").waitFor({state: "visible", timeout: 1000});
    //Перевіряю що відображається розділ Favorite
    expect(await page.locator(".DocSearch-Hit-source").innerText()).toEqual("Favorite");
    //Тут рука тягнеться додати видалення))
})

// test("PW-07 Remove search data from favorite", {tag: ['@search', '@playwright']}, async ({ page }) => {
// })

async function addSearchDataToRecent(page: Page) {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    //Відкриваю пошук
    await page.locator(".DocSearch-Button").click();
    //Заповнюю інпут текстом "click"
    await page.locator(".DocSearch-Input").fill("click");
    //Клікаю в перший елемент зі списку (це додасть елемент в список Recent)
    await page.locator("#docsearch-hits0-item-0").click();
    //Перевіряю, що на відкритій сторінці активна контекстна лінка з текстом "Mouse click"
    expect(await page.locator(".table-of-contents__link--active").innerText()).toEqual("Mouse click");
}