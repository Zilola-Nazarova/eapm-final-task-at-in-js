const { browser } = require('@wdio/globals');
const { Form, Credentials } = require('../components');

class LoginPage {
  constructor() {
    this.form = new Form();
    this.credentials = new Credentials();
  }

  open() {
    return browser.url('/');
  }
}

module.exports = LoginPage;
