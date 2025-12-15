class BasePage {
  async wait(element) {
    await element.waitForDisplayed({ timeout: 5000 });
  }
}

module.exports = BasePage;
