import {test} from "@playwright/test"
test('position of player', async ({ page }) => {
    await page.goto('https://www.icc-cricket.com/rankings')
 const position=   await page.locator("(//tr[.//span[text()='Mandhana']]/td[1])[1]").textContent();
 console.log(position)
 await page.screenshot({path :"screenshot/women ranking.png"})
})
