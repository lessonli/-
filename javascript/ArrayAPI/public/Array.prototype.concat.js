/*
* Array.prototype.concat(), 用于合并两个或多个数组，不会改变原数组, 返回一个新的数组实例
*   参数
*     + 一个或多个数组实例/值
*   返回值
*     + 返回一个合并值后的新的数组实例
* */

let arr1 = [1], arr2 = [2];
let demo = Array.prototype.concat(arr1,arr2, [3,4,5], 2)

console.log(demo)
