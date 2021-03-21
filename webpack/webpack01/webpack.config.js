// 这是一个 webpack 配置文件 webpack 是基于node 的
const path = require('path')

// dirname 当前文件的所在文件夹的绝对目录
// fileName 当前文件的绝对路径的文件名
// path.resolce(__dirname, 'demo') 拼接字符串路径
// path.join 一样

const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 清空 hash 缓存
const HtmlWebpackPlugin = require('html-webpack-plugin') // 指定html问你件 引入打包后的js
module.exports = {
  // 模式 生产 或者开发环境 默认是 生产 production
  mode: 'development',
  // mode: 'production',
  // 入口文件
  entry: './src/index.js', // 配置主入口文件, 默认是'./src/index.js'
  output: {
  //  打包压缩后的代码放的位置
  //   hash 防缓存  md5 hash 字符串
    filename: 'main[hash:5].js', // 指定打包的名字, 默认是main.js
    path: path.resolve(__dirname, 'myDist') // 配置的是把生产好的main.js 放入的位置 需要是一个绝对路径 默认是dist
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    })
  ]
}
