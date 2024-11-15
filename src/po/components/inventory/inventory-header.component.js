const BaseComponent = require('../common/base.component');

class InventoryHeaderComponent extends BaseComponent {
  constructor() {
    super('.header_secondary_container');
  }

  get title() {
    return this.rootEl.$('.title');
  }

  get filter() {
    return this.rootEl.$('.product_sort_container');
  }
}

module.exports = InventoryHeaderComponent;
