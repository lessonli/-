/*
*  Array.prototype.copyWithin（）
*   参数
*     + target 0 复制到的位置
*     + start 开始复制的起始位置
*     + end  结束复制的位置
*   返回值
*     改变后的数组
*
* */

let arr = [1, 2, 3, 4, 5, 6, 7];
let a = arr.copyWithin(0,1,4)
console.log(a === arr) // true
