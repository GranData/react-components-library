const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const isDev = !(process.env.NODE_ENV === 'production');
const postcssConfig = path.resolve(__dirname, './postcss.config.js');

module.exports = {
  bail: true,
  devtool: isDev ? 'source-map' : 'hidden-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'reactLib',
  },
  externals: ['react', 'react-dom'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: postcssConfig,
                },
              },
            },
          ],
        }),
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'svg-react-loader',
      },
      {
        test: /\.(gif|png|jpg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1,
          name: '[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: process.env.NODE_ENV,
    }),
    new ExtractTextPlugin('styles.css'),
  ],
};
