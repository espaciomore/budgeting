const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given('I go on the Budget website {string}', url => {
  browser.url(url);
});

When('I select Budget by clicking on link {string}', selector => {
  browser.click(selector);
});

Then('the page url should contain path {string}', expected_value => {
  assert.ok(browser.getUrl().endsWith(expected_value));
});

Then('the Budget link {string} should be selected', selector => {
  assert.ok(
    browser
      .element(selector)
      .getAttribute('class')
      .indexOf('selected') >= 0
  );
});

Then('the Reports link {string} should not be selected', selector => {
  assert.ok(
    browser
      .element(selector)
      .getAttribute('class')
      .indexOf('selected') == -1
  );
});

Then('the Budget Grid {string} should be displayed', selector => {
  assert.ok(browser.isVisible(selector));
});

Then('the Budget Entry Form {string} should be displayed', selector => {
  assert.ok(browser.isVisible(selector));
});

Then('the Budget Balance {string} should be displayed', selector => {
  assert.ok(browser.isVisible(selector));
});

Then('the App logo image {string} should be displayed', selector => {
  browser.waitForVisible(selector, 5000);
  assert.ok(browser.isVisible(selector));
});
