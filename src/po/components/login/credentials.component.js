const BaseComponent = require('../common/base.component');

class CredentialsComponent extends BaseComponent {
  constructor() {
    super('.login_credentials_wrap');
  }

  async validName() {
    const name = await this.rootEl.$('.login_credentials').getText();
    return name.split('\n')[1];
  }

  async validPassword() {
    const password = await this.rootEl.$('.login_password').getText();
    return password.split('\n')[1];
  }
}

module.exports = CredentialsComponent;
