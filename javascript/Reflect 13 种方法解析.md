```js

//Reflect 13 种 Symbol 11 种

// 反射 Object.defineProperty
// 里面有部分对象的方法 放到 Reflect 功能基本一致

const obj = {a:1, [Symbol()]: 1}
// 1) get set
// 一般来说 可以代理的方法 Reflect 都可以实现
Reflect.set(obj, 'name', 'lesson')
console.log(Reflect.get(obj, 'name')) // lesson

// 2) has
console.log(Reflect.has(obj, 'name')) // true
//3) defineproperty
Object.freeze(obj) // 冻结  在使用 Object.defineProperty 会报错 不能重复定义某个值 不支持重新定义
// console.log(Reflect.defineProperty()) // 等同于 Object.defineProperty 区别 定义对象 是否成功会有一个返回值 true 修改成功
// 4）  getOwnPropertyDescriptor

// Object.getOwnPropertyDescriptor() //获取 对象的 属性描述
// console.log(Reflect.getOwnPropertyDescriptor(obj,"a")) // 获取对象的属性描述符{ value: 1,writable: false,enumerable: true,configurable: false }
// console.log(Object.getOwnPropertyDescriptor(obj,"a")) // 获取对象的属性描述符{ value: 1,writable: false,enumerable: true,configurable: false }

// 5)getOwnPropertyNames getOwnPropertySymbols ownKeys

console.log(Object.getOwnPropertyNames(obj))  //Reflect.getOwnPropertyNames [ 'a', 'name' ] // 获取 对象私有的属性 不包含Symbol

console.log(Object.getOwnPropertySymbols(obj)) // Reflect.getOwnPropertySymbols [ Symbol() ] // 获取 对象 的 symbol 属性

console.log(Reflect.ownKeys(obj)) // 获取对象的属性 包含 Symbol 属于对以上两个方法的集合

// 6
// console.log(Reflect.setPrototypeOf()) 设置 原型链 obj.__proto__
// console.log(Reflect.getPrototypeOf()) 读取原型链

// 7 apply
//面试题  apply bind call 区别
// apply 支持多个参数传参 call 不行 bind 不执行
console.log(Reflect.apply(targetFn, paramsArr)) // 这样就会采用原型上的apply 方法

// 8 constructor
// Reflect.construct( ) 等同于 new  一个实例

// 9
// Reflect.deleteProperty() // 返回是否删除成功、

//10 preventExtensions isExtensible
let obj22  = {}
// Reflect.preventExtensions()  阻止扩展
obj22.a =333
console.log(obj22); // {}

// Reflect.isExtensible()  是否可扩展 返回 true 或 false


```