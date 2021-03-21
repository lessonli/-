
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.base')
const { merge } = require('webpack-merge')
const path = require('path')
const obj = require('../mockApi/index')
module.exports = merge(base, {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      title: '珠峰培训dev',
      scr: 'http://baidu.com',
      // hash:true,
      minify: true,
      chunks: ['index123', 'common']
    }),
    new HtmlWebpackPlugin({
      template: './public/other.html',
      filename: 'other.html',
      chunks: ['other123', 'common']
    })
  ],
  devServer: {
    port: 9000, // 修改服务的端口号
    https: true,
    open: false, // 服务启动之后 自动打开浏览器
    contentBase: path.resolve(__dirname, '../public'), // 把public下的文件当作可访问的服务器中的文件
    // proxy:{
    //   "/api":"https://baidu.com" //只要路径路含有/api的请求 都会被 代理 到  https://baidu.com
    // }
    before: obj.API,
    proxy: {
      api: {
        target: 'https://baidu.com',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
