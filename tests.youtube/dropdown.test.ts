import test from "@playwright/test";

test('handling dropdown', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    await page.selectOption('#select-demo', {
        // label: "Tuesday"
        // value: "Monday"
        index: 4
    });

    await page.selectOption("#multi-select", [
        {
            label: "Texas"
        },
        {
            index: 2
        }
    ])
    await page.waitForTimeout(3000);
});

test.only('bootstrap dropdown', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');
    await page.click('#country+span');
    await page
            .locator('ul#select2-country-results')
            .locator('li', 
                {
                    hasText: "Australia"
                }
            )
            .click();
    await page.waitForTimeout(5000);

});
 