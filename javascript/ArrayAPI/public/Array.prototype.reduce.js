/*
*   Array.prototype.reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
*   语法
*     + arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
*   参数
*     + callback(prev, current, index, arr)
*     + initialValue 作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。
*   返回值
*     + 函数累计处理的结果
*
* */

// 1. 数组求和
let arr1 = [0, 1, 2, 3];
let result = arr1.reduce((prev, current) => prev + current)
console.log(result)

// 2 累加 对象数组里的值

let arr2 = [{x: 1}, {x: 2}, {x: 3}];

let result2 = arr2.reduce((prev, current) => {
  console.log(prev, current)
  return prev + current.x
}, 0)
console.log(result2)

//3. 二维数组 转化为 一维数组
/*
*   借助 数组对象求和的实现方式, 设置 initialArr, 取代第一次的prev
*   prev current  return [], [0,1]    [0,1]
*   prev current  return [0,1], [2,3] [0,1,2,3]
*   prev current  return [2,3], [4,5] [0,1,2,3,4,5]
* */
let arr3 = [[0, 1], [2, 3], [4, 5]];
let result3 = arr3.reduce((prev, current) => {
  return prev.concat(current)
}, [])
console.log(result3)


// 4, 计算数组中每个元素出现的次数
let arr4 = [1, 2, 3, 3, 4, 4, 4, 4, 5, 1, 12, 2, 2, 1];

let result4 = arr4.reduce((prev, current) => {
  if (current in prev) {
    prev[current]++
  } else {
    prev[current] = 1
  }
  return prev
}, {})
console.log(result4)

// 5 按属性 对object 分类
// 年龄20 的一类 21 的一类
let arr5 = [
  {name: 'Alice', age: 21},
  {name: 'Max', age: 20},
  {name: 'Jane', age: 20}
];

// function groupBy(arr, category) {
//   arr.reduce((result, current)=>{
//     let key = current[category];
//     if(!result[key]) {
//       result[key] = [];
//     }
//     result[key].push(category)
//     console.log(result)
//     return  result
//   }, {})
// }
/*TODO: to understand*/
/* 暂时没看懂 再研究*/
function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

console.log(groupBy(arr5, 'age'));
