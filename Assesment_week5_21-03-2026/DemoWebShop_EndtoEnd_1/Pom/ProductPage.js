export class ProductPage {
  constructor(page) {
    this.page = page;

    this.productList = ".product-item";
    this.addToCartButton = "input[value='Add to cart']";
  }

  async goToComputers(data) {
    await this.page.click(`text=${data.category}`);
  }

  async selectDesktops(data) {
    await this.page.click(`text=${data.subCategory}`);
    await this.page.waitForSelector(this.productList);
  }

  async selectFirstProduct() {
    await this.page.locator(".product-title a").first().click();
  }

  async addToCart() {
    await this.page.waitForSelector(this.addToCartButton);
    await this.page.click(this.addToCartButton);
  }
}