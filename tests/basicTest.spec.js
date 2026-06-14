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

})

test('page fixture example',async ({page})=> {
 
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");


})

