const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugins = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
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
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      $$: 'jquery'
    })

  ],
  module: {
    rules: [
      { test: /\.(css)$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        // 可以抽离文一个文件 babel.config,js
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: ['@babel/preset-env'],
        //     plugins: [
        //       ['@babel/plugin-proposal-decorators', { legacy: true }], // 装饰器
        //       ['@babel/plugin-proposal-class-properties', { loose: true }], // 版本转换
        //       ['@babel/plugin-transform-runtime', {
        //         corejs: 3
        //       }]
        //     ]
        //   }
        // }
        use: 'babel-loader'
      }

    ]
  },
  // 需要 import 使用的 就可以利用这个配置
  externals: {
    jquery: 'jQuery'
  },
  resolve: {
    // 利用这个 引入 内容 可以不添加 后缀 在这里配置就可以
    extensions: ['vue', 'js'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}
