
module.exports = {
  'Demo test Local' : function (browser) {
    browser
      .url('http://localtesting.browserstack.com/')
      .waitForElementVisible('body', 1000)
      .end();
  }
};