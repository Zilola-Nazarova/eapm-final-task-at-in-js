const BaseComponent = require('../common/base.component');

class FormComponent extends BaseComponent {
  constructor() {
    super('.login-box');
  }

  get loginBtn() {
    return this.rootEl.$('#login-button');
  }

  get errorMessage() {
    return this.rootEl.$('.error h3').getText();
  }

  /**
   *
   * @param {'name' | 'password' } credentials
   * @returns {*}
   */

  input(field) {
    const selectors = {
      username: '#user-name',
      password: '#password',
    };
    return this.rootEl.$(selectors[field.toLowerCase()]);
  }
}

module.exports = FormComponent;
