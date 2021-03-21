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

function merge (obj1, obj2) {
  const isPlainObj1 = isPlainObject(obj1)
  const isPlainObj2 = isPlainObject(obj2)
  if (!isPlainObj1) return obj2
  if (!isPlainObj2) return obj1
  ;[...Reflect.ownKeys(obj2)].forEach(key => {
    obj1[key] = merge(obj1[key], obj2[key])
  })
  return obj1
}
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
