const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  output: {
    filename: 'dll_[name].js',
    library: 'dll_[name]', // 动态链接库
    path: path.resolve(__dirname, 'build')
  },
  mode: 'production',
  entry: {
    vue: ['vue']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: 'dll_[name]', // 需要跟上边的library保持一致
      path: path.resolve(__dirname, 'build', 'manifest.json')
    })
  ]
}

// 这个配置文件目前就是把vue单独打包成了一个文件
