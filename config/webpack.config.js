var Path = require('path');
var webpack = require('webpack');


const path = (...parts) => Path.join(__dirname, '..', ...parts);

module.exports = {
  entry: ['babel-polyfill', path('src', 'index.js')],
  target: 'node',
  output: {
    libraryTarget: 'commonjs',
    library: 'handler',
    filename: 'index.js',
    path: path('build')
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true)
  ]
};
