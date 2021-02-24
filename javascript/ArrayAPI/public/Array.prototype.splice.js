/*
*   Array.prototype.splice 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
*
*   语法
*     + array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
*   参数
*     + start 指定修改的起始位置
*     + deleteCount 可选 表示要移除的数组元素个数
*     + 需要添加的元素 [] 可选
*
*   返回值
*     + 被删除数组的元素
*
*   注意: 会改变原数组
* */

let arr = [0, 1, 2, 3, 4, 5, 6, 7]

console.log(arr.splice(0, 1));
console.log(arr)
