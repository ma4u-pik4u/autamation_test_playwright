import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  
  testDir: "./tests.youtube",

  projects:[
    {
      name:"chrome",
      use:{
        ...devices["Desktop Chrome"]
      }
    },
    {
      name:"firefox",
      use:{
        ...devices["Desktop Firefox"]
      }
    }
  ],
  
  use:{
    baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
    headless: false,
    screenshot: "on",
    video: "off"
  },

  // testMatch: ["pomtest/addToCart.test.ts"],
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReport.json"
  }],["html", {
    open: "never"
  }]]
});
