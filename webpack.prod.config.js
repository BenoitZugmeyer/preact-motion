'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

var webpack = require('webpack');
var path = require('path');

// currently, this is for bower
var config = {
  devtool: 'sourcemap',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: 'build/',
    filename: 'preact-motion.js',
    sourceMapFilename: 'preact-motion.map',
    library: 'PreactMotion',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    'preact': {
      root: 'preact',
      commonjs2: 'preact',
      commonjs: 'preact',
      amd: 'preact'
    }
  },
  node: {
    // performance-now is using process.hrtime if it is present, but we don't want to shim process
    // in the browser.
    process: false
  }
};

module.exports = config;
