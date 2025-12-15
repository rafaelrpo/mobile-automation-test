const allure = require('@wdio/allure-reporter').default;

exports.config = {
  runner: 'local',
  framework: 'cucumber',

  specs: ['./test/features/**/*.feature'],

  cucumberOpts: {
    require: ['./test/step-definitions/**/*.js'],
    timeout: 60000
  },

  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverScreenshotsReporting: false
    }]
  ],

  capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android Emulator',
    'appium:app': './app/native-demo-app.apk'
  }],

  afterScenario: async function (world) {
    const screenshot = await browser.takeScreenshot();
    allure.addAttachment(
      `Screenshot - ${world.pickle.name}`,
      Buffer.from(screenshot, 'base64'),
      'image/png'
    );
  }
};
