const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        popup: './src/popup.js',
        background: './src/background.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
       new CopyWebpackPlugin({
        patterns: [
            {from: 'manifest.json', to: ''},
            {from: 'popup.html', to: ''},
            {from: 'styles.css', to: ''}
        ],
       }),
    ],
};