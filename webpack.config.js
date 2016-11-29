

module.exports = {

    entry: './src/app.js',
    output: {
        path: './build',
        filename: "bundle.js"
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new ExtractedTextPlugin("style.css")
    ]

    module: {
        preloaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader"
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }]
    }

}