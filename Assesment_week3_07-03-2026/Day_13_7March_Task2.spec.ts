import {test} from 'playwright/test';

test.only('Task 2', async ({page}) => {
    await page.goto('https://www.olympics.com/en/olympic-games/tokyo-2020');
    await page.locator("//span[@class='sc-330a00-4 irujJD']/child::a").click();
    const name=await page.locator("//div[@data-medal-id='silver-medals-7']/../../div[@data-row-id='athlete-row-7']/descendant::div[@class='sc-d8cd2c5-2 dPlqCj']/h3").textContent();
    const medal=await page.locator("//div[@data-medal-id='silver-medals-7']/child::span/child::span").textContent();
        console.log(name + " Total Silver Medals: " + medal);
          await page.screenshot({path:"screenshot/7March_task2.png"});
   
})