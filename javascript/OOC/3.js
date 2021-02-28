function Fn() {
  let a = 1;
  this.a = a;
}
Fn.prototype.say = function () {
  this.a = 2;
}
Fn.prototype = new Fn;
let f1 = new Fn;
Fn.prototype.b = function () {
  this.a = 3;
};

console.log(f1.a); // 1
console.log(f1.prototype); // undefined  只有函数才具备 prototype (箭头函数以外)
console.log(f1.b); // 函数体 ƒ () {this.a = 3; }
console.log(f1.hasOwnProperty('b')); // false
console.log('b' in f1); // true in 会 检测 原型链
console.log(f1.constructor ===  Fn); // true

// 内置类的原型是无法重定向的