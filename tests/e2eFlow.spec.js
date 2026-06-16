const {expect,test} = require('@playwright/test');

test('E2E Flow Valdation',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    // css and xpath selectors are used to locate elements on a web page.
    //  CSS selectors are based on the HTML structure and use CSS syntax, while XPath selectors use a path-like syntax to navigate the HTML document.

    const userName = page.locator('#username');
    const password = page.locator('#password');
    const signInButton = page.locator('#signInBtn');
    const cardTitles = page.locator('.card-body a');
    const errorMessage = page.locator("[style*='block']");

    await userName.fill('rahulshettyacademy');
    await password.fill('Learning@830$3mK2');

    await signInButton.click();

    await page.locator("a[href*='angular']").first().click();
  
   await page.getByLabel('Check me out if you Love IceCreams!').check();
   await page.getByLabel("Employed").check();
   await page.getByLabel("Gender").selectOption("Male");
   await page.getByPlaceholder("Password").fill("learning");
   await page.getByRole('button', { name: 'Submit' }).click();
   await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

   await page.getByRole('link', { name: 'Shop' }).click();
   await page.locator("app-card").filter({hasText: "Samsung Note 8"}).getByRole('button',{name:"Add"}).click();

});