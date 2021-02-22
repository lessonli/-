/*
* Array.prototype.entries() 返回一个新的数组 Array Iterator 对象, 改对象包含数组中每个索引的键值对
* 参数
* 语法： arr.entries()
* 返回值： 一个新的 Array 迭代器对象。Array Iterator是对象，它的原型（__proto__:Array Iterator）上有一个next方法，可用用于遍历迭代器取得原数组的[key,value]。
* */


let arr = [1, 2, 3, 4, 5];
// console.log(arr.entries().next())
let  demo = arr.entries() // 返回的是一个具有iterator 的对象 具有next 方法
console.log(demo.next()); // => { value: [0, 1], done: false}
console.log(demo.next()); // => { value: [1, 2], done: false}
console.log(demo.next()); // => { value: [2, 3], done: false}
console.log(demo.next()); // => { value: [3, 4], done: false}
console.log(demo.next()); // => { value: [4, 5], done: false}
console.log(demo.next()); // => { value: undefined, done: true} 结束  变为true 
// console.log(demo)
