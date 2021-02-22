/*
*  Array.prototype.includes()//  判断数组是否包含指定的值， 包含true 不包含 false
*  + 语法 arr.includes(valueToFind[, fromIndex])
*  + 参数
*   + valueFind 需要查找的元素值
*   + fromIndex 开始查找的位置
*  + 返回值
*    + 查找到 true  查找不到 false
* */

[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
