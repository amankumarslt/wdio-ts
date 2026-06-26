import { browser } from '@wdio/globals';

const user = process.env.LT_USERNAME || 'amankumars';
const accessKey = process.env.LT_ACCESS_KEY || 'LT_euA4TdkHayXDAw21SwRi7cM8SWDR0Zni1SaBNYTcqbR1rmu';

export const config = {
  runner: 'local',
  tsConfigPath: './tsconfig.json',

  specs: ['./tests/**/*.spec.ts'],
  exclude: [],

  maxInstances: 10,

  hostname: 'hub.lambdatest.com',
  port: 443,
  protocol: 'https',
  path: '/wd/hub',

  capabilities: [
    {
      browserName: 'chrome',
      browserVersion: 'dev',
      'lt:options': {
        username: 'amankumars',
        accessKey: 'LT_euA4TdkHayXDAw21SwRi7cM8SWDR0Zni1SaBNYTcqbR1rmu',
        platformName: 'Windows 10',
        project: 'Untitled',
        w3c: true,
        plugin: 'node_js-webdriverio',
      },
    },
  ],

  logLevel: 'info',
  bail: 0,
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  outputDir: 'logs',

  framework: 'mocha',
  reporters: ['spec'],

  mochaOpts: {
    timeout: 300000,
  },

  onPrepare: async () => {
    console.log('🚀 Starting test run on LambdaTest...');
  },

  afterTest: async (test, context, { error }) => {
    if (error) {
      const screenshot = await browser.takeScreenshot();
      console.log('📸 Screenshot on failure captured');
    }
  },

  onComplete: async () => {
    console.log('✅ Test run complete.');
  },
};
