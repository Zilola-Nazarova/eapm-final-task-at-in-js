const { browser } = require('@wdio/globals');
const { Key } = require('webdriverio');

const { page } = require('../po');
const VALID_CREDENTIALS = require('./valid-credentials');

describe('Login form', () => {
  beforeEach(async () => {
    await page('login').open();
  });

  it('with empty credentials', async () => {
    await page('login').form.input('username').setValue('John Doe');
    await page('login').form.input('password').setValue('Password');

    await page('login').form.input('username').click();
    await browser.keys([Key.Ctrl, 'a']);
    await browser.keys([Key.Backspace]);
    await page('login').form.loginBtn.click();

    const message = await page('login').form.errorMessage;
    await expect(message).toEqual(expect.stringContaining('Username is required'));
  });

  it('with credentials by passing Username', async () => {
    await page('login').form.input('username').setValue('John Doe');
    await page('login').form.input('password').setValue('Password');

    await page('login').form.input('password').click();
    await browser.keys([Key.Ctrl, 'a']);
    await browser.keys([Key.Backspace]);
    await page('login').form.loginBtn.click();

    const message = await page('login').form.errorMessage;
    await expect(message).toEqual(expect.stringContaining('Password is required'));
  });

  it('with credentials of the locked out user', async () => {
    await page('login').form.input('username').setValue('locked_out_user');
    await page('login').form.input('password').setValue('secret_sauce');
    await page('login').form.loginBtn.click();

    const message = await page('login').form.errorMessage;
    await expect(message).toEqual(expect.stringContaining('Sorry, this user has been locked out'));
  });

  for (const credential of VALID_CREDENTIALS) {
    it('with credentials by passing Username & Password', async () => {
      await page('login').form.input('username').setValue(credential.username);
      await page('login').form.input('password').setValue(credential.password);
      await page('login').form.loginBtn.click();
  
      await expect(await page('inventory').header.logoText).toEqual('Swag Labs');
    });
  }
});
