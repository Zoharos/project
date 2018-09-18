import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import LiveReloadPlugin from 'webpack-livereload-plugin'
const path = require('path')

module.exports = {
  mode: "development",
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name]_bundle.js'
  },
  module: {
    rules: 
    [
      {
        test: /\.(png|jpg|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
       },
     {
      test: /\.js$/,
      include: [
        path.resolve(__dirname, "client")
      ],
      exclude: [
       path.resolve(__dirname, "node_modules")
      ],
      loader: 'babel-loader'
     },
      {
        test: /\.scss$/,
      use: 
      [
        {
          loader: "style-loader"
        }, 
       {
          loader: "css-loader", options: 
          {
              sourceMap: true
          }
       }, 
       {
          loader: "sass-loader", options: 
          {
              sourceMap: true
          }
       }]
       }
    ]
  },
  resolve: {
    alias: {
      Imgs: path.resolve(__dirname,'client/img/')
    },
    modules: [
      "node_modules",
      path.resolve(__dirname, "client")
    ]
  },
  plugins: 
  [
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    }),
    new LiveReloadPlugin()
  ]
};