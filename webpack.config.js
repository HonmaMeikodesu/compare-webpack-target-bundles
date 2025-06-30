var path = require('path');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');

var baseConfig = {  
  target: 'async-node',
  entry: {
    entry: './entry.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  }
};

let targets = ['web', 'webworker', 'node', 'async-node', 'node-webkit', 'electron-main'].map((target) => {
  let base = webpackMerge(baseConfig, {
    target: target,
    output: {
      path: path.resolve(__dirname, './dist/' + target),
      filename: '[name].' + target + '.js'
    }
  });
  return base;
});

module.exports = targets;
