module.exports = {
  presets: ['@babel/preset-env'], // 插件集合 告诉babel-loader把js转成哪个版本
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-runtime', {
      corejs: 3
    }]
  ]
}
