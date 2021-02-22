/*
*  Array.prototype.flatMap() 法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。
*  语法：
*     var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])
*   参数：
*     + callback(item, index, arr)
*     + thisObj
*
*   注意：
*     + node 不支持该方法
* */

let arr = [1, 23, 4, 5];

function fn(item) {
  console.log(item)
  return [item+1]
}

arr.flatMap(fn)
console.log(arr)
