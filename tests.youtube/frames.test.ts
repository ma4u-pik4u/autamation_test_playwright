import test, { expect } from "@playwright/test";

test('frames interaction', async ({ page }) => {
    await page.goto('https://letcode.in/frame');
    const allFrames = await page.frames();
    console.log("Number of frames: " + allFrames.length)

    // const myFrame = await page.frame("firstFr");
    // await myFrame?.fill("input[name='fname']","Taras")
    // await myFrame?.fill("input[name='lname']","Ivanyk")

    // if(myFrame !== null){
    //     await expect(await myFrame.locator("p.has-text-info").textContent()).toContain("You");
    // }

    const frame = page.frameLocator("#firstFr");
    await frame.locator("input[name='fname']").type("Taras");
    await frame.locator("input[name='lname']").type("Ivanyk");

    const innerFrame = frame.frameLocator("iframe[src='innerFrame']");
    await innerFrame.locator("input[name='email']").type("koushik@gmail.com");

    await page.waitForTimeout(3000);
});
