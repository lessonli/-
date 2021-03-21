
let HtmlWebpackPlugin = require('html-webpack-plugin')
let base = require('./webpack.base')
let {merge} = require('webpack-merge')
function html(){
  var ary = ['index','other'];
  var arr = [];
  ary.forEach(item=>{
    arr.push(
      new HtmlWebpackPlugin({
      template:`./public/${item}.html`,
      filename:item+'.html',
      title:"珠峰培训dev",
      scr:'http://baidu.com',
      // hash:true,
      minify:false,
      chunks:[item+'123','common'] // 指定当前模板引入哪个JS
    }))
  })
  return arr
}
module.exports = merge(base, {
  mode:'production',
  plugins:[
    ...html()
    // new HtmlWebpackPlugin({
    //   template:'./public/index.html',
    //   filename:'index.html',
    //   title:"珠峰培训dev",
    //   scr:'http://baidu.com',
    //   // hash:true,
    //   minify:false,
    //   chunks:['index123','common'] // 指定当前模板引入哪个JS
    // }),
    // new HtmlWebpackPlugin({
    //   template:'./public/other.html',
    //   filename:'other.html',
    //   minify:false,
    //   chunks:['other123','common','index123']
    // })
  ]
})