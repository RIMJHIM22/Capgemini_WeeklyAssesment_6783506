import { Page, Locator } from '@playwright/test';
import fs from 'fs';

const userData = JSON.parse(
  fs.readFileSync('./test-data/login.json', 'utf8')
);

class LoginPage {

  private page: Page;
  private loginBtn: Locator;
  private signInOption: Locator;

  constructor(page: Page) {
    this.page = page;

    this.loginBtn = page.locator('text=Login').last();
    this.signInOption = page.locator('text=Login/Sign Up');
  }

  // Method to open login popup
  async openLoginPopup() {

    await this.loginBtn.hover();

    const popupPromise = this.page.waitForEvent('popup');

    await this.signInOption.click();

    const loginWindow = await popupPromise;

    await loginWindow.waitForLoadState();

    return loginWindow;
  }

  // Method to enter mobile number
  async enterMobileNumber(loginWindow: Page) {

    await loginWindow.locator('#emailOrMobileLable')
      .fill(userData.mobile);

    await loginWindow.pause();

    await loginWindow.locator('text=Next').click();
  }

  // Method to verify otp manually
  async submitOtp(loginWindow: Page) {

    await loginWindow.pause();

    await loginWindow.locator('button[onclick="verifyOtp()"]')
      .click();
  }

  // Complete login flow
  async userLogin() {

    const loginWindow = await this.openLoginPopup();

    await this.enterMobileNumber(loginWindow);

    await this.submitOtp(loginWindow);
  }
}

export default LoginPage;