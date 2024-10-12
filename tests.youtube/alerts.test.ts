import test, { expect } from "@playwright/test";

test("handling alerts", async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    
    page.on("dialog", async (alert)=>{
        const text = alert.message();
        console.log(text)
        // await alert.dismiss();
        await alert.accept("Koushik");
    })
    await page.locator("button:has-text('Click Me')").nth(0).click();

    await page.locator("button:has-text('Click Me')").nth(1).click();

    await page.locator("button:has-text('Click Me')").nth(2).click();
    await expect(await page.locator("id=prompt-demo")).toContainText("Koushik");
    
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    await page.click("(//button[contains(@class,'btn btn-dark')])[1]");
    await page.waitForTimeout(5000);
})