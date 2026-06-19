const{expect,test, request} = require('@playwright/test');

const loginPayload = {

    userEmail:"c232323@gmail.com",
    userPassword:"Learning@830$3mK2"
}

test.beforeAll( async () => {
    
    const apiContext =  request.newContext();
    const response = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",

    {
        data:loginPayload
    })

    expect(response.status()).toBe(200);
    const responseJson = await response.json();
    const token = responseJson.token;
    console.log(token);


    apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",)

});


test.beforeEach(() => {

});