import { config } from './wdio.default.conf.js';
import path from 'path';

// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

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
    'appium:platformName': 'Android',
    'appium:platformVersion': '11.0',
    'appium:deviceName': 'Pixel 3',
    'appium:automationName': 'UiAutomator2',
    'appium:app': path.join(
      process.cwd(),
      './app/android/ColorNote-Notepad.apk'
    ),
    'appium:autoGrantPermissions': true,
  },
];

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['intercept', 'appium'];

export default { config };
