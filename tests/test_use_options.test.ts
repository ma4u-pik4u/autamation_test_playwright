import test from "@playwright/test";

test.use({
    locale: "zh-CN",
    viewport: {width:1000, height:700},
    offline: false,
    launchOptions: {
        slowMo: 2000
    }
})

test('locale test', async ({ page }) => {
    await page.goto('https://www.google.com');    
    await page.waitForTimeout(5000);
});
