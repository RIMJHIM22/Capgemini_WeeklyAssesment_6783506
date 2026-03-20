import {test} from "@playwright/test"

test("task2",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.locator('//input[@id="name"]').fill("hello");
    await page.locator('//input[@id="email"]').fill("khushiastrogeek@gmail.com");
    await page.locator('//input[@id="password"]').fill("Password123");
    await page.keyboard.press("Enter");
    await page.locator('//input[@id="email"]').fill("khushiastrogeek@gmail.com");
    await page.locator('//input[@id="password"]').fill("Password123");
    await page.keyboard.press("Enter");
    await page.screenshot({path:'screenshot/question_3_${Date.now()}.png'});    
});
