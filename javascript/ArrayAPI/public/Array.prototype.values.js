/*
*   values() 方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值
*   + 语法： arr.value()
*
*   + 返回值
*       一个新的 Array 迭代器对象。
*
* */

var arr = ['a', 'b', 'c', 'd', 'e'];
var iterator = arr.values();
for (let letter of iterator) {
  console.log(letter);
} //"a" "b" "c" "d"
for (let letter of iterator) {
  console.log(letter);
} // undefined
