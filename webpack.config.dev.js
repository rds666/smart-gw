'use strict'

const { VueLoaderPlugin } = require('vue-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: [
        './src/index.js',
    ],
    resolve: {
        alias: {
            // use Vue component for example
            'numeric-keyboard$': 'numeric-keyboard/dist/numeric_keyboard.vue.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }, {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    // @see https://webpack.js.org/plugins/
    plugins: [
        new VueLoaderPlugin(),
        // Copies from wherever to the dist folder
        new CopyWebpackPlugin([
            {from: './src/index.html'},
            {from: './src/index.css'},
            {from: './src/manifest.json'},
        ]),
    ],
    resolve: {
        alias: {
            'numeric-keyboard$': 'numeric-keyboard/dist/numeric_keyboard.vue.js'
        }
    },
}