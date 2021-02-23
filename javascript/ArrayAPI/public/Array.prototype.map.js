/*
*  Array.prototype.map 创建一个数组 其结果是该数组中的每个元素是条用一次提供的函数后的返回值
*   + 语法
*    arr.map(function(x){return x+1}, obj)
*   + 参数
*     + callback(item,index, arr)
*     + thisObj
*   返回值
*     + 每一个item 调用测试函数之后的返回值
*   注意： 箭头函数绑定的上下文的this 不能传入 自己的this
* */

let arr = [1, 34, 5, 6];
function sqrt (item) {
  return item**2
}

console.log(arr.map(sqrt));
let kvArray = [{key: 1, value: 10},
  {key: 2, value: 20},
  {key: 3, value: 30}];
function formatMap(item) {
  let obj = {};
   obj[item.key] = item.value;
   return obj
}

console.log(kvArray.map(formatMap));

/*
* 下面代码展示了如何去遍历用 querySelectorAll 得到的动态对象集合。在这里，我们获得了文档里所有选中的选项，并将其打印
* */
// var elems = document.querySelectorAll('input');
// var values = Array.prototype.map.call(elems, function(obj) {
//   console.log(obj)
//   return obj.value;
// });
// console.log(values);


/* 关于parseInt 的坑*/
let arr1 = [1, 34, 5, 6];
console.log(arr1.map(parseInt)); // [1, NaN, NaN, NaN];
/*
parseInt(string, radix)   解析一个字符串并返回指定基数的十进制整数， radix 是2-36之间的整数，表示被解析字符串的基数。
*  item index 1, 0
*  item index 34,1
*  item index 5, 2
*  item index 6, 3
*
*
* */

