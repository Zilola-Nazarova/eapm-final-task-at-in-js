import { browser } from '@wdio/globals';
import { Key } from 'webdriverio';

const { page } = require('../po');

describe('Login form', () => {
  beforeEach(async () => {
    await page('login').open();
  });

  it('with empty credentials', async () => {
    await page('login').form.input('name').setValue('John Doe');
    await page('login').form.input('password').setValue('Password');

    await page('login').form.input('name').click();
    await browser.keys([Key.Ctrl, 'a']);
    await browser.keys([Key.Backspace]);
    await page('login').form.loginBtn.click();

    const message = await page('login').form.errorMessage;
    await expect(message).toHaveText(expect.stringContaining('Username is required'));
  });

  it('with credentials by passing Username', async () => {
    await page('login').form.input('name').setValue('John Doe');
    await page('login').form.input('password').setValue('Password');

    await page('login').form.input('password').click();
    await browser.keys([Key.Ctrl, 'a']);
    await browser.keys([Key.Backspace]);
    await page('login').form.loginBtn.click();

    const message = await page('login').form.errorMessage;
    await expect(message).toHaveText(expect.stringContaining('Password is required'));
  });

  it('with credentials by passing Username & Password', async () => {
    const name = await page('login').credentials.validName();
    const password = await page('login').credentials.validPassword();

    await page('login').form.input('name').setValue(name);
    await page('login').form.input('password').setValue(password);
    await page('login').form.loginBtn.click();

    await expect(await page('inventory').header.title).toHaveText('Swag Labs');
  });
});
