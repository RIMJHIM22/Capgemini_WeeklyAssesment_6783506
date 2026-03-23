export default class GiftCard {
  page;

  constructor(page) {
    this.page = page;

    // Locators
    this.giftCardMenu = "text=Gift Cards";
    this.firstGiftCard = "text=$25 Virtual Gift Card";

    this.recipientName = "#giftcard_43_RecipientName";
    this.recipientEmail = "#giftcard_43_RecipientEmail";
    this.senderName = "#giftcard_43_SenderName";
    this.senderEmail = "#giftcard_43_SenderEmail";
    this.message = "#giftcard_43_Message";

    this.addToCartBtn = "input[value='Add to cart']";

    this.cartLink = ".cart-label";
    this.removeCheckbox = "input[name='removefromcart']";
    this.updateCartBtn = "input[name='updatecart']";
  }

  async giftCard(data) {
    await this.page.click(this.giftCardMenu);
    await this.page.click(this.firstGiftCard);

    await this.page.fill(this.recipientName, data.recipientName);
    await this.page.fill(this.recipientEmail, data.recipientEmail);
    await this.page.fill(this.senderName, data.senderName);
    await this.page.fill(this.senderEmail, data.senderEmail);
    await this.page.fill(this.message, data.message);

    await this.page.click(this.addToCartBtn);
  }

  async removingfromCart() {
    await this.page.click(this.cartLink);
    await this.page.check(this.removeCheckbox);
    await this.page.click(this.updateCartBtn);
  }
}