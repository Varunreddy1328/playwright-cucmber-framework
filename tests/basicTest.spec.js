const {test,expect} = require ('@playwright/test');


// test is a global function which is used to define a test case.
//  It takes two arguments: the name of the test case and a callback function that contains the test code.
//  The callback function can be asynchronous, allowing you to use await for asynchronous operations.
//. Destructuring is a JavaScript feature that allows you to extract values from arrays or properties from objects and assign them to variables in a more concise way.
//  In this case, we are using destructuring to extract the test function from the @playwright/test module, allowing us to use it directly in our code without having to reference the module each time.

test('first test',async ({browser})=> {
 
    const context = await browser.newContext();
    const page = await context.newPage();
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

    if(await errorMessage.isVisible()){
    console.log(await errorMessage.textContent());
    await expect(errorMessage).toContainText("Incorrect");
    }
    else{
        console.log(await cardTitles.nth(0).textContent());
    }

    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
})

test('page fixture example',async ({page})=> {
 
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");


})

test.only('Drop Down example',async ({page})=> {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const dropDown = page.locator('select.form-control');
    const radioBtn = page.locator(".radiotextsty").nth(1)
    const checkBox = page.locator("#terms");
    await dropDown.selectOption('consult');
    await expect(dropDown).toHaveValue('consult');
    await radioBtn.click();
    await page.locator("#okayBtn").click();
    await expect(radioBtn).toBeChecked();
    await checkBox.click();
    await expect(checkBox).toBeChecked();
    await checkBox.uncheck();
    await expect(checkBox).not.toBeChecked();
    
});