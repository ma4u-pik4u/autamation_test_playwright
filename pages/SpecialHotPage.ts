import { Page } from "@playwright/test";

export default class SpecialHotPage{
    constructor(public page:Page){}


    async clickDesktops(){
        await this.page.locator("(//a[@class='nav-link'])[1]").click();
    }

    async addFirstProductToCart(){
        await this.page.hover("//div[@class='image']/a",{strict:false});
        await this.page.locator("//button[@title='Add to Cart']").nth(0).waitFor({state:"visible"})
        await this.page.locator("//button[@title='Add to Cart']").nth(0).click();
    }

    async isToastVisible(){
        const toast = await this.page.locator("//a[.='View Cart ']")
        await toast.waitFor({state: "visible"});
        return toast;
    }
}