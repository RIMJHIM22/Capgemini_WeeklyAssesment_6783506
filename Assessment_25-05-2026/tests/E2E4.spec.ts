import { test, expect } from '@playwright/test';
import LoginPage from '../Page/login.page.ts';
import Home from '../Page/Home.page.ts';
import Chat from '../Page/Chats.page.ts';
test('Chat with us', async ({ page }) => {
  await page.goto('https://www.magicbricks.com/');
    const loginPage=new LoginPage(page);
    const homePage=new Home(page);

    await loginPage.login();

    let chatPage=await homePage.chatWithUs();
    const chatWithUsPage=new Chat(chatPage);
    
    await chatWithUsPage.sendText();


});