const BaseComponent = require('./base.component');

class HeaderComponent extends BaseComponent {
  constructor() {
    super('.primary_header');
  }

  get burgerBtn() {
    return this.rootEl.$('#react-burger-menu-btn');
  }

  get title() {
    return this.rootEl.$('.app_logo').getText();
  }

  get cartBtn() {
    return this.rootEl.$('.shopping_cart_link');
  }
}

module.exports = HeaderComponent;
