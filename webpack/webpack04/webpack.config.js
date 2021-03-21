const Html = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[hash:5].js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new webpack.DllReferencePlugin({
    //  在打包编译的时候 先去清单中(manifest.json) 中 查单是否有该包, 若有直接跳过 不在打包, 没有的时候才打包对应的包
      manifest: path.resolve(__dirname, './build/manifest.json')
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!dll_*', '!mani*n']
    }),
    new Html({
      template: './public/index.html',
      filename: 'index.html'
    }),
    // 定义 全局的遍历
    new webpack.DefinePlugin({
      BASEURL: JSON.stringify('http:baidu.com'),
      OPTIONS: {
        AUTHER: JSON.stringify('lisen')
      }
    }),
    // 在入口文件 引入 当前使用的中文路径
    new webpack.IgnorePlugin(/local/, /moment/) // 打包的时候忽略，moment
  ],
  module: {
    noParse: /jquery|lodash/, // 明确这两包没有任何依赖任何包
    rules: [
      { test: /\.js$/, use: ['babel-loader', 'thread-loader'] }
    ]
  },
  // 优化 splitChunks 分包
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 5000, // 最小5kb
      minChunks: 1, // 最少有一个 地方引入 5k 的包
      // 缓存组 符合这些条件生成的包 不会在重新打包 直接走缓存
      cacheGroups: {
        jquery: {
          name: 'jquery',
          test: /jquery/,
          chunks: 'all'
        },
        lodash: {
          name: 'lodash',
          test: /lodash/,
          chunks: 'initial'
        }
      }
    }
  },
  devServer: {
    contentBase: 'build' // 把打包后的 dist 当做 服务器提供的 资源文件
  }
}
