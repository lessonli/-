const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 清空 hash 缓存
const htmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const base = require('./webpack.base')// 引入基础配置
// 如果使用 HtmlWebpackPlugin 当 这个模板解析title 会报错 不知道为什么
const dev = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(),
    // eslint-disable-next-line new-cap
    new htmlWebpackPlugin({
      // 默认模板 src/index .html
      template: './public/index.html', // 文件后缀一定要写 1 ERROR in child compilations (Use 'stats.children: true' resp. '--stats-children' for more details)
      filename: 'myHtml[hash:5].html',
      title: 'demo',
      hash: true, // 是否采用hash
      minify: false // 是否压缩
    })
  ],
  // devServer: {
  //   // "webpack": "^4.44.1",
  //   // "webpack-cli": "^3.3.12",
  //   // "webpack-dev-server": "^3.11.2" 注意版本兼容
  //   open: true,
  //   compress: true, // 启动gzip 压缩
  //   host: 'localhost',
  //   port: 8080,
  //   hot: true, // 模块热更新（热模替换）
  //   // contentBase: path.resolve(__dirname, '../public'), // 把public 下的文件当做可访问的文件
  //   proxy: {
  //     api: 'http:baidu.com'
  //   }
  // }
}
module.exports = merge(base, dev)
