/*
*  Array.prototype.fill() 填充数组  方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
*  语法
*    + arr.fill(value[, start[, end]])
*   参数
*     + value 填充数组元素的值;
*     + start 可选 起始索引 默认为 0
*     + end   可选 终止索引 默认为 0
*   返回值
*     + 修改后的原数组
*     + 会修改原数组
*
* */

let arr = [3,2];
console.log(arr.fill(4, 1));
console.log(arr.fill({}));

let demo = arr.fill({}) // 需要注意如果fill的参数为引用类型，会导致都执行同一个引用类型
demo[0].name = 'lesson'
console.log(demo)
console.log(arr)
