/*
*   Array.prototype.keys  方法返回一个包含数组中每个索引键的Array Iterator对象。
*   + 语法： arr.keys()
*
*   + 返回值
*       一个新的 Array 迭代器对象。
*
* */
var arr = ["a", , "c"];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
