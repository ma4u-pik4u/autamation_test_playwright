import test, { expect } from "@playwright/test";
import { log } from "console";

test('Safari-only test', async ({ page, browserName }) => {
    test.skip(browserName !== 'webkit', 'This feature is Safari-only');
    // ...
});
test.fail('not yet ready', async ({ page }) => {
    await page.goto('https://www.google.com');
    log( page.title());
});

test.describe('two tests', () => {
    test('one', async ({ page }) => {
      // ...
    });
  
    test('two', async ({ page }) => {
      // ...
    });
});

test.only('focus this test', async ({ page }) => {
    // Run only focused tests in the entire project.
});