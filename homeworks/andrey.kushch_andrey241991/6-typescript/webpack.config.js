const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.ts",
        game: "./src/game.ts",
        helpers: "./src/helpers/helpers.ts",
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [".js", ".json", ".png", ".ts"],
        alias: {
            "@models": path.resolve(__dirname, "src/models"),
            "@": path.resolve(__dirname, "src"),
        },
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html",
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ["file-loader"],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ["file-loader"],
            },
            {
                test: /\.xml$/,
                use: ["xml-loader"],
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                    },
                ],
            },
        ],
    },
};
