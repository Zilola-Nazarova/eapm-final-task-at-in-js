const BaseComponent = require('./base.component');

class Footer extends BaseComponent {
  constructor() {
    super('.footer');
  }

  social(param) {
    const selectors = {
      twitter: ".social_twitter",
      facebook: ".social_facebook",
      linkedin: ".social_linkedin",
    };

    return this.rootEl.$(selectors[param.toLowerCase()]);
  }
}

module.exports = Footer;

