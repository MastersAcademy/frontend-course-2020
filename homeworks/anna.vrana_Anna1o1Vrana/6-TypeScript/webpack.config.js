/**
 *
 * @type {path.PlatformPath | path}

// const path = require('path');
// const HTMLWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//
// module.exports = {
//     entry: './src/scripts/index.ts',
//     mode: 'development',
//     devtool: 'source-map',
//     resolve: {
//         extensions: ['.ts', '.css']
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.ts/,
//                 exclude: /node_modules/,
//                 use: [
//                     {
//                         loader: 'ts-loader'
//                     }
//                 ]
//             },
//             {
//                 test: /\.css$/,
//                 use: [MiniCssExtractPlugin.loader, 'css-loader'],
//                 exclude: /node_modules/
//             },
//         ],
//     },
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist'),
//     },
//     plugins: [
//         new HTMLWebpackPlugin({
//             template: './src/index.html'
//         }),
//         new MiniCssExtractPlugin(),
//         ]
// };
*/
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

