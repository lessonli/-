/*
*  Array.prototype.filter() //  方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
*  语法：
*   + var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
*   参数
*     callback(item, index,arr)
*       + item 数组中的每一项
*       + index 数组该项的下标 可选
*       + arr 当前数组
*     thisObj: 执行callback 时的this 对象 可选
*   返回值
*     + 返回一个新的通过测试的数组，若没有返回一个空数组
* */

function isBigEnough(element) {
  return element >= 10;
}
let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
