/*
*扩展 类 原型方法
* */

let arr = [1, 3, 4, 5, 2, 34, 5, 45, 6, 46, 743, 2, 342, 112, 3, 54, 345, 345656, 4, 3, 2, 32, 56, 1];

/* 先 去重 在 排序*/

let result = arr.sort((a, b) => a - b);
// console.log(result, arr); // 原始数组 改变 返回结果 也是 修改后的 新数组

function unique(arr) {
  return  [...new Set(arr)];
}
/* 扩展 原型 对象啊*/
Array.prototype.unique = function unique() {
//   this 指向当前类的实例
  return [...new Set(this)]
}
// console.log(unique(result));
/* 先去重再排序*/
let demo = arr.unique().sort(((a, b) => a-b));
console.log(demo)