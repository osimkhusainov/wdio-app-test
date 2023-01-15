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
config.specs = [path.join(process.cwd(), '/test/specs/ios/*.spec.js')];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    'appium:platformName': 'ios',
    'appium:platformVersion': '16.2',
    'appium:deviceName': 'iPhone 14 Pro',
    'appium:automationName': 'XCUITest',
    'appium:app': path.join(process.cwd(), './app/ios/UIKitCatalog.app'),
  },
];

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['appium', 'intercept'];

export default { config };
