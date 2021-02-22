/*
* Array.prototype.every()  方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
* 语法
*   + arr.every(callback(element[, index[, array]])[, thisArg])
* 参数
*   + callback(item, [index], [arr])
*   + thisArg
*     执行callback时的this 对象
* 返回值 // 全真 返回真  有假即假
*   如果回调函数的每一次返回都为 truthy 值，返回 true ，否则返回 false。
* */


function isBigEnough(element, index, array) {
  console.log(this) // obj
  return element >= 10;
}
let obj = {name: 'lesson'};
[12, 5, 8, 130, 44].every(isBigEnough, obj);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true

[12, 5, 8, 130, 44].every(x => x >= 10); // false
[12, 54, 18, 130, 44].every(x => x >= 10); // true
