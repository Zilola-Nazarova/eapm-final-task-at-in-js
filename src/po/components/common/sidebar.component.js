const BaseComponent = require('./base.component');

class SideBarComponent extends BaseComponent {
  constructor() {
    super('.bm-menu');
  }

  item(param) {
    const selectors = {
      items: "#inventory_sidebar_link",
      about: "#about_sidebar_link",
      logout: "#logout_sidebar_link",
      reset: "#reset_sidebar_link",
    };

    return this.rootEl.$(selectors[param.toLowerCase()]);
  }
}

module.exports = SideBarComponent;
