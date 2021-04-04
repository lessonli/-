module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'standard',
  env: {
    browser: true,
    es6: true
  },

  rules: {
    'no-nested-ternary': 0,
    'no-array-constructor': 2, // 禁止使用数组构造器
    'no-const-assign': 2, // 禁止修改const声明的变量
    'no-constant-condition': 2, // 禁止在条件中使用常量表达式 if(true) if(1)
    'no-dupe-keys': 2, // 在创建对象字面量时不允许键重复 {a:1,a:1}
    'keyword-spacing': 1,
    'no-unused-expressions': 'off',
    'no-extend-native': 'off', // 关闭禁止扩展原生对象
    'no-var': 0,
    'no-unused-vars': 0,
    'no-eval': 0
  }
  // "prefer-const": 0
  // "no-caller": 1,//禁止使用arguments.caller或arguments.callee
}
