'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

var webpack = require('webpack');
var path = require('path');

var devtool;

if (process.env.NODE_ENV === 'development') {
  devtool ='eval-source-map';
} else {
  devtool ='source-map';
}

module.exports = {
  devtool: devtool,
  entry: {
    'demo0-simple-transition': './demos/demo0-simple-transition/index.jsx',
    'demo1-chat-heads': './demos/demo1-chat-heads/index.jsx',
    'demo2-draggable-balls': './demos/demo2-draggable-balls/index.jsx',
    'demo3-todomvc-list-transition': './demos/demo3-todomvc-list-transition/index.jsx',
    'demo4-photo-gallery': './demos/demo4-photo-gallery/index.jsx',
    'demo5-spring-parameters-chooser': './demos/demo5-spring-parameters-chooser/index.jsx',
    'demo7-water-ripples': './demos/demo7-water-ripples/index.jsx',
    'demo8-draggable-list': './demos/demo8-draggable-list/index.jsx',
  },
  output: {
    filename: '[name]/all.js',
    publicPath: '/demos/',
    path: __dirname + '/demos/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /build|lib|bower_components|node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.jsx?$/,
        exclude: /build|lib|bower_components|node_modules/,
        loader: 'eslint-loader',
        enforce: "pre"
      },
      {
        test: /\.css$/,
        loaders: [ "style-loader", "css-loader" ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
};
