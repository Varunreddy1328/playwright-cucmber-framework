const {test} = require('@playwright/test');

test('alerts validation',async({page})=>{

    await page.goto("https://rahulshettyacademy.com/automationpractice/");

    // await page.goBack();
    // await page.goForward();

    //java related pop up and dialog box

    page.on("dialog",dialog=>dialog.accept());
    await page.locator("#confirmbtn").click();

    //.hover() - method 
});


test('frames validation',async({page})=>{

    await page.goto("https://rahulshettyacademy.com/automationpractice/");
   const framesPage = page.frameLocator("#courses-iframe")
   framesPage.locator("li a[href*='lifetime-access']:visible").click();

   const text = await framesPage.locator(".text h2").textContent();
   console.log(text.split(" ")[1]);
   


})