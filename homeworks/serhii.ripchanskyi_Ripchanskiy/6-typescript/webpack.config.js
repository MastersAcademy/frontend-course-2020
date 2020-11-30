const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ],
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    }
}
