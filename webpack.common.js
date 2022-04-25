const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    // Set the mode configuration option to development to make sure that the bundle is not minified:
    context: path.resolve(__dirname),

    entry: [
        // for await in async functions
        'babel-regenerator-runtime',
        path.resolve(__dirname, './src/js/mainMenu.mjs'),
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js',
        // when building again, delete previous files and generate new ones.
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                // from right to left
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: {
                    and: [/node_modules/, /threeJS/, /threeX/],
                },
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        compact: 'auto',
                        // When set, the given directory(the loader will use the default cache directory in node_modules/.cache/babel-loader or fallback to the default OS temporary file directory if no node_modules folder could be found in any root directory.) will be used to cache the results of the loader.
                        cacheDirectory: true,
                        plugins: [
                            '@babel/plugin-syntax-top-level-await',
                            '@babel/plugin-syntax-import-assertions',
                        ],
                    },
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Break the Blocks Game',
            template: path.resolve(__dirname, './src/public/template.html'),
            filename: 'index.html', //what do you want the file to be called in dist
        }),
        new CopyPlugin({
            patterns: [
                // https://webpack.js.org/plugins/copy-webpack-plugin/#examples on how to construct the path
                // easiest option is using Glob in from, and writing the path in context
                // the parent file for the specified path in "to" is last file in output.path option of webpack config file
                { context: './Images', from: '*.png', to: 'Images' },
                // prettier-ignore
                { context: './Images/favicon', from: '*.png', to: 'Images' },
                { context: './font', from: '*.json', to: 'font' },
                { context: './sounds', from: '.', to: 'sounds' },
            ],
            options: {
                concurrency: 100,
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css',
        }),
        // new BundleAnalyzerPlugin(),
    ],

    optimization: {
        // Tell webpack to minimize the bundle using the TerserPlugin or the plugin(s) specified in optimization.minimizer.
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.m?js$/,
                exclude: [/node_modules/, /threeJS/, /threeX/],
                // default is true, but you know I like writing code.
                parallel: true,
                extractComments: false,
            }),
            new CssMinimizerPlugin({
                exclude: /(node_modules)/,
            }),
        ],
        runtimeChunk: true,
    },
    // for await that isn't in async function
    experiments: { topLevelAwait: true },
};
