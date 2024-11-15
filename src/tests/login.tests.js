import { browser } from '@wdio/globals';
import { Key } from 'webdriverio';

const LoginPage = require("../po/pages/login.page");
const InventoryPage = require('../po/pages/inventory.page');

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe('Login form', () => {
  beforeEach(async () => {
    await loginPage.open();
  });

  it('with empty credentials', async () => {
    await loginPage.form.input('name').setValue('John Doe');
    await loginPage.form.input('password').setValue('Password');

    await loginPage.form.input('name').click();
    await browser.keys([Key.Ctrl, 'a']);
    await browser.keys([Key.Backspace]);
    await loginPage.form.loginBtn.click();

    const message = await loginPage.form.errorMessage;
    await expect(message).toHaveText(expect.stringContaining('Username is required'));
  });

  it('with credentials by passing Username', async () => {
    await loginPage.form.input('name').setValue('John Doe');
    await loginPage.form.input('password').setValue('Password');

    await loginPage.form.input('password').click();
    await browser.keys([Key.Ctrl, 'a']);
    await browser.keys([Key.Backspace]);
    await loginPage.form.loginBtn.click();

    const message = await loginPage.form.errorMessage;
    await expect(message).toHaveText(expect.stringContaining('Password is required'));
  });

  it('with credentials by passing Username & Password', async () => {
    const name = await loginPage.credentials.validName();
    const password = await loginPage.credentials.validPassword();

    await loginPage.form.input('name').setValue(name);
    await loginPage.form.input('password').setValue(password);
    await loginPage.form.loginBtn.click();

    await expect(await inventoryPage.header.title).toHaveText('Swag Labs');
  });
});
