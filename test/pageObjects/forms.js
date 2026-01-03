class FormsPage {
  get formsScreen() { return $('~forms-screen'); }
  get textInput() { return $('~text-input'); }
  get submitBtn() { return $('~button-Submit'); }
  get successMsg() { return $('~android:id/message'); }

  async submitForm(text) {
    if (text) {
      await this.textInput.setValue(text);
    }
    await this.submitBtn.click();
  }
}

module.exports = new FormsPage();
