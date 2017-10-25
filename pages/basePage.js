module.exports = {//default setting
    getDefaultTimeout: function () {
        return 50000;
    },

    loadHomePage: function (browser) {
        browser
            .maximizeWindow()
            .url(browser.launchUrl)
            .pause(5000)
    }
}