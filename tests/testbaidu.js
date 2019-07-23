var basePage = require('../pages/basePage.js');

describe('test', function(){

  beforeEach(function(client, done) {
    basePage.loadHomePage(client);
    done();
});

  it('demo test', function(client){
    var homePage = client.page.homePage();
    homePage.inputText('test');
    client.pause(1000);
  }) 

  after(function(client,done){
    client.end();
    done();
  })
})