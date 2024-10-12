import { Page } from "@playwright/test";

export default class RegisterPage{

    constructor(public page: Page){}

    async enterFirstName(name: string){
        await this.page.fill('#input-firstname',name);
    }

    async enterLastName(name: string){
        await this.page.fill('#input-lastname',name);
    }

    async enterEmail(email: string){
        await this.page.fill('#input-email',email);
    }

    async enterTelephone(name: string){
        await this.page.fill('#input-telephone',name);
    }

    async enterPassword(pass: string){
        await this.page.fill('#input-password',pass);
        await this.page.fill('#input-confirm',pass);
    }

    async isSubscribeChecked():Promise<boolean> {
        return await this.page.locator("#input-newsletter-no").isChecked();
    }

    async clickTemrAndCheck(){
        await this.page.locator("label[for='input-agree']").click();    
    }

    async clickContinueToRegister(){
        await Promise.all([
            this.page.waitForNavigation({waitUntil: "networkidle"}),
            this.page.locator("//input[@type='submit']").click()
        ])
    }


}