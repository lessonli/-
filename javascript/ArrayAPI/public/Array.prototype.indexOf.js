/*
*   Array.prototype.indexOf() 方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
*   + 语法
*     arr.indexOf(searchElement[, fromIndex])
*   + 参数
*     + searchElement 要查找的元素
*     + fromIndex 可选 开始查找的位置
* */
var array = [2, 5, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
