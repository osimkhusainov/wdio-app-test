import { config } from './wdio.default.conf.js';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_ACCESS_KEY;
//
// ============
// Specs
// ============
config.specs = [path.join(process.cwd(), './test/specs/android/*.spec.js')];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: 'android',
    'appium:platformVersion': '9.0',
    'appium:deviceName': 'Google Pixel 3',
    'appium:automationName': 'UiAutomator2',
    'appium:app': 'bs://abf9feeed2fde87920317b72e23f41464c1ad1ec',
    'appium:autoGrantPermissions': true,
  },
];

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack', 'intercept'];

export default { config };
