const { browser } = require('@wdio/globals');
const { Key } = require('webdriverio');

const { page } = require('../po');

function testComponent(componentName, { invalidInput, errorMessage, successTitle }) {
  beforeEach(async () => {
    await page('login').open();
  });

  it(`should test ${componentName}`, async () => {
    // FIND VALID CREDENTIALS
    const name = await page('login').credentials.validName();
    const password = await page('login').credentials.validPassword();

    // FILL IN CREDENTIALS
    await page('login').form.input('username').setValue(name);
    await page('login').form.input('password').setValue(password);

    if (invalidInput) {
      // CLEAR REQUIRED INPUT
      await page('login').form.input(invalidInput).click();
      await browser.keys([Key.Ctrl, 'a']);
      await browser.keys([Key.Backspace]);
    }

    // LOGIN
    await page('login').form.loginBtn.click();

    // ASSERT
    if (invalidInput) {
      const message = await page('login').form.errorMessage;
      await expect(message).toHaveText(expect.stringContaining(errorMessage));
    } else {
      await expect(await page('inventory').header.title).toHaveText(successTitle);
    }
  });
}

describe('Login form', () => {
  testComponent(
    'with empty credentials',
    {
      invalidInput: 'username',
      errorMessage: 'Username is required',
    },
  );
  testComponent(
    'with credentials by passing Username',
    {
      invalidInput: 'password',
      errorMessage: 'Password is required',
    },
  );
  testComponent(
    'with credentials by passing Username & Password',
    {
      invalidInput: null,
      errorMessage: null,
      successTitle: 'Swag Labs',
    },
  );
});
