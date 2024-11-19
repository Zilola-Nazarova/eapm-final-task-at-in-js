const { When, Given } = require('@wdio/cucumber-framework');
const { page } = require('../po');
const { Key } = require('webdriverio');

Given('I am on the {string} page', function (pageName) {
  return page(pageName).open();
});

When('I enter any username and any password', async () => {
  await page('login').form.input('username').setValue('John Doe');
  await page('login').form.input('password').setValue('Password');
  return;
});

When('I enter valid username and valid password', async () => {
  const name = await page('login').credentials.validName();
  const password = await page('login').credentials.validPassword();

  await page('login').form.input('username').setValue(name);
  await page('login').form.input('password').setValue(password);

  return;
});

When('I clear {string} in login form', async (field) => {
  await page('login').form.input(field).click();
  await browser.keys([Key.Ctrl, 'a']);
  await browser.keys([Key.Backspace]);
  return;
});

When('I click login button in login form', function () {
  return page('login').form.loginBtn.click();
});
