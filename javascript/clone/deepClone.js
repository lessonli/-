const obj1 = { a: 1, b: { name: 'demo' } }
// 深克隆
/* 1序列化
  + 存在的问题 会把正则/Math/ new ArrayBuffer处理成空对象
  + 具备函数/Symbol/undefined属性值的属性 会被直接干掉
  + BigInt 直接报错
  + 日期对象最后还是字符串
*/
// const obj2 = JSON.parse(JSON.stringify(obj1))

/* 2 递归遍历 */
// function deepClone (obj) {
//
// }