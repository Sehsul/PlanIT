const { setHeadlessWhen } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const HOST = 'https://google.com.au';
const RELATIVE_PATH = './e2e';

exports.config = {
  output: `./output`,
  cleanup: true,
  dev: {
    host: HOST,
  },
  helpers: {
    WebDriver: {
      url: HOST,
      browser: 'chrome',
      smartWait: 5000,
      browser: 'chrome',
      restart: false,
      windowSize: 'maximize',
      timeouts: {
        script: 60000,
        'page load': 10000,
      },
    },
    REST: {},
  },

  gherkin: {
    features: `${RELATIVE_PATH}/features/**/*.feature`,
    steps: [
      `${RELATIVE_PATH}/steps/generate.steps.js`,
      `${RELATIVE_PATH}/steps/jupitertoys/jupitertoys.steps.js`,
      `${RELATIVE_PATH}/steps/Hooks/hooks.steps.js`,
    ],
  },
  include: {
    jupiterPage: `${RELATIVE_PATH}/pages/Jupitertoys/jupitertoys.pages.js`,
    contactPages: `${RELATIVE_PATH}/pages/Jupitertoys/contact.pages.js`,
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    autoDelay: {
      enabled: true,
      delayBefore: 200,
    },
    retryTo: {
      enabled: true,
    },
    retryFailedStep: {
      enabled: true,
      retries: 5,
    },
    customLocator: {
      enabled: true,
      attribute: 'data-testid',
    },
    tryTo: {
      enabled: true,
    },
  },
  async bootstrap() {
    console.log('Do some pretty suite setup stuff');
  },
  async teardown() {
    console.log('Cool, one of the workers have finished');
  },
  name: 'Planit E2E Tests',
};
