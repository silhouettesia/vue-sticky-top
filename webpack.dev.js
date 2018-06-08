const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.config.js');

module.exports = merge(base, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 9000,
        // hot: true,
        // inline: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    mode: 'development'
})