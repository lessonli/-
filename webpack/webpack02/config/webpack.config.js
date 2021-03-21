const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 清空 hash 缓存
const htmlWebpackPlugin = require('html-webpack-plugin')
// 如果使用 HtmlWebpackPlugin 当 这个模板解析title 会报错 不知道为什么
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'chunk[hash:5].js', // 压缩后的文件名
    path: path.resolve(__dirname, '../build') // 压缩后的路径

  },
  plugins: [
    new CleanWebpackPlugin(),
    // eslint-disable-next-line new-cap
    new htmlWebpackPlugin({
      // 默认模板 src/index.html
      template: './public/index.html', // 文件后缀一定要写 1 ERROR in child compilations (Use 'stats.children: true' resp. '--stats-children' for more details)
      filename: 'myHtml[hash:5].html',
      title: 'demo',
      hash: true, // 是否采用hash
      minify: true // 是否压缩
    })
  ]
}
