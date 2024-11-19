/* eslint no-console: 0 */

const { After } = require('@wdio/cucumber-framework');
const { driver } = require('@wdio/globals');
const { existsSync, mkdirSync } = require('node:fs');

After({ name: 'Take screenshot' }, async function (testCase) {
  if (testCase.result.status === 'FAILED') {
    console.log(`Screenshot for the failed test ${testCase.pickle.name} is saved`);
    const filename = `${testCase.pickle.name}.png`;
    const dirPath = './artefacts/screenshots/';
    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, {
        recursive: true,
      });
    }
    await driver.saveScreenshot(dirPath + filename);
  }
});
