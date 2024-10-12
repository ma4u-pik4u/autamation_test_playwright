import test from "@playwright/test";

test("Download files", async ({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.type("#textbox","Like, share");
    await page.click("#create");
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.click("#link-to-download")
    ]);
    
    const fileName = await download.suggestedFilename()
    await download.saveAs(fileName);
});

test("Upload files", async ({page})=>{
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
    // await page.setInputFiles("input[type='file']", ["uploaditems/photo.png","uploaditems/photo2.png"]);

    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ])
    const isMultiple = uploadFiles.isMultiple();
    console.log(isMultiple);
    uploadFiles.setFiles(["uploaditems/photo.png","uploaditems/photo2.png"])

    
    await page.waitForTimeout(5000);
})