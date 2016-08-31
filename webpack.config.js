var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: {
        main: './src/js/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'build/js/'),
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ['es2015']
                }
            },
                // SCSS loaders
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            }
        ]
    },
    devtool: 'source-map',
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        // output path for css styles relative to javascript output
        new ExtractTextPlugin('../css/[name].css'),
        new LiveReloadPlugin()
    ]
};