const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given('I go on the Reports website {string}', url => {
  browser.url(url);
});

When('I select Reports by clicking on link {string}', selector => {
  browser.click(selector);
});

Then('the page url should contain {string}', expected_value => {
  assert.ok(browser.getUrl().indexOf(expected_value) >= 0);
});

Then('the Budget link {string} should not be selected', selector => {
  assert.ok(
    browser
      .element(selector)
      .getAttribute('class')
      .indexOf('selected') == -1
  );
});

Then('the Reports link {string} should be selected', selector => {
  assert.ok(
    browser
      .element(selector)
      .getAttribute('class')
      .indexOf('selected') >= 0
  );
});

Then('the App logo {string} should be displayed', selector => {
  assert.ok(browser.isVisible(selector));
});

When('I select the Inflow vs Outflow graph by clicking on link {string}', selector => {
  browser.click(selector);
});

Then('the Inflow vs Outflow page url should contain {string}', expected_value => {
  assert.ok(browser.getUrl().endsWith(expected_value));
});

Then('the Inflow vs Outflow link {string} should be selected', selector => {
  assert.ok(
    browser
      .element(selector)
      .getAttribute('class')
      .indexOf('selected') >= 0
  );
});

Then('the Spending by Category link {string} should not be selected', selector => {
  assert.ok(
    browser
      .element(selector)
      .getAttribute('class')
      .indexOf('selected') == -1
  );
});

Then('the Stacked Chart {string} should be displayed', selector => {
  browser.waitForVisible(selector, 5000);
  assert.ok(browser.isVisible(selector));
});

When('I select the Spending by Category graph by clicking on link {string}', selector => {
  browser.click(selector);
});

Then('the Spending by Category page url should contain {string}', expected_value => {
  assert.ok(browser.getUrl().endsWith(expected_value));
});

Then('the Inflow vs Outflow link {string} should not be selected', selector => {
  assert.ok(
    browser
      .element(selector)
      .getAttribute('class')
      .indexOf('selected') == -1
  );
});

Then('the Spending by Category link {string} should be selected', selector => {
  assert.ok(
    browser
      .element(selector)
      .getAttribute('class')
      .indexOf('selected') >= 0
  );
});

Then('the Donut Chart {string} should be displayed', selector => {
  browser.waitForVisible(selector, 5000);
  assert.ok(browser.isVisible(selector));
});
