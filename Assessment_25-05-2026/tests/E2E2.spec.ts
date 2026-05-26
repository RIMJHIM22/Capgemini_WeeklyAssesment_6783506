import { test, expect } from '@playwright/test';
import LoginPage from "../Page/login.page.ts"
import Home from '../Page/Home.page.ts';
import CheckWorth from '../Page/Worth.page.ts';
test('Check Property Worth', async ({ page,context }) => {
    await page.goto("https://www.magicbricks.com/")

    const loginPage=new LoginPage(page);
    const homePage=new Home(page);

    await loginPage.login();
    let worthPage=await homePage.getPropWorth();

    const checkWorthPage=new CheckWorth(worthPage);
    
    await checkWorthPage.getWorth(); 
    await checkWorthPage.fillDetails();

    

});