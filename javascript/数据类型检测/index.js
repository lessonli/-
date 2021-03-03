/*
* 数据类型检测
*   + typeof
*       + 检测null 为object ()
*       + 检测 未定义的变量 为 undefined
*   + instanceof 用来检测当前实例 是否属于某个类 一般用来 检测 普通对象/日期/正则/数学对象 。。。。
*       + 不适用于 普通数据对象检测
*       + console.log(Object('12') instanceof String) 这样就都适合 前提是 明确知道
*           + 引用数据类型 instanceof Object === true
*           + 不能明确区分 是否是普通对象还是 特殊对象
*       + Object.prototype.toString.call()
*       + 本质是基于 Array[Symbol.hansInstance](arr) true  基于 实例 instanceof 类 的时候是这样处理的
*       + 当是实例与类之间检测的时候 是利用原型链进行的查找
*       + let a = 10 Number[Symbol.hasInstanceof](2),false  let a = new Number(22) Number[Symbol.hasInstanceof](a) true
*   + constructor
*     > 获取实例的构造函数, 基于这个特性可以进行数据类型检测
*     + 比 instanceof 好用一点 之所以不准 是因为 constructor 也是可以随意更改的
*     + 假设constructor 未被修改
*         + 可以区分是数组还是普通对象
*         + 可以区分基本数据类型 (10).constructor === Number  true
*   + Object.prototype.toString.call(value) 基本完美
*     + Object.toString 不是转化字符串的, 而是检测数据类型的
*     + ({}).toString.call(value)
*     + 返回结果 [object, '当前对象的数据类型']
*      > [object, Symbol.toStringTag||自己的所属类|| Object]
*
* */

// typeof number string function object boolean bigint symbol undefined(检测未定义的变量), 检测null 为Object
// console.log(Object('12') instanceof String)
//= ==========================================》

// 重写instanceof
/**
 *
 * @param obj 要检测的实例(不支持基础数据类型)
 * @param constructor(要检测是类, 必须是一个函数)
 * @return Boolean 是一个当前constructor 的实例 返回true 否则 返回false
 */
function instanceOf (obj, constructor) {
  // obj 不是引用数据类型 并且 constructor 不是函数 返回 false
  if (obj == null || /^(function| object) $/i.test(typeof obj)) return false
  if (typeof constructor !== 'function') throw new TypeError('Right-hand side of "instanceof" is not callable')

  let proto = Reflect.getPrototypeOf(obj)
  const prototype = constructor.prototype

  while (true) {
    if (proto === null) return false
    // 找到对象的原型链包含的原型 则证明对象是类的一个实例
    if (proto === prototype) return true
    // 逐级向上查找即可
    proto = Reflect.getPrototypeOf(proto)
  }
}

console.log(instanceOf([], Array))
console.log(instanceOf({}, Array))
