# webpack
# 模块化

- 代码转化  less / sass / stylus -->css; ts-->js 高版本的JS语法转成低版本
- 代码压缩  html js  css 压缩了
- 代码分割 模块合并（模块化开发）
- 热更新（自动刷新 两个概念）

# 模块化开发  AMD CMD sea.js require.js  common.js esModule ...
common.js 主要应用在node上
esModule  主要应用在浏览器


webpack 处理 JS 需要借助 babel
babel-loader   @babel/core  @babel/preset-env //转换版本
babel的预设 presets 就是插件的集合
插件  plugins   你要使用的预设中没有包含的插件





externals 外部扩展； 我们想把项目中使用的包 从打包的文件中分离
externals:{
'自定义属性名':'包生成的全局变量'
}          
import xxx from '自定义属性名'

webpack.ProvidePlugin({
"要在文件中使用的变量名":"安装的包的名字"
}) 这样的配置可以让我们在项目中 不用再写  import xx from  'xx'  直接使用对应的变量即可


resolve.extensions = ['.css'] 在引入文件的时候 我们可以不写文件的后缀了
resolve.alias = {
'xxxx':"xxxx的绝对路径"   // 配置路径的别名 可以加快模块的查找速度
}

resolve.modules  = [path.resolve(__dirname,'src'),'node_modules] 当遇到么写相对路径文件时 优先取 src中查找 没有的再去node_modules中查找


webpack.DefinePlugin({
aaa:JSON.stringify('hello')
}) // 定义在编译阶段加上的全局变量

thread-loader 多进程打包； 可以提升构建速度  @vue/cli create-react-app 都已经内置了
// 以前使用的 happypack 这个包已经不维护了

webpack.IgnorePlugin // 在打包时忽略指定的文件

optimization.splitChunks 这是一个分包的配置



webpack.DllPlugin 结合 webpack.DllReferancePlugin可以实现两个功能
1 - 分包
2 - 提升构建速度


npm i -S 保证放到 package 中  如果不加 -S 有时会放不进 package.json 中
npm i --save-dev  是开发所需的依赖

> webpack 是按依赖进行的打包 所以 装包 无论是装到生产依赖 还是开发依赖 上线的时候都不会影响 
> 有些大佬说 会自动 这些就是给程序员看的  真正使用的时候没有影响 不过建议按照标准安装
## 安装
npm webpack webpack-ci 