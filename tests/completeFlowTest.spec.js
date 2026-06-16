const {test,expect} = require('@playwright/test');


test('Register Account',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator(".btn1").last().click();

    await page.locator("#firstName").fill("Wierd");
    await page.locator("#lastName").fill("Ready");
    await page.locator("#userEmail").fill("c232323@gmail.com");
    await page.locator("#userMobile").fill("1234567890");
    await page.locator("#userPassword").fill("Learning@830$3mK2");
    await page.locator("#confirmPassword").fill("Learning@830$3mK2");
    await page.locator('input[type="checkbox"]').check();
    await page.locator('input[value="Register"]').click();

   await page.locator("text='Login'").last().click();




});

test.only('login page',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator("#userEmail").fill("c232323@gmail.com");
    await page.locator("#userPassword").fill("Learning@830$3mK2");
    await page.locator('input[value="Login"]').click();
});


test.only("order id validation",async({page})=>{

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator("#userEmail").fill("c232323@gmail.com");
    await page.locator("#userPassword").fill("Learning@830$3mK2");
    await page.locator('input[value="Login"]').click();

    await page.locator('.card-body').first().waitFor();

    await page.locator('.card-body').filter({hasText: "iphone 13 pro"}).getByRole('button',{name:"Add To Cart"}).click();

    await page.getByRole("listitem").filter({hasText:"Cart"}).click();

    await page.locator('div li').first().waitFor();

    await expect(page.getByText("IPHONE 13 PRO")).toBeVisible();

    await page.getByRole('button', { name: "Checkout" }).click();

    await page.getByPlaceholder("Select Country").pressSequentially("ind");

    await page.getByRole("button", { name: "India" }).nth(1).click();

    await page.getByText("Place Order").click();

    await expect(page.getByText(" Thankyou for the order. ")).toBeVisible();



});

