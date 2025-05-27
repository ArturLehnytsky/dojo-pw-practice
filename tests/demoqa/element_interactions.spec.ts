import {test, expect, Locator} from "@playwright/test";
import {faker} from "@faker-js/faker"

test.beforeEach(async ({page}) => {
    await page.route(/ads\?|google|sodar|serving|zero-step/i, route => route.abort()
    );
    await page.goto('https://demoqa.com/elements');
})

test("DQ-01 Text box - Fill allowed inputs", {tag: "@demoqa"},  async ({page}) => {
    const textBoxSection = "Text Box";
    const fullName = "Full Name";
    const email = "Email";
    const currentAddress = "Current Address";
    const permanentAddress = "Permanent Address";

    await page.locator(`//ul[@class = 'menu-list']/li/span[contains(text(), '${textBoxSection}')]`).click();
    await page.locator(`//label[text() = '${fullName}']/../..//input`).fill(faker.person.fullName());
    await page.locator(`//label[text() = '${email}']/../..//input`).fill(faker.internet.email().toLowerCase());
    await page.locator(`//label[text() = '${currentAddress}']/../..//textarea`)
        .fill(faker.location.streetAddress({useFullAddress:true}));
    await page.locator(`//label[text() = '${permanentAddress}']/../..//textarea`)
        .fill(faker.location.streetAddress({useFullAddress:true}));
    await page.locator(`//button[text() = 'Submit']`).click();
})

test("DQ-02 Check box - To check checkbox", async ({page}) => {
    const checkBoxSection = "Check Box";
    const reactCheckbox = "React";

    await page.locator(`//ul[@class = 'menu-list']/li/span[contains(text(), '${checkBoxSection}')]`).click();
    await page.locator(`//span[text() = 'Home']/parent::label/preceding-sibling::button`).click();

    //await page.locator(`//button[@title = 'Expand all']`).click();
    await page.locator(`//span[text()='${reactCheckbox}']/parent::label`).click(); //запитати чому не працює /preceding-sibling::input
    await expect(page.locator(`//span[@class = 'text-success']`)).toHaveText(reactCheckbox.toLowerCase());
})

test("DQ-03 Radio button - Select radio button", async ({page}) => {
    const radioButtonSection = "Radio Button";
    const yesRadio = "Yes";
    const impressive = "Impressive";

    await page.locator(`//ul[@class = 'menu-list']/li/span[contains(text(),'${radioButtonSection}')]`).click();
    await page.locator(`//label[text()='${yesRadio}']/preceding-sibling::input`).click({force:true});
    await expect(page.locator(`//span[@class = 'text-success']`)).toHaveText(yesRadio);
    await page.locator(`//label[text()='${impressive}']/preceding-sibling::input`).click({force:true});
    await expect(page.locator(`//span[@class = 'text-success']`)).toHaveText(impressive);
})

test("DQ-04 Buttons - click button", async ({page}) => {
    const buttonsSection = "Buttons";

    await page.locator(`//ul[@class = 'menu-list']/li/span[contains(text(),'${buttonsSection}')]`).click();
    await page.locator(`//button[@id = 'doubleClickBtn']`).dblclick();
    await expect(page.locator(`//p[@id = 'doubleClickMessage']`)).toHaveText("You have done a double click");
    await page.locator(`//button[@id = 'rightClickBtn']`).click({button:"right"});
    await expect(page.locator(`//p[@id = 'rightClickMessage']`)).toHaveText("You have done a right click");
    await page.locator(`//button[text() = 'Click Me']`).click();
    await expect(page.locator(`//p[contains(text(), 'dynamic click')]`)).toHaveText("You have done a dynamic click");
})



