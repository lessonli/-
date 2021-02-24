/*
*   Array.prototype.sort方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的
*
*   语法：
*     + arr.sort([compareFunction])
*   参数
*     + compareFunction(firstEl, secondEl)
*
*   返回值
*     + 排序后的数组。请注意，数组已原地排序，并且不进行复制。
*
*   注意：
*     + 如果没有传入 compareFunction, 那么元素会按照unicode 字符顺序进行排序
*
* */

/* 升序*/
let res = [0, 2, 4, 5, 1].sort((a, b) => a - b)

// 降序
let res1 = [0, 2, 4, 5, 1].sort((a, b) => b - a)

console.log(res1)
