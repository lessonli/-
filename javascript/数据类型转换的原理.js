/*
 * 把一个对象数据类型的值，转换为数字/字符串
 *   + 首先查找对象的 Symbol.toPrimitive 属性
 *   + 如果不存在这个属性，紧接着调用对象 valueOf 方法获取原始值(基本类型值)
 *   + 如果获取不到原始值，则再调用 toString & Number 转换和字符串或者数字
 *
 * 场景:
 *   + 在“+加号”运算中，如果左右两边出现字符串(或者是部分对象值)则不是数学运算，会变为字符串拼接
 *   + alert([value]) 把值隐式转换为字符串输出
 *   + 模板字符串实现的是字符串拼接，对象会转换为字符串
 *   + 其余的数学运算中，“例如：- / * % ...”，会把对象转换为数字
 *   + “==”比较的时候，也会把对象转换为字符串或者数字
 *   + ...
 */
/* let obj = {
    name: 'lesson'
};
let arr = [10, 20, 30];
let time = new Date();
let num = new Number(10);

/!* console.log(10 + obj); //'10[object Object]'
console.log(10 + num); //num.valueOf()->10  20 *!/

obj[Symbol.toPrimitive] = function (hint) {
    // console.log(hint); //=>default  number  string
    return 100;
};
console.log(`${obj}`); */

/* console.log({} + 10); //'[object Object]10'
let n = {} + 10;
console.log(n); //'[object Object]10'

// {}出现在左侧，把最左边的{}当作一个代码块，是不参与到运算中的
{} + 0 ? console.log('OK') : console.log('NO');
// {}出现在右侧，肯定参与运算
0 + {} ? console.log('OK') : console.log('NO'); */

/* // +value / ++value / value++ 都是转换为数字后再进行处理
let str = '10';
str = +str; //不论str是什么值，最后都一定是要转换为数字的
console.log(str); */