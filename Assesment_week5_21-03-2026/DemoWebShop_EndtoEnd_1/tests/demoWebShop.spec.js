import { test, expect } from "@playwright/test";

import { RegisterPage } from "../Pom/RegisterPage.js";
import { LoginPage } from "../Pom/LoginPage.js";
import { ProductPage } from "../Pom/ProductPage.js";
import { CartPage } from "../Pom/CartPage.js";

import registerData from "../test_data/registerData.json";
import loginData from "../test_data/loginData.json";
import productData from "../test_data/productData.json";
import cartData from "../test_data/cartData.json";

test("End-to-End Demo Web Shop Test", async ({ page }) => {

  await page.goto("https://demowebshop.tricentis.com/");

  const register = new RegisterPage(page);
  const login = new LoginPage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);

  registerData.email = `rimjhim${Date.now()}@test.com`;
  loginData.email = registerData.email;

  await register.openRegisterPage();
  await register.fillRegistrationForm(registerData);
  await register.submitForm();

  await expect(page.locator(".result")).toBeVisible();

  await page.click("text=Log out");
  await page.waitForSelector(".ico-login");

  await login.openLoginPage();
  await login.fillLoginForm(loginData);
  await login.submitLogin();

  await expect(page.locator(".account")).toBeVisible();

  await product.goToComputers(productData);
  await product.selectDesktops(productData);
  await product.selectFirstProduct();

  await page.waitForLoadState("networkidle");   
  await product.addToCart();

  await expect(page.locator(".bar-notification")).toBeVisible();

  await cart.openCart();
  await cart.updateQuantity(cartData);

  await expect(page.locator(".qty-input")).toHaveValue(String(cartData.quantity)); 

  await page.click("text=Log out");

  await page.screenshot({
    path: `screenshot/final-${Date.now()}.png`, 
    fullPage: true
  });

});