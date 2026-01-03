class HomePage {
  get homeScreen() { return $('~home-screen'); }
  get formsMenu() { return $('~Forms'); }
  get loginMenu() { return $('~Login'); }
}

module.exports = new HomePage();
