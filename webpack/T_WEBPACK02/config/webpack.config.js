let path = require('path');
let {CleanWebpackPlugin} = require('clean-webpack-plugin')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode:'development',
  entry:"./src/index.js",
  output:{
    filename:'chunk.[hash:6].js',
    path:path.resolve(__dirname,'../mydist')
  },
  plugins:[
    new CleanWebpackPlugin({
      // cleanOnceBeforeBuildPatterns:['**/*','!qqq*']
    }),// 每次清空dist中的老文件
    new HtmlWebpackPlugin({
      template:'./public/index.html',
      filename:'hello.html',
      title:"珠峰培训",
      scr:'http://baidu.com',
      // hash:true,
      minify:true
    })
  ]
}