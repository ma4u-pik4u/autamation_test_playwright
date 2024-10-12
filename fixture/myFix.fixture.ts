import test from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import SpecialHotPage from "../pages/SpecialHotPage";
import HomePage from "../pages/HomePage";

type person = {
    name: string
    surname: string
}

export const myFixtureTest = test.extend<person>({
    name: "SomeName",
    surname: "SomeSurname"
})

type pages = {
    homePage: HomePage;
    loginPage: LoginPage;
    registerPage: RegisterPage;
    specialHotPage: SpecialHotPage;
}

export const testPages = test.extend<pages>({
    homePage: async ({page},use) => {
        await use(new HomePage(page));
    },
    loginPage: async ({page},use) => {
        await use(new LoginPage(page));
    },
    registerPage: async ({page},use) => {
        await use(new RegisterPage(page));
    },
    specialHotPage: async ({page},use) => {
        await use(new SpecialHotPage(page));
    }
})


