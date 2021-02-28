/*
* 关于数组的方法 经常忘记 这里做一个复习
* */

/* 实例属性
*   + Array.prototype.length // 实例的属性 长度
*   + Array.prototype[@@unscopables] // Symbol 属性 @@unscopable 包含了所有 ES2015 (ES6) 中新定义的、且并未被更早的 ECMAScript 标准收纳的属性名。这些属性被排除在由 with 语句绑定的环境中。
* */

// 1. length
let arr = [1, 2, 3, 4];
console.log(arr.length); //=> 4

//2. Array.prototype[@@unscopables]
console.log(arr[Symbol.unscopables]); //=>{ entries: true, fill: true, find: true, findIndex: true,flat: true, flatMap: true, includes: true, keys: true, values: true }

/* 方法 */

// 1. Array.from()  可以将一个类数组/ 数组  返回一个数组实例
/*
*  参数
*   + arrayLike     数组/ 维数组的可迭代对象
*   + [mapFn]       // 每个元素都会执行该函数
*   + [thisArg]     // 执行回调 mapFn 的 this对象
* */
let obj = {name: 'lesson'}

function mapFn(item, index) {
  console.log(item, index)
  if(item > 2) {
    return item+1
  }
  return  this.name = 'lisen'
}

let arr1 = Array.from(arr, mapFn, obj);

console.log(arr1, 'arr1', obj);
