import { Page } from "@playwright/test";

export default class HomePage{
    constructor(public page:Page){}

    async clickOnSpecialHotMenu(){
        await Promise.all([
            this.page.waitForNavigation({waitUntil: "networkidle"}),
            this.page.locator("(//ul[@class='navbar-nav horizontal']//li)[2]").click()
        ])
    }
}