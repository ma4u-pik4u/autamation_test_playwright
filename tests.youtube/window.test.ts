import test, { Page } from "@playwright/test";

let facebook: Page;

test('interact window', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');
    // const [newWindow] = await Promise.all([
    //     page.waitForEvent("popup"),
    //     page.click("//a[@title='Follow @Lambdatesting on Twitter']")        
    // ])

    // console.log(newWindow.url());
    // newWindow.fill("","");

    const [multipleWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("#followboth")
    ]);

    await multipleWindow.waitForLoadState();
    const pages = multipleWindow.context().pages();
    console.log("num pages: "+pages.length);

    pages.forEach((tab)=>{
        console.log(tab.url());
        
    });

    
    for (let index = 0; index < pages.length; index++) {
        const url = pages[index].url();
        if(url.includes("facebook")) facebook = pages[index];       
    }
    const text = await facebook.textContent("//h1");
    console.log("header: "+text);
    
    
});
