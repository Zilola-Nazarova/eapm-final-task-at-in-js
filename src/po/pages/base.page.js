const { browser } = require('@wdio/globals');
const { Header, SideBar, Footer } = require('../components');

class BasePage {
  constructor(url) {
    this.url = url;
    this.header = new Header();
    this.sideBar = new SideBar();
    this.footer = new Footer();
  }

  open() {
    return browser.url(this.url);
  }
}

module.exports = BasePage;
