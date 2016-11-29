

module.exports = {

    entry: './src/app.js',
    output: {
        path: './build',
        filename: "bundle.js"
    },
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