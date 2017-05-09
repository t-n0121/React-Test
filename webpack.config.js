const webpack = require('webpack');

module.exports = {
  entry: {
    client: "./app/index.js",
  },
  output: {
    filename: '[name].js',
    path: __dirname + "/public",
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: ['node_modules'],
  },
};