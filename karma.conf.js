'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var path = require('path');
var webpack = require('webpack');

var withCoverage = process.argv.indexOf('coverage') !== -1 || process.env.COVERAGE;

var webpackConfig = {
  devtool: 'eval',
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: withCoverage ?
      [
        {
          test: /\.js$/,
          include: [path.resolve('./test')],
          loader: 'babel-loader'
        },
        {
          test: /\.js$/,
          include: [path.resolve('./src')],
          loader: 'isparta-loader'
        },
      ] :
      [
        {
          test: /\.js$/,
          include: [path.resolve('./src'), path.resolve('./test')],
          loader: 'babel-loader',
        },
      ],
  },
  stats: {
    colors: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
};

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/babel-polyfill/browser.js',
      'test/index.js',
    ],
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: {
        chunkModules: false,
        colors: true,
      },
    },
    exclude: [],
    preprocessors: {
      'test/index.js': ['webpack'],
    },
    reporters: ['jasmine-diff', 'progress'],
    jasmineDiffReporter: {
      pretty: true,
      color: {
        expectedBg: '',
        expectedFg: 'red',
        actualBg: '',
        actualFg: 'green',
        defaultBg: '',
        defaultFg: 'grey'
      }
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
  });
};
