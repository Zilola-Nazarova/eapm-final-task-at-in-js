const { When, Given } = require('@wdio/cucumber-framework');
const { Key } = require('webdriverio');
const { page } = require('../po');

Given(/^I am on the "(\w+)" page$/, (pageName) => page(pageName).open());

When(/^I enter "(any|locked out)" username and "(any|valid)" password$/, async (usernameType, passwordType) => {
  await page('login').form.input('username').setValue(usernameType === 'any' ? 'John Doe' : 'locked_out_user');
  await page('login').form.input('password').setValue(passwordType === 'any' ? 'Password' : 'secret_sauce');
});

When(/^I login with valid credentials - (\w+) and (.+)$/, async (username, password) => {
  await page('login').form.input('username').setValue(username);
  await page('login').form.input('password').setValue(password);
});

When(/^I clear "(\w+)" in login form$/, async (field) => {
  await page('login').form.input(field).click();
  await browser.keys([Key.Ctrl, 'a']);
  await browser.keys([Key.Backspace]);
});

When(/^I click login button in login form$/, () => page('login').form.loginBtn.click());
