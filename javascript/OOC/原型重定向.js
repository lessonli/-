
//  原型 重定向
/*
*     + 1. 内酯类的原型 无法重定向(不报错, 但是 也不成功) Object Array ...
*     + 2. 在大量的向原型扩充方法的时候, 重定向的操作 一方面可以简化代码的编写，统一管理,
* 弊端
*     + 1. 重定向之后 丢失 自带的constructor
*     + 2. 丢失 之前的原型上的方法（包含constructor）
*
* 解决方案:
*     + 1. 如果之前的原型上没有任何的属性和方法, 则 重定向的原型对象手动设置一个constructor 即可
*     + 2. 如果之前原型上还有其他的属性和方法, 则在重定向之前最好做 ‘新老’原型对象的合并处理
* */

function Fn () {
  /* 两个私有属性 */
  this.x = 100
  this.y = 200
}
/* 会造成 代码的 冗余, 不好统一 管理 */
Fn.prototype.read = function () {}
Fn.prototype.write = function () {}
// 。。。。 大量代码
Fn.prototype.jump = function () {}

/* 利用 原型重定向的方式来写 */

/* Fn.prototype = {
  /!* 什么都没有的情况*!/
  constructor: Fn,

} */

/* 原来的constructor 也会携带 */
Fn.prototype = Object.assign(Fn.prototype, {
  say () {},
  song () {},
  eat () {},
  jump () {}

})
