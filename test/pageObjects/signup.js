const BasePage = require('./base.page');

class SignupPage extends BasePage {
  get name() { return $('~input-name'); }
  get email() { return $('~input-email'); }
  get password() { return $('~input-password'); }
  get signupBtn() { return $('~button-SIGN UP'); }
  get errorMsg() { return $('~signup-error'); }

  async signup(name, email, password) {
    if (name) await this.name.setValue(name);
    if (email) await this.email.setValue(email);
    if (password) await this.password.setValue(password);
    await this.signupBtn.click();
  }
}

module.exports = new SignupPage();
