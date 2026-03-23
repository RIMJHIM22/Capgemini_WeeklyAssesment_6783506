export class BooksPage {
  constructor(page) {
    this.page = page;
  }

  async goToBooks() {
    await this.page.locator("//a[text()='Books']").click();
  }

  async addMultipleBooks() {
    await this.page.locator("(//button[text()='Add to cart'])[1]").click();
    await this.page.locator("(//button[text()='Add to cart'])[2]").click();
  }
}