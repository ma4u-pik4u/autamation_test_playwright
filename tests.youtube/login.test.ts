import test, { chromium } from "@playwright/test";
import { resolve } from "path";

test("Login test deom", async ()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    const page1 = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io");
    await page.hover("//a[@data-toggle=\"dropdown\"]//span[contains(.,\"My account\")]");
    await page.click("text=Login");
    await page.fill("//*[@id='input-email']","koushik350@gmail.com");
    await page.fill("//*[@id='input-password']","Pass123$");
    await page.click("//input[@type='submit']");
    // await page.waitForTimeout(5000);

    await page.close();
    await context.close();
    await browser.close();

    // //go to
    // await page1.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
    // await page.waitForTimeout(5000);

    
})

