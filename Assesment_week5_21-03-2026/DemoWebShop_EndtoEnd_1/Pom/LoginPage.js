export class LoginPage {
  constructor(page) {
    this.page = page;

    this.loginLink = ".ico-login";
    this.emailInput = "#Email";
    this.passwordInput = "#Password";
    this.loginButton = "input[value='Log in']";
  }

  async openLoginPage() {
    await this.page.click(this.loginLink);
    await this.page.waitForSelector(this.emailInput);
  }

  
  async fillLoginForm(data) {
    await this.page.fill(this.emailInput, data.email);
    await this.page.fill(this.passwordInput, data.password);
  }

 
  async submitLogin() {
    await this.page.click(this.loginButton);
  }
}