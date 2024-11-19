const { When, Given } = require('@wdio/cucumber-framework');
const { Key } = require('webdriverio');
const { page } = require('../po');

Given('I am on the {string} page', function (pageName) {
  return page(pageName).open();
});

When('I enter any username and any password', async () => {
  await page('login').form.input('username').setValue('John Doe');
  await page('login').form.input('password').setValue('Password');
});

When('I enter valid username and valid password', async () => {
  const name = await page('login').credentials.validName();
  const password = await page('login').credentials.validPassword();

  await page('login').form.input('username').setValue(name);
  await page('login').form.input('password').setValue(password);
});

When('I clear {string} in login form', async (field) => {
  await page('login').form.input(field).click();
  await browser.keys([Key.Ctrl, 'a']);
  await browser.keys([Key.Backspace]);
});

When('I click login button in login form', function () {
  return page('login').form.loginBtn.click();
});
