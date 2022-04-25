const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(
    merge(common, {
        mode: 'production',
        devServer: {
            static: {
                directory: path.resolve(__dirname, 'dist'),
            },
            port: 8080,
            hot: true,
            open: true,
            magicHtml: true,
        },
    })
);
