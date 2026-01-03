const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const SignupPage = require('../pageobjects/signup.page');

Given('que estou na tela de cadastro', async () => {
  await $('~signup-screen').waitForDisplayed();
});

When('preencho os dados válidos de cadastro', async () => {
  await SignupPage.signup('QA Test', 'qa@test.com', '123456');
});

When('tento cadastrar sem preencher os campos', async () => {
  await SignupPage.signup('', '', '');
});

Then('devo acessar a tela home', async () => {
  expect(await $('~home-screen').isDisplayed()).to.be.true;
});

Then('devo visualizar uma mensagem de erro', async () => {
  expect(await SignupPage.errorMsg.isDisplayed()).to.be.true;
});
