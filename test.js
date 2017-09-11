module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .useCss()
      .url('http://www.baidu.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[id=kw]', 'nightwatch')
      //.waitForElementVisible('submit[id=su]', 1000)
      //.click('input[id=su]')
      .mouseButtonDown()
      .pause(1000)
      //.assert.containsText('#main', 'nightwatch')
      .end();
  },
  'login test google':function(browser){
    browser
      .url('http://www.baidu.com')
      .assert.title('百度一下，你就知道')
      .click('a.lb:nth-child(7)')
      .pause(1000)
      .end();
  },
  'login test baidu':function(browser){
    browser
      .url('http://www.baidu.com')
      .assert.title('百度一下，你就知道')
      .click('a.lb:nth-child(7)')
      .pause(20000)
      .setValue('#TANGRAM__PSP_8__userName','1101319611')
      .pause(20000)
      // .setValue('html body div#passport-login-pop.tang-pass-pop-login-noimg.tang-pass-pop-login-merge.tang-pass-pop-login-tpl-mn.tang-pass-pop-login-color-blue.tang-pass-pop-login div#TANGRAM__PSP_2__foreground.tang-foreground div#TANGRAM__PSP_2__body.tang-body div#TANGRAM__PSP_2__content.tang-content div#passport-login-pop-dialog div.clearfix div.pass-login-pop-content div.pass-login-pop-form div#passport-login-pop-api.tang-pass-login form#TANGRAM__PSP_8__form.pass-form.pass-form-normal p#TANGRAM__PSP_8__passwordWrapper.pass-form-item.pass-form-item-password input#TANGRAM__PSP_8__password.pass-text-input.pass-text-input-password','1101319611')
      // .waitForElementVisible('input[id=TANGRAM__PSP_8__userName]',1000)
      .setValue('#TANGRAM__PSP_8__password','xw2605765')
      .pause(10000)
      .end();
  }
  // 'get cookie test':function(browser){
  //   browser
  //     .url('http://www.baidu.com')
  //     .assert.title('百度一下，你就知道')
  //     .click('a.lb:nth-child(7)')
  //     .pause(20000)
  //     .getCookie(userName,function callback(result){
  //       assert.equal(result.value,'1101319611')
  //       assert.equal(result.name,'FP_UID')
  //     })
      

  // }
};