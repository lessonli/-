
// 浅拷贝
const s1 = Symbol('s1')
const obj = {
  name: 1,
  age: 33,
  s1: 'demo'
}

// 1 。 循环克隆

/* let obj2 = {}
let keys = [
  ...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)
]
keys.forEach((item, index) => {
  console.log(item, index)
  obj2[item] = obj[item]
}) */

// 2. 基于展开运算符
const obj2 = { ...obj }

// 3 基于 Object.assign
// Object.assign(obj2, obj) // 把 obj 中的 键值对 合并到 obj2
Object.assign({}, obj)

// 数组 1循环 克隆 map reduce 。。。。
const arr = [10, 20, [30, 40]]
const arr2 = arr.map(item => item)
// 2. 展开运算符
// 3. slice concat

// 自己实现
function getOwnProperty (obj) {
  if (obj == null) return []
  return [
    ...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)
  ]
}

/**
 *
 * @param obj 数组 和对象
 */
function shadowClone (obj) {
  // 基本数据类型 直接返回 或者使用 之前封装的 totyoe
  if ((/^(boolean|string|number|undefined|symbol)$/i).test(typeof obj)) {
    return obj
  }
  if (/^function$/.test(typeof obb)) {
  //   返回一个不同的函数 但是最后执行的效果和原始函数一致 实现克隆的效果
    return function proxy () {
      obj()
    }
  }
  // 只处理 数组和对象
  const keys = getOwnProperty(obj)
  // let clone = new obj.constructor
  let clone = {}
  Array.isArray(obj) ? clone = [] : null
  keys.forEach((key) => {
    clone[key] = obj[key]
  })
  return clone
}
