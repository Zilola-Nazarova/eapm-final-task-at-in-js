const { When, Given } = require('@wdio/cucumber-framework');
const { Key } = require('webdriverio');
const { page } = require('../po');

Given(/^I am on the "(\w+)" page$/, (pageName) => {
  return page(pageName).open();
});

When(/^I enter "(valid|any)" username and "(valid|any)" password$/, async (usernameType, passwordType) => {
  await page('login').form.input('username').setValue(usernameType === 'any' ? 'John Doe' : 'standard_user');
  await page('login').form.input('password').setValue(passwordType === 'any' ? 'Password' : 'secret_sauce');
});

When(/^I clear "(\w+)" in login form$/, async (field) => {
  await page('login').form.input(field).click();
  await browser.keys([Key.Ctrl, 'a']);
  await browser.keys([Key.Backspace]);
});

When(/^I click login button in login form$/, () => {
  return page('login').form.loginBtn.click();
});
