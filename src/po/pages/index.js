const InventoryPage = require('./inventory.page');
const LoginPage = require('./login.page');

function page(name) {
  const items = {
    login: new LoginPage(),
    inventory: new InventoryPage
  };
  
  return items[name.toLowerCase()];
};

module.exports = {
  LoginPage,
  InventoryPage,
  page
};
