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
