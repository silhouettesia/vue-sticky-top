const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.config.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(base, {
    plugins: [
        new UglifyJSPlugin()
    ],
    mode: 'production'
});