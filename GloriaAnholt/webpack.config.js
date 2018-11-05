const Htmlwebpack = require('html-webpack-plugin');

module.exports = {
  entry: "./main.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devtool: 'source-map',
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.css$/,
      exclude: /node_modules/,
      loader: "style!css"
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: { presets: ['es2015'] }
    }]
  },
  plugins: [
    new Htmlwebpack({
      template: './index.html'
    })
  ]
};
