const BasePage = require('./base.page');
const { InventoryHeader } = require('../components');

class InventoryPage extends BasePage {
  constructor() {
    super('/inventory.html');
    this.inventoryHeader = new InventoryHeader();
  }
}

module.exports = InventoryPage;
