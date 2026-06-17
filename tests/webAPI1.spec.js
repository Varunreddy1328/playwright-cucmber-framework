const{expect,test, request} = require('@playwright/test');

const loginPayload = {

    userEmail:"asds@mail.com",
    userPassword:"asds@123"
}

test.beforeAll(() => {
    
    const apiContext =  request.newContext();
    apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",

    {
        data:loginPayload
    }

)});


test.beforeEach(() => {

});