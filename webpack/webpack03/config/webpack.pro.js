const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugins = require('html-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.[hash:5].js',
    path: path.resolve(__dirname, '../build')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugins({
      template: './public/index.html',
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      { test: /\.(css)$/, use: ['style-loader', 'css-loader'] }
    ]
  }
  // devServer: {
  //   port: 8080,
  // }
}
