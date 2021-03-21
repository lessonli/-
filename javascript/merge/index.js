// 检测数据类型的方法封装
(function () {
  var getProto = Object.getPrototypeOf
  var class2type = {}
  var toString = class2type.toString
  var hasOwn = class2type.hasOwnProperty
  var fnToString = hasOwn.toString
  var ObjectFunctionString = fnToString.call(Object);

  [
    'Boolean',
    'Number',
    'String',
    'Symbol',
    'Function',
    'Array',
    'Date',
    'RegExp',
    'Object',
    'Error'
  ].forEach(function (name) {
    class2type['[object ' + name + ']'] = name.toLowerCase()
  })

  function toType (obj) {
    if (obj == null) {
      return obj + ''
    }
    return typeof obj === 'object' || typeof obj === 'function'
      ? class2type[toString.call(obj)] || 'object'
      : typeof obj
  }

  function isPlainObject (obj) {
    var proto
    var Ctor
    var type = toType(obj)
    if (!obj || type !== 'object') {
      return false
    }
    proto = getProto(obj)
    if (!proto) {
      return true
    }
    Ctor = hasOwn.call(proto, 'constructor') && proto.constructor
    return typeof Ctor === 'function' && fnToString.call(Ctor) === ObjectFunctionString
  }

  window.toType = toType
  window.isPlainObject = isPlainObject
})()

// 实现两个对象合并的
//  + obj1对象 obj2对象:依次遍历obj2，把obj2中的每一项替换obj1中的每一项
//  + obj1对象 obj2不是对象:不进行任何的处理，返回的还是obj1的值
//  + obj1不是对象 obj2是对象:obj2直接替换obj1
//  + obj1不是对象 obj2也不是对象:obj2直接替换obj1
function merge (obj1, obj2) {
  const isPlain1 = isPlainObject(obj1)
  const isPlain2 = isPlainObject(obj2)
  if (!isPlain1) return obj2
  if (!isPlain2) return obj1;
  // 遍历OBJ2中的每一项，让其替换OBJ1中的每一项
  [
    ...Object.keys(obj2),
    ...Object.getOwnPropertySymbols(obj2)
  ].forEach(key => {
    obj1[key] = merge(obj1[key], obj2[key])
  })
  return obj1
}

//= >>需求：用用户传递的参数配置，覆盖默认的参数配置
// 默认参数配置
const defaults = {
  url: '',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  params: null,
  cache: {}
}

// 用户传递的参数配置
const options = {
  url: '/api/list',
  headers: {
    'x-token': 'xxx'
  },
  params: {
    lx: 0,
    from: 'weixin'
  },
  cache: 10
}

// 基于浅比较进行对象合并的
// console.log(Object.assign(defaults, options));
console.log(merge(defaults, options))
