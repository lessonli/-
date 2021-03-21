const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCss = require('mini-css-extract-plugin')
// mini-css-extract-plugin 可以把css单独拎成一个文件 然后使用 link 引入
const opimizationCss = require('optimize-css-assets-webpack-plugin')
const terserPlugin = require('terser-webpack-plugin')
const Mini = require('css-minimizer-webpack-plugin')
// const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  entry: {
    index123: './src/index.js',
    other123: './src/other.js',
    common: './src/common.js'
  },
  output: {
    // filename:'chunk.[hash:6].js',
    filename: '[name].[hash:5].js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new CleanWebpackPlugin({
      // cleanOnceBeforeBuildPatterns:['**/*','!qqq*']
    }),
    new MiniCss({
      filename: 'css/[name].css'
    })
  ],
  module: {
    // css-loader只是把css转成JS认识的语法
    // style-loader 是把处理成JS的css通过 style标签插入到页面中
    // loader的加载顺序是从右往左的
    // postcss 的配置步骤 可以处理css的兼容写法
    // 1 - 安装postcss 和 postcss-loader
    // 2 - 在处理对应的css文件之前 先加上 postcss-loader
    // 3 - 配置postcss所需要的配置项 postcss.config.js  (需要安装postcss-preset-env)
    // 4 - 设置浏览器的兼容版本  .browserslistrc 文件
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCss.loader, 'css-loader', {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                'postcss-preset-env'
              ]
            }
          }
        }]
      },
      {
        test: /\.less$/i,
        use: [
          MiniCss.loader, 'css-loader'
        ]
      },
      {
        test: /\.less$/i,
        use: [
          'less-loader', 'postcss-loader'
        ]
      },
      {
        test: /\.(jpg|png|jpeg|gif|ico)$/i,
        use: {
          loader: 'url-loader',
          options: {
            // 若图片大小不超过 10kb 就会把图片转成base64
            // 变成base64的好处就是 可以减少http请求
            limit: 10 * 1024, // 数字代表的是 bit字节
            name: 'img/[name].[ext]'
          }
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      // new opimizationCss(), // 当压缩css之后 JS就不会自动压缩了
      // new terserPlugin()
      new Mini()
    ]
  }
}

// module.exports = {
//   entry:"./src/index.js",
//   output:{
//     filename:'chunk.[hash:6].js',
//     path:path.resolve(__dirname,'../mydist')
//   },
//   plugins:[
//     new CleanWebpackPlugin({
//       // cleanOnceBeforeBuildPatterns:['**/*','!qqq*']
//     })
//   ]
// }
