const LoginPage = require('../pageobjects/login.page');
const allureReporter = require('@wdio/allure-reporter').default
describe('ePI Automation Testing', () => {
    it('should open ePI landing page', async () => {

        allureReporter.addFeature('Landing Page');
        allureReporter.addSeverity('Critical');
         await LoginPage.open();
         await browser.pause(4000)

    });

    it('should open Enterprise Wallet', async() => {
        allureReporter.addFeature('Enterprise Wallet Login')
        await LoginPage.openEnterpriseWallet();
        await browser.pause(4000)

    });


});


