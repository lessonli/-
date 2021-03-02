// function Modal(x, y) {
//   this.x = x;
//   this.y = y;
// }
//
// Modal.prototype.z = 10;
// Modal.prototype.getX = function () {
//   console.log(this.x);
// }
// Modal.prototype.getY = function () {
//   console.log(this.y);
// }
// Modal.n = 200;
// Modal.setNumber = function (n) {
//   this.n = n;
// };
// let m = new Model(10, 20);

/* 基于 es6 重构 */

class Modal {
  constructor (x, y) {
    this.x = x
    this.y = y
    this.n = 200 // 旧的写法
  }

  /* 原型上的方法, 公共属性不可以这么处理 */
  getX () {}
  getY () {}

  // getZ: ()=>{}  // 这种写法只在 react 中可以使用 经过 babel-preset-react 处理 原生不支持
  // n = 100 // es7 class 添加私有属性 node 暂时不支持
  /* mm = function () {

  } */ // 这种方式都是私有的

  /* 将Modal当做普通属性和方法 静态方法和属性 可以Modal.n Modal.setNumber 取值 */
  static n = 400
  static setNumber () {}

  // static setA: function (){}  // 不支持这种写法
  // static setA = function () {} // 这种是支持的
}
/* 公共属性只能这样写 */
Modal.prototype.z = 200
const m = new Modal(1, 3)
console.log(m)
// console.log()

// extend
