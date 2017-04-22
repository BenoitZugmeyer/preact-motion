process.env.NODE_ENV = 'test';

let rollupConfig = require('./rollup.config');

module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    files: [
      'node_modules/babel-polyfill/browser.js',
      // Watch src files for changes but
      // don't load them into the browser.
      { pattern: 'src/**/*.js', included: false },
      'test/**/*-test.js',
    ],

    preprocessors: {
      'src/**/*.js': ['rollup'],
      'test/**/*-test.js': ['rollup'],
    },

    exclude: [],
    reporters: ['jasmine-diff', 'progress'],
    jasmineDiffReporter: {
      pretty: true,
      color: {
        expectedBg: '',
        expectedFg: 'red',
        actualBg: '',
        actualFg: 'green',
        defaultBg: '',
        defaultFg: 'grey',
      },
    },
    coverageReporter: {
      dir: './coverage/',
      subdir: '.',
      reporters: [
        {type: 'html'},
        {type: 'lcovonly'},
        {type: 'text', file: 'text.txt'},
        {type: 'text-summary', file: 'text-summary.txt'},
      ],
    },
    captureTimeout: 90000,
    browserNoActivityTimeout: 60000,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,

    rollupPreprocessor: Object.assign({}, rollupConfig, {
      format: 'iife',
      sourceMap: 'inline',
    }),
  });
};
