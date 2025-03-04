# Jupiter Planit Automation

## Overview
This project is an end-to-end (E2E) test automation suite for the Planit application, utilizing CodeceptJS with Playwright as the test execution engine. The framework follows a Gherkin-based approach with feature files and step definitions for structured test execution.

## Installation
### Clone Repository
```sh
git clone https://github.com/Sehsul/PlanIT
cd planit
```

### Install Dependencies
```sh
npm install
```

### Install Playwright Browsers
```sh
npx playwright install
```

## Configuration
- The framework configuration is stored in `codecept.conf.js`.
- The base URL is defined as `https://jupiter.cloud.planittesting.com`.
- Test reports and screenshots are stored in the `output` directory.
- Gherkin feature files are located in `./e2e/features/`.

## Test Execution
### Run All Tests
```sh
npm run test:e2e
npm run test:e2e:playwright  # Playwright
npm run test:e2e:webdriver  # Webdriver
```

### Run Tests in Headless Mode
```sh
HEADLESS=true npx codeceptjs run
```
Also can change `.env.dev.local` and set all env variables there.

### Run Specific Feature File
```sh
npx codeceptjs run --grep=@contactus
```

### Run Test in Debug Mode
```sh
npx codeceptjs run --debug
```

## Test Structure
- **Features**: Gherkin `.feature` files under `e2e/features/`.
- **Step Definitions**: JavaScript step definitions under `e2e/steps/`.
- **Pages**: Page Object Models under `e2e/pages/`.
- **Helpers & Plugins**: Configured in `codecept.conf.js`.
- **Failed Test Screenshots**: Automatically saved in `./output/`.

## Environment Support
The automation framework supports **Node.js** and **Playwright**.

## Enhancement Suggestions
### Areas for Improvement
- The website lacks unique element identifiers, making automation challenging. Adding unique `id` attributes for each item would improve automation reliability.

### Observations
- During automation, the cart items page loads slowly, requiring a 20-second delay to ensure tests run successfully.
