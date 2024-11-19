const { Then } = require('@wdio/cucumber-framework');
const { page } = require('../po');
const compareText = require('./utils/compare-text');

Then('I should see an error message that should {string} {string}', async (shouldBeParam, shouldText) => {
  const message = await page('login').form.errorMessage;
  return compareText(message, shouldText, shouldBeParam);
});

Then('I should see an Inventory page title that should {string} {string}', async (shouldBeParam, shouldText) => {
  const title = await page('inventory').header.title;
  return compareText(title, shouldText, shouldBeParam);
});
