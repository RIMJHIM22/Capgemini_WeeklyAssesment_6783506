import { test, expect } from '@playwright/test';
import RegisterPage  from "../Pom/RegisterPage.js";
import LoginPage  from "../Pom/LoginPage.js";

import GiftCard from "../Pom/GiftCard.page";

import registerData from "../test_data/registerData.json";
import loginData from "../test_data/loginData.json";
import giftData from "../test_data/giftCardData.json";

test('Gift Card Add Scenario', async ({ page }) => {

  await page.goto("https://demowebshop.tricentis.com/");

  const registerPage = new CreateAccPage(page);
  const loginPage = new Login(page);
  const giftCard = new GiftCard(page);

  registerData.email = `rimjhim${Date.now()}@test.com`;
  loginData.email = registerData.email;
  giftData.senderEmail = registerData.email;

  await registerPage.createACC(registerData);
  await expect(page.locator(".result")).toBeVisible();

  await page.screenshot({ path: "Screenshot/home.png" });

  await page.click("text=Log out");
  await page.waitForSelector(".ico-login");

  await loginPage.Login(loginData);
  await expect(page.locator(".account")).toBeVisible();

  await page.screenshot({ path: "Screenshot/login.png" });

  await giftCard.giftCard(giftData);

  await page.waitForSelector(".bar-notification");
  await expect(page.locator(".bar-notification")).toBeVisible();

  await page.screenshot({ path: "Screenshot/giftcard.png" });

});