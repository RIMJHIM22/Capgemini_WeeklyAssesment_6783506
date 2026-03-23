import { test } from "@playwright/test";
import loginData from "../testData/loginData.json";

import { LoginPage } from "../pages/LoginPage.js";
import { BooksPage } from "../pages/BooksPage.js";
import { CartPage } from "../pages/CartPage.js";

test("POM - Multiple books flow (JS)", async ({ page }) => {

  const login = new LoginPage(page);
  const books = new BooksPage(page);
  const cart = new CartPage(page);

  await page.goto("https://www.shoppersstack.com/");

  await login.login(loginData.email, loginData.password);

  await books.goToBooks();
  await books.addMultipleBooks();

  await cart.goToCart();
  await cart.increaseQuantity();
  await cart.verifyCart();

  await page.locator("//button[contains(text(),'Logout')]").click();
  await page.screenshot({ path: "Screenshot/books.png"})
});