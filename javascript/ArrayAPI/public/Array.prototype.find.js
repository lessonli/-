/*
*  Array.prototype.find() 返回第一个通过测试的元素值, 否者返回undefined
*   语法
*     + arr.find(callback[, thisArg])
*   参数
*     + callback
*         + item
*         + index
*         + arr
*     + thisObj
*   返回值
*     数组中第一个满足所提供测试函数的元素的值，否则返回 undefined。
* */

let inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function findCherries(fruit) {
  return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }
