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
  plugins: [],
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
};

module.exports = config;
