var homepageCommands = {
  inputText: function(value) {
    return this.waitForElementVisible('@inputBox', 10000)
      .setValue('@inputBox',value)
      .waitForElementVisible('@baiduBtn',1000);
  }
};

module.exports = {
  commands: [homepageCommands],
  elements: {
    inputBox: {
      selector: '#kw'
    },
    baiduBtn: {
      selector: '#su'
    }
  }
};
