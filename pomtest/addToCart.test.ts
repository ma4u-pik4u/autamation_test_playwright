import  test, { expect } from "@playwright/test";
import RegisterPage from "../pages/RegisterPage";
import LogingPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import SpecialHotPage from "../pages/SpecialHotPage";
import { testPages } from "../fixture/myFix.fixture";

test.use({
    browserName:"firefox"
})

test('asdf', async ({ page }) => {
    console.log(123)
});


testPages.describe('Page object test demo', async () => {
    
    testPages('Register test_01', async ({ page, baseURL, registerPage  }) => {

        await page.goto(`${baseURL}route=account/register`);
        await registerPage.enterFirstName("Taras");
        await registerPage.enterLastName("Ivanyk");
        await registerPage.enterPassword("Haslo123@");
        await registerPage.enterEmail("hanekava4@gmail.com");
        await registerPage.enterTelephone("123123123");
        await expect(await registerPage.isSubscribeChecked()).toBeTruthy();
        await registerPage.clickTemrAndCheck();
        await registerPage.clickContinueToRegister();
        await page.waitForTimeout(5000);    
    });

    testPages('Login test_02', async ({ page, baseURL, loginPage }) => {
        await page.goto(`${baseURL}route=account/login`);
        await loginPage.enterEmail("hanekava4@gmail.com");
        await loginPage.enterPassword("Haslo123@");
        await loginPage.clickLogin();
        await expect(await page.title()).toBe("My Account");
    });

    testPages('Add to cart test-03', async ({ page, baseURL, homePage, loginPage, specialHotPage }) => {
 

        await page.goto(`${baseURL}route=account/login`);
        await loginPage.Login("hanekava4@gmail.com","Haslo123@");
        await homePage.clickOnSpecialHotMenu();
        await specialHotPage.clickDesktops();
        await specialHotPage.addFirstProductToCart();

        const isCartVisible = await specialHotPage.isToastVisible();
        await expect(isCartVisible).toBeVisible()
        await page.waitForTimeout(3000);
    });
});






