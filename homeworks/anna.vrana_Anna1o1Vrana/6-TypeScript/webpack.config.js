const path = require('path');

module.exports = {
    entry: './src/scripts/index.ts',
    mode: "production",
    devtool: "source-map",
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            {
                test: /\.tsx(?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
