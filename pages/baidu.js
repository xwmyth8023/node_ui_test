var baiduCommands = {
  submit: function() {
    return this.waitForElementVisible('@submitButton', 10000)
      .click('@submitButton')
      .waitForElementNotPresent('@submitButton',1000);
  }
};

module.exports = {
  commands: [baiduCommands],
  elements: {
    searchBar: {
      selector: '#kw'
    },
    submitButton: {
      selector: '#su'
    }
  }
};
