const HtmlWebpackPlugin = require('html-webpack-plugin'); //lets webpack look through html files
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //loads the tool for css webpack

module.exports = {
  entry: './src/app.js',
  output: {
    path: './build',
    filename: 'main.js'
  },
  devtool: 'source-map', //the setting that makes webpack create a source pack when you make a bundle. lets you look at original source code in browser instead of getting lost in bundle code
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ExtractTextPlugin('styles.css')
  ],

  module: {
    preLoaders: [{ //run a linter before building
      test: /\.js$/, //look for whatever files match .js at the end of the string
      loader: 'eslint-loader',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'] //babel goes through es6 and transpiles it to es5 because es5 is more widely compatible
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader') //load css into bundle. this does require for these packages within extract method
    }]
  }
};
