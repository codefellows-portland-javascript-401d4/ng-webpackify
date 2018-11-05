const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugIn = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: './build',
        filename: 'main.bundle.js'
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugIn('styles.css')
    ],
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugIn.extract('style-loader', 'css-loader')
            
        }]
    },



};
