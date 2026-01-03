const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const FormsPage = require('../pageobjects/forms.page');

Given('que estou na tela de formulário', async () => {
  await FormsPage.formsScreen.waitForDisplayed();
});

When('preencho o formulário corretamente', async () => {
  await FormsPage.submitForm('Teste QA');
});

When('submeto o formulário vazio', async () => {
  await FormsPage.submitForm('');
});

Then('devo visualizar mensagem de sucesso', async () => {
  expect(await FormsPage.successMsg.isDisplayed()).to.be.true;
});

Then('devo visualizar uma mensagem de erro', async () => {
  expect(await $('~android:id/message').isDisplayed()).to.be.true;
});
