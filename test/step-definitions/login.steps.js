const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const LoginPage = require('../pageObjects/login.page');
const users = require('../data/users.json');

Given('que estou na tela de login', async () => {
  await $('~login-screen').waitForDisplayed();
});

When('realizo login com email {string} e senha {string}', async (email, senha) => {
  await LoginPage.login(users[email].email, users[senha].password);
});

Then('devo visualizar a tela home', async () => {
  expect(await $('~home-screen').isDisplayed()).to.be.true;
});

Then('devo visualizar uma mensagem de erro', async () => {
  expect(await LoginPage.errorMsg.isDisplayed()).to.be.true;
});
