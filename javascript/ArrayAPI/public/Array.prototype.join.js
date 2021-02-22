/*
*   Array.prototype.join 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
*   + 语法：arr.join([separator])
*   + 参数
*     + separator 可选 默认值 ','
*   + 返回值
*     + 返回一个以 该分隔符 连接的字符串 如果数组为空 则返回 一个 空数组
*
* */
var a = ['Wind', 'Rain', 'Fire'];
var myVar1 = a.join();      // myVar1的值变为"Wind,Rain,Fire"
var myVar2 = a.join(', ');  // myVar2的值变为"Wind, Rain, Fire"
var myVar3 = a.join(' + '); // myVar3的值变为"Wind + Rain + Fire"
var myVar4 = a.join('');    // myVar4的值变为"WindRainFire"
