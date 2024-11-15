import { Form, Credentials } from '../components';

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
