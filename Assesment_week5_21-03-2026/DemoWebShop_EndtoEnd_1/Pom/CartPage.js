export class CartPage {
  constructor(page) {
    this.page = page;

    this.cartLink = ".cart-label";
    this.quantityInput = ".qty-input";
    this.updateCartButton = "input[name='updatecart']";
  }

  async openCart() {
    await this.page.click(this.cartLink);
    await this.page.waitForSelector(this.quantityInput);
  }

  async updateQuantity(data) {
    await this.page.fill(this.quantityInput, data.quantity);
    await this.page.click(this.updateCartButton);
  }
}