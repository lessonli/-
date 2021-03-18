// 检测数据类型的方法封装
(function () {
  var class2type = {}
  var toString = class2type.toString;

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
    // 2.判断obj为原始值类型直接走typeof obj简单方便
    // 3.obj 为object 或 function类型时走class2type.toString.call(obj) 检测数据类型，
    // 使用Object.prototype.toString.call(obj)检测数据类型时返回值都是“[object ?]”
    // 4.把[object Number]当做属性值去classtype中出对应的值返回 “number”,找不到则返回“object”
    return typeof obj === 'object' || typeof obj === 'function'
      ? class2type[toString.call(obj)] || 'object'
      : typeof obj
  }
  window.toType = toType
})()

// 获取所有的私有属性，包含Symbol私有属性
function getOwnPropertys (obj) {
  if (obj == null) return []
  return [
    ...Object.keys(obj),
    ...Object.getOwnPropertySymbols(obj)
  ]
};

// 浅克隆
function shallowClone (obj) {
  // 处理其它类型的值克隆
  // eslint-disable-next-line no-undef
  const type = toType(obj)
  if (/^(number|string|boolean|null|undefiend|symbol|bigint)$/.test(type)) return obj
  if (/^function$/.test(type)) {
    // 返回一个不同的函数，但是最后执行的效果和原始函数一致
    return function proxy () {
      return obj()
    }
  }
  if (/^(regexp|date)$/.test(type)) return new obj.constructor(obj)
  if (/^error$/.test(type)) return new obj.constructor(obj.message)
  // ...
  // 只处理数组(最后返回的是数组)和对象(普通对象/类数组对象等->最后返回的都是普通对象)
  const keys = getOwnPropertys(obj)
  let clone = {}
  Array.isArray(obj) ? clone = [] : null
  keys.forEach(key => {
    clone[key] = obj[key]
  })
  return clone
}

// 深克隆
function deepClone (obj, cache = new Set()) {
  // 只有数组和对象我们再处理深克隆，其余的情况直接按照浅克隆处理即可
  // eslint-disable-next-line no-undef
  const type = toType(obj)
  if (!/^(array|object)$/.test(type)) return shallowClone(obj)

  // 避免自己套用自己导致的无限递归 会造成溢栈
  // 避免 obj.self = obj 的处理
  if (cache.has(obj)) return shallowClone(obj)
  cache.add(obj)

  const keys = getOwnPropertys(obj)
  let clone = {}
  type === 'array' ? clone = [] : null
  keys.forEach(key => {
    // 数组的话 key 是下标 对象的话 key 就是属性
    clone[key] = deepClone(obj[key], cache)
  })
  return clone
}

const obj1 = {
  a: 100,
  b: [10, 20, 30],
  c: {
    x: 10
  },
  d: /^\d+$/
}
obj1.self = obj1

const arr1 = [10, [100, 200], {
  x: 10,
  y: 20
}]

const obj2 = deepClone(obj1)
const arr2 = deepClone(arr1)

// 基于JSON的方法实现深克隆，存在的问题：「因为JSON.stringify变为字符串，很多类型是不支持的」
//   + 正则/Math对象会被处理为 空对象
//   + 具备函数/Symbol/undefined属性值的属性 直接被干掉了
//   + BigInt还处理不了，会抱错 Uncaught TypeError: Do not know how to serialize a BigInt
//   + 日期对象最后是字符串
//   + ...
// let obj2 = JSON.parse(JSON.stringify(obj1));
// console.log(obj2);
//= =======================
/* let obj1 = {
    name: "珠峰培训",
    course: {
        c1: '数学',
        c2: '语文'
    }
};
let arr1 = [10, 20, [30, 40]];

// 深克隆办法1：JSON.stringify / JSON.parse
// + 基于JSON.stringify，把原始的对象（或者数组）变为一个字符串
// + 再基于JSON.parse，把字符串转换为对象：此时对象对应每个级别的堆内存，都是全新开辟的
let obj2 = JSON.parse(JSON.stringify(obj1));
let arr2 = JSON.parse(JSON.stringify(arr1));

console.log(obj2 === obj1);
console.log(obj2.course === obj1.course);

console.log(arr2 === arr1);
console.log(arr2[2] === arr1[2]); */

// --------------下面的方式都是浅克隆
// 不是克隆，这只是让obj2/obj1公用同一个堆内存，所谓的克隆最起码是赋值一份一模一样的，是一个全新的堆内存
// let obj2 = obj1;

// 克隆1：循环遍历  「浅克隆」
/* let obj2 = {},
    keys = [
        ...Object.keys(obj1),
        ...Object.getOwnPropertySymbols(obj1)
    ];
keys.forEach(key => {
    obj2[key] = obj1[key];
}); */

// 克隆2：基于展开运算符 「浅克隆」
/* let obj2 = {
    ...obj1
}; */

// 克隆3：基于Object.assign 「浅克隆」
/* // Object.assign([obj1],[obj2]); 返回的结果依然是obj1堆内存，只不过是把obj2中的键值对和原始obj1的键值对合并在一起了
// let obj2 = Object.assign(obj1, {}); //-> obj2===obj1
// let obj2 = Object.assign({}, obj1); */

// console.log(obj2 === obj1);
// console.log(obj2.course === obj2.course);

// 克隆1：循环 forEach/map... 「浅克隆」
/* let arr2 = [];
// arr1.forEach((item, index) => {
//     arr2[index] = itemshe
// });
arr2 = arr1.map(item => item); */

// 克隆2：基于展开运算符或者Object.assign都可以实现 「浅克隆」
// 克隆3：基于slice/concat...这些办法也可以实现 「浅克隆」
// let arr2 = arr1.slice();

// console.log(arr2 === arr1);
// console.log(arr2[2] === arr1[2]);
