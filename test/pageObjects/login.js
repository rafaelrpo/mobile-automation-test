const BasePage = require('./base.page');

class LoginPage extends BasePage {
  get email() { return $('~input-email'); }
  get password() { return $('~input-password'); }
  get loginBtn() { return $('~button-LOGIN'); }
  get errorMsg() { return $('~login-error'); }

  async login(email, password) {
    await this.email.setValue(email);
    await this.password.setValue(password);
    await this.loginBtn.click();
  }
}

module.exports = new LoginPage();
