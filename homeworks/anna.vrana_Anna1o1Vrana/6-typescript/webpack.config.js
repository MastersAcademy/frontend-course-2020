const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/scripts/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$|tsx/,
                include: [path.resolve(__dirname, 'src')],
                use: 'ts-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlPlugin({
            template: 'src/index.html',
            scriptLoading: 'defer'
        })
    ],
    output: {
        publicPath: './',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },
    resolve: {
        extensions: ['.js', '.ts']
    }
}

