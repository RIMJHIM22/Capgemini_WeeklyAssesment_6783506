import {test} from "@playwright/test"

test("task1",async({page})=>{
    await page.goto("https://www.amazon.com/");
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("Shoes");
    await page.keyboard.press("Enter");
    console.log(await page.locator('//a/h2/span').first().textContent());
    console.log(await page.locator('//span[@class="a-price"]/span').first().textContent());
    await page.screenshot({path:"screenshot/task1.png"})
    
    
});