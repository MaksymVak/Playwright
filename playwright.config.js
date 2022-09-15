// @ts-check
const { devices } = require('@playwright/test');
const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  /* Run tests in files in parallel */
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: /* 'html', */[['allure-playwright', {
    detail: true,
    outputFolder: 'allure-results',
    suiteTitle: false
  }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: 'chromium',
/*     headless: true, */
    locale: 'uk-UK'
  },
};

module.exports = config;
