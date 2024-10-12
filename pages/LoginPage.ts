import { Page } from "@playwright/test";

export default class LogingPage{

    constructor(public page:Page){}

    async enterEmail(email: string){
        await this.page.locator('#input-email').type(email);
    }

    async enterPassword(pass: string){
        await this.page.locator('#input-password').type(pass);
    }

    async clickLogin(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.locator("//input[@type='submit']").click()
        ])
    }

    async Login(email:string, pass:string){
        this.enterEmail(email);
        this.enterPassword(pass);
        this.clickLogin();
    }
}