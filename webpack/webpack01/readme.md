# webpack 是基于node运行的， 他的配置文件 都是需要遵循commonjs规范
## npm   cnpm  yarn  都是包的管理工具
cnpm 的安装 npm install -g cnpm --registry=https://registry.npm.taobao.org
npm i yarn -g // 可能需要你配置电脑的环境变量
cnpm和npm 混用 一般没啥事 但是不能跟yarn混用；
尽量不混用

npm i xxx    npm install xxx  ;;  卸载  npm uninstall xxx
cnpm i xxx    
yarn add xxx  // 卸载 yarn remove xxx


##  使用webpack步骤
- 初始化成一个项目  npm init -y
- 安装webpack 和 webapack-cli 两个包
  npm i  webpack webpack-cli  --save-dev // --save 就是说要把当前安装的包的信息存放到package.json中; -dev 相当于告诉webpack 这个包是开发所需要的依赖
  npm i  webpack webpack-cli  -D
  npm i  webpack webpack-cli --dev // 不能保证当前这个包一定会体现在package.json中

  npm i jquery --save 就是说要把当前安装的包的信息存放到package.json中 默认是生产依赖
  npm i jquery -S
  npm i jquery



克隆某个项目  npm i
yarn


webpack  会默认取找 src下的index.js 作为入口文件              