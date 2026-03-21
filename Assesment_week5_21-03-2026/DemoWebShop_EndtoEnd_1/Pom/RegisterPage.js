export class RegisterPage {
  constructor(page) {
    this.page = page;

    this.registerLink = ".ico-register";
    this.firstName = "#FirstName";
    this.lastName = "#LastName";
    this.email = "#Email";
    this.password = "#Password";
    this.confirmPassword = "#ConfirmPassword";
    this.registerButton = "#register-button";
  }

  async openRegisterPage() {
    await this.page.click(this.registerLink);
  }

  async fillRegistrationForm(data) {
    await this.page.waitForSelector(this.firstName);

    await this.page.click(`#gender-${data.gender}`);
    await this.page.fill(this.firstName, data.firstName);
    await this.page.fill(this.lastName, data.lastName);
    await this.page.fill(this.email, data.email);
    await this.page.fill(this.password, data.password);
    await this.page.fill(this.confirmPassword, data.password);
  }

  async submitForm() {
    await this.page.click(this.registerButton);
  }
}