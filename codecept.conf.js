const { setHeadlessWhen } = require('@codeceptjs/configure');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const HOST = 'https://google.com.au';
const RELATIVE_PATH = './e2e';

const isShow = value => {
  return Boolean(value) === true;
};

setHeadlessWhen(isShow(process.env.HEADLESS));

const conf = {
  output: `./output`,
  cleanup: true,
  dev: {
    host: HOST,
  },
  helpers: {
    Playwright: {
      url: HOST,
      restart: false,
      waitForNavigation: 'domcontentloaded',
      show: true, // isShow(process.env.HEADLESS),
      waitForAction: 2000,
      // uniqueScreenshotNames: true,
      fullPageScreenshots: true,
      ignoreHTTPSErrors: true,
      windowSize: '1920x1080',
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
  mocha: {
    reporterOptions: {
      'codeceptjs-cli-reporter': {
        stdout: '-',
        options: {
          verbose: true,
          steps: true,
        },
      },
      'mocha-junit-reporter': {
        useFullSuiteTitle: true,
        rootSuiteTitle: 'clippy',
        testsuitesTitle: 'clippy e2e',
        attachments: true,
        stdout: '-',
        options: {
          verbose: true,
          steps: true,
          mochaFile: './output/e2eresults.xml',
          attachments: true, //add screenshot for a failed test
        },
        attachments: true, //<-- here as described
      },
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

exports.config = conf;
