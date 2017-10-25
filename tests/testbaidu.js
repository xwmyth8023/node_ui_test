var basePage = require('../pages/basePage.js');
module.exports = {
  'Test': function (client) {
    var baidus = client.page.baidu();
    baidus.setValue('@searchBar', 'nightwatch')
      .submit();

    client.end();
  },
  beforeEach: function(client){
    basePage.loadHomePage(client);
  }
};