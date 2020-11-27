const path = require('path');

module.exports = {
    entry: './app/core.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.css' ],
    },
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, 'dist'),
        clientLogLevel: 'error',
        open: { app: ['google-chrome'] },
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
