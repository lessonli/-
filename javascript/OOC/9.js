
/*
* 9. a等于什么值会让下面条件成立
*  思路 利用对象转换为数字浏览器 ，默认做了一些处理 我们进行重写 实现效果
*   + 引用数据类型转换为数字 Symbol.toPrimitive
*   + valueOf
*   + arr.toString
* */
const a = {
  i: 0,
  [Symbol.toPrimitive] () {
    return ++this.i
  }
}
// window.a = 0
// let i = 0
// Reflect.defineProperty(window, 'a', {
//   get () {
//     return ++i
//   }
// })
// const arr = [1, 2, 3]
// // eslint-disable-no-var
// var a = arr.toString = arr.shift
// eslint-disable-next-line eqeqeq
if (a == 1 && a == 2 && a == 3) {
  console.log('OK')
}

/* 隐式转换 规则
  + 对象 和字符串  转换为字符串
  + null == undefined
  + 其余都是转换为字符串
  + 把其他值转换为数字 string number bigint boolean null undefined 都是基于 Number 实现的转换
  + symhbol 是无法转换的
  + */
/*
* 引用数据转换规则 步骤
*   + Symbol.toPrimitive
*   + valueOf
*   + toString
*   + Number
* */
