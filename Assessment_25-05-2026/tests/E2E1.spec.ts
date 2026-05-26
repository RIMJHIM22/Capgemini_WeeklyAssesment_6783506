import { test, expect } from '@playwright/test';
import LoginPage from "../Page/login.page.ts"
import BookFlat from '../Page/Bookings.page.ts';
test('Login', async ({ page,context }) => {
    await page.goto("https://www.magicbricks.com/")

    const loginPage=new LoginPage(page);
    const bookingPage=new BookFlat(page);

    await loginPage.login();
    await bookingPage.chooseLocation();
    
    const detailPage=await bookingPage.rentFlat();
    await bookingPage.downloadPropertyBrochure(detailPage);
});