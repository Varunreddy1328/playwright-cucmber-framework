const {test,expect} = require('@playwright/test');

test ('Calender Validation',async ({page})=> {


    const month = '6';
    const year = '2024';
    const date = '20';

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").nth(2).click();
    

});