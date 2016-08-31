var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');

// for styles
// var postcss = require('postcss-loader');
var atImport = require('postcss-import');
var precss = require('precss');
var autoprefixer = require('autoprefixer');


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
            // {
            //     test: /\.scss$/,
            //     loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            // },
                // post-css
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            }

        ]
    },
    postcss: function (webpack) {
        return [
            precss,
            autoprefixer,
            atImport({
                path: './src/css/main.css',
                addDependencyTo: webpack
            })
        ];
    },
    devtool: 'source-map',
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        // output path for css styles relative to javascript output
        // new ExtractTextPlugin('../css/[name].css'),
        new LiveReloadPlugin()
    ]
};