const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;
const cssLoaders = extra => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true
      },
    },
    'css-loader'
  ]
  if (extra) {
    loaders.push(extra)
  }
  return loaders
};
const plugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/favicon.ico'),
        to: path.resolve(__dirname, 'dist')
      }
    ]),
  ]
  if (isProd) {
    base.push(new BundleAnalyzerPlugin())
  }

  return base
};
module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.ts',
  },
  output: {
    filename: filename('.js'),
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js','.tsx', '.ts', '.json', '.png'],
    alias: {
      '@scripts': path.resolve(__dirname, 'src/scripts'),
      '@': path.resolve(__dirname, 'src'),
    }
  },
  devServer: {
    port: 4200,
    hot: isDev
  },
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders()
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: {
          loader: 'ts-loader',
        }
      },
    ]
  }
}
