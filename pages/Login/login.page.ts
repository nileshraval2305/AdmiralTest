import type {Page, Locator} from '@playwright/test';


export default class loginPage
{
   readonly page: Page;
   readonly usernameInput:Locator;
   readonly passwordInput:Locator;
   readonly loginBtnInput:Locator;
   readonly loginHeadertext:Locator;
   readonly validate_login_success:Locator;
   constructor(page:Page)
   {
     this.page=page; 
     this.usernameInput = page.locator('#user-name');
     this.passwordInput = page.locator('#password')
     this.loginBtnInput = page.locator('#login-button');
     this.loginHeadertext = page.locator('.login_logo');
     this.validate_login_success = page.locator('.title');
   


   }

   async navigateToUrl(URL: string) {
    await this.page.goto(URL);
}


async enterUsername(username: string) {
    await this.usernameInput.fill(username);
}

async enterPassword(password: string) {
    await this.passwordInput.fill(password);
}



async loginButton() {
    await this.loginBtnInput.click();
}

async verified_LoginSuccesful() {
    await this.validate_login_success.textContent();
}

async doLogin(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.loginButton();
}













}