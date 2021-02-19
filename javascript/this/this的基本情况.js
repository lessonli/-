/*
* this: 函数的执行主体 和执行上下文不是一个概念
*   + 全局的this 是 window  主要分析函数中的this
*   + this 是谁 和 函数在哪执行, 以及 在哪定义没有必然的联系
*
* 按照一下规律确定执行主体
*   1. 给当前元素的某个事件行为绑定方法, 事件触发 执行对应的方法, 方法中的this 就是 当前元素本身(ie 6-8 通过 attachEvent 实现的DOM 事件绑定, 其中的 this 不是操作的元素 而是window )
*   2. 函数执行 首先看函数名前是否有 "点", "点"前面是谁 this 就是谁, 没有点 就指向 window （在js 严格模式中 没有 “点"  方法中的this 就是 undefined）
*     + 自执行函数 中的this 一般是 window (undefined)
*     + 回调函数中的this 一般也是 window (undefined) 除非特殊处理
*   3. 构造函数中的this 都是当前实例
*   4. 箭头函数没有自己的this 都是上下文的this
*   5. 基于 call/apply/bind 可以强制改变this
*
*
* */

// function fn() {
//   console.log(fn)
// }
//
// let obj = {name: "lesson", fn: fn};
//
// fn() // window
// obj.fn() // obj
//

/* 第一题*/
/*
var num = 10;
var obj = {
  num: 20
};
obj.fn = (function (num) {
  this.num = num * 3; // 自执行函数指向 window  num 60   第二次  obj 30
  num++;  // 形参赋值 ++ 21
  return function (n) { // 形参 5  形参 10
    this.num += n; // 函数执行 this window num 60+5
    num++; // 作用域链 21++    num 22   // 23
    console.log(num);
  }
})(obj.num);
var fn = obj.fn;
fn(5); // 函数执行  this window
obj.fn(10);  // this => window
console.log(num, obj.num);*/


/*第二题*/
// var fullName = 'language';
// var obj = {
//   fullName: 'javascript',
//   prop: {
//     getFullName: function () {
//       return this.fullName;
//     }
//   }
// };
// console.log(obj.prop.getFullName());  // this   obj.props
// var test = obj.prop.getFullName;
// console.log(test());  // this window

/*第三题*/
// var name = 'window';
// var Tom = {
//   name: "Tom",
//   show: function () {
//     console.log(this.name);
//   },
//   wait: function () {
//     var fun = this.show;
//     fun(); // this  window
//   }
// };
// Tom.wait(); // this Tom