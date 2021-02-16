// var a = 9;
// function fn() {
//   a = 0;
//   return function (b) {
//     return b + a++;
//   }
// }
// var f = fn();
// console.log(f(5)); // 5 + 0++ 5  1
// console.log(fn()(5));//  5 + 0++ 5 1
// console.log(f(5));// 5 + 1 ++ 6 2
// console.log(a); // 2


// var test = (function (i) {
//   return function () {
//     alert(i *= 2);
//   }
// })(2);
//
// test(5);

// var x = 4;
// function func() {
//   return function(y) {
//     console.log(y + (--x));
//   }
// }
// var f = func(5); //
// f(6); // 6 + --4  9  3
// func(7)(8); // 8 + --3 10
// f(9); //    9 + --2 10
// console.log(x); //1

// var x = 5,
//   y = 6;
// function func() {
//   x += y;
//   func = function (y) {
//     console.log(y + (--x));
//   };
//   console.log(x, y);
// }
// func(4); // 修改指针 同时指向内部的函数  x = 5+6   x 11 y 6
// func(3); // 3 + --11 13   x 11, y 3
// console.log(x, y); // x 10 y 6

// function fun(n, o) {
//   console.log(o);
//   return {
//     fun: function (m) {
//       return fun(m, n);
//     }
//   };
// }
// // fun(0)//=>  undefined  另fun 指向内部的fun n:0
// var c = fun(0).fun(1); //=> 返回fun的 返回值
// c.fun(2);
// c.fun(3);

// var b = 10;
// (function b() {
//   b = 20;
//   console.log(b);
// })();
// console.log(b);

// 改造一下 让其输出 20 10
// var b = 10;
// (function b(b) {
//   b = 20;
//   console.log(b);
// })();
// console.log(b);

/*
    在函数式编程当中有一个很重要的概念就是函数组合， 实际上就是把处理数据的函数像管道一样连接起来， 然后让数据穿过管道得到最终的结果。 例如：
    const add1 = (x) => x + 1;
    const mul3 = (x) => x * 3;
    const div2 = (x) => x / 2;
    div2(mul3(add1(add1(0)))); //=>3
​
    而这样的写法可读性明显太差了，我们可以构建一个compose函数，它接受任意多个函数作为参数（这些函数都只接受一个参数），然后compose返回的也是一个函数，达到以下的效果：
    const operate = compose(div2, mul3, add1, add1)
    operate(0) //=>相当于div2(mul3(add1(add1(0))))
    operate(2) //=>相当于div2(mul3(add1(add1(2))))
​
    简而言之：compose可以把类似于f(g(h(x)))这种写法简化成compose(f, g, h)(x)，请你完成 compose函数的编写
*/

// var num = 10;
// var obj = {
//   num: 20
// };
// obj.fn = (function (num) {
//   // console.log(this.num)
//   this.num = num * 3; // 60
//   num++; //21
//   return function (n) {
//     this.num += n; // 65
//     num++; //22
//     console.log(num);
//   }
// })(obj.num);
// var fn = obj.fn;
// fn(5);
// obj.fn(10);
// console.log(num, obj.num);

// let obj = {
//   fn: (function () {
//     return function () {
//       console.log(this);
//     }
//   })()
// };
// obj.fn();
// let fn = obj.fn;
// fn();

// var fullName = 'language';
// var obj = {
//   fullName: 'javascript',
//   prop: {
//     getFullName: function () {
//       console.log(this)
//       return this.fullName;
//     }
//   }
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName;
// console.log(test());


// 合并参数求和
// let res = fn(1,2)(3);
// console.log(res); //=>6  1+2+3

// function fn() {
//   let outerArgs = Array.from(arguments)
//
//   return function anonymous() {
//     let innerArgs = Array.from(arguments);
//     // let result = eval(outerArgs.concat(innerArgs).join('+'))
//     let result = outerArgs.concat(innerArgs)
//     return result.reduce(function (prev, current) {
//       return prev + current
//     })
//   }
// }
//
// let res = fn(1, 2)(3);
// console.log(res); //=>6  1+2+3

// 重构reduce
// reduce(reduce, callback, initValue)
// let arr = [10, 20, 30, 40];

// Array.prototype.reduce()
// function reduce (arr, callback,initValue){
//   let result = initValue , i = 0;
//   // 没有传递 initValue 这个初始值， 把数组第一项 作为初始值
//   if(typeof result == 'undefined') {
//     result = arr[0]
//     i = 1
//   }
// //  遍历数组中的每一项 每一次遍历都会执行 callback
//   for (; i<arr.length; i++) {
//     // 上次传过来的result
//     result = callback(result,arr[i], i);
//   }
//   return result
// }

// let r = reduce(arr, function (result,item, index) {
//   console.log(result, item, index)
//   return result + item
// })
// console.log(r);

// es6 实现 求和 fn(1,3)(2)

// const fn = (...outerArr)=> {
//   return (...innerArr)=> {
//     return outerArr.concat(innerArr).reduce((res, item)=> {
//       return res + item
//     })
//   }
// }

const fn = (...outerArr) => (...innerArr)=> outerArr.concat(innerArr).reduce((res, item) => res +item)

console.log(fn(1, 2)(3));