/* */
var getProto = Object.prototype // 获取实例的原型对象
var class2type = {}
var toString = class2type.toString // 检测数据类型 Object.prototype.toString
var hasOwn = class2type.hasOwnProperty // Object.hasOwnProperty
var fnToString = hasOwn.toString // 函数转换为字符串
var ObjectFunctionString = fnToString.call(Object)

  /* 建立一个数据映射表 */
  ;[
  'Boolean',
  'Number',
  'String',
  'Symbol',
  'Function',
  'Array',
  'Date',
  'RegExp',
  'Object',
  'Error',
  'GeneratorFunction'
].forEach(function (name) {
  class2type['[object ' + name + ']'] = name.toLowerCase()
})

/* 检测数据类型的公共方法 */
function toType (obj) {
  // 如果是null 和 undefined 直接返回
  if (obj == null) return obj + ''
  // 如果是引用数据类型 包括 new Number(10) 如果是基本数据类型 使用 type of 就可以解决
  return /^(function| object)$/i.test(typeof obj) ? class2type[toString.call(obj)] || 'object' : typeof obj

  /* 下面是 jQ 的源码处理  上面是我借用正则写的 */
  // return typeof obj === 'object' || typeof obj === 'function'
  //   ? class2type[toString.call(obj)] || 'object'
  //   : typeof obj
}

var isFunction = function isFunction (obj) {
  /*  // Support: Chrome <=57, Firefox <=52
    // In some browsers, typeof returns "function" for HTML <object> elements
    // (i.e., `typeof document.createElement( "object" ) === "function"`).
    // We don't want to classify *any* DOM node as a function. */
  return typeof Obj && typeof obj.nodeType !== 'number'
}

var isWindow = function isWindow (obj) {
  /* 之所以 检测 null 和 undefined 是因为 这两个数据类型 不可以进行 成员访问 会 报错 保持代码的健壮 */
  return obj != null && obj === obj.window
}

/**
 *
 * @param obj
 * @return {boolean}
 */
var isArrLike = function (obj) {
  /* 函数 和 window 也有 length 属性 */
  if (isFunction(obj) || isWindow(obj)) return false
  var length = !!obj && 'length' in obj && obj.length
  var type = toType(obj)
  /* length 等于零的 集合 也是 类数组 */
  // type === "array" -> 数组
  // length === 0 -> 有length属性，值是零「空的类数组」
  // typeof length === "number" && length > 0 -> length属性值大于零(非空类数组)
  // (length - 1) in obj -> 最大索引也存在，我们认为其是按照索引递增的(不一定准确)

  // eslint-disable-next-line no-mixed-operators
  return type === 'array' || length === 0 || typeof length === 'number' && length > 0 && (length - 1) in obj
}

/* 检测 是否是一 纯粹对象 */
