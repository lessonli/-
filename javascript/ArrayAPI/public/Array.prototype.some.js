/*
*  Array.prototype.some() 检测至少有一个函数通过了 函数测试, 返回true, 否则返回false
*
*   语法：
*     + arr.some(callback(element[, index[, array]])[, thisArg])
*   参数：
*     + callback(item, index, arr)
*     + thisObj
*   返回值
*     + 数组中有至少一个元素通过回调函数的测试就会返回true；所有元素都没有通过回调函数的测试返回值才会为false。
*   注意：
*     + some() 遍历的元素的范围在第一次调用 callback. 前就已经确定了。在调用 some() 后被添加到数组中的值不会被 callback 访问到。如果数组中存在且还未被访问到的元素被 callback 改变了，则其传递给 callback 的值是 some() 访问到它那一刻的值。已经被删除的元素不会被访问到。
* */

// 1. 检测 所有数组的大小
/**
 *
 * @param item
 * @param idx
 * @param arr
 * @return {boolean}
 */
function bigItem(item, idx, arr) {
  return item > 10
}

[12, 5, 8, 130, 44].every(bigItem)
