import Path from 'path';
import webpack from 'webpack';

const path = (...parts) => Path.join(__dirname, '..', ...parts);

export default {
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
