/*
 * 1. 函数数据类型
 *    + 普通函数
 *    + 箭头函数
 *    + 生成器函数
 *    + 构造函数（类）
 *    + ...
 *
 *    对象数据类型
 *    + 普通对象/数组对象/正则对象/日期对象...
 *    + 实例也是对象数据类型的（排除7种原始值类型）
 *    + prototype/__proto__原型属性值也是对象（排除Function.prototype）
 *    + ...
 *
 * 2. 大部分函数(重点是构造函数)都内置一个prototype(原型「显式原型」)的属性，属性值是一个对象，对象中存储的属性和方法，是供当前类所属实例，调用的“公共”的属性和方法
 *    + 箭头函数是没有prototype属性的
 *    + 在原型对象上有一个内置的属性 constructor（构造器），属性值是当前函数本身
 *
 * 3. 每一个对象都内置一个__proto__(原型链「隐式原型」)的属性，属性值指向自己所属类的原型prototype对象
 *    + Object.prototype这个对象的__proto__值是null，因为Object是所有对象的“基类”
 */

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log('wangwang');
}
Dog.prototype.sayName = function () {
  console.log('my name is ' + this.name);
}
/*
let sanmao = new Dog('三毛');
sanmao.sayName();
sanmao.bark();
*/
/*
function _new(Ctor, ...params) {
    // Ctor->Dog params->['三毛']
    // 1.创建一个实例对象  实例对象.__proto__===所属类.prototype
    let obj = {};
    obj.__proto__ = Ctor.prototype;

    // 2.会把构造函数当做普通函数执行「私有上下文、作用域链、初始THIS、形参赋值...」
    // this->指向创建的实例对象  基于call方法改变即可
    let result = Ctor.call(obj, ...params);

    // 3.观察函数执行的返回值，如果没有返回值或者返回的是基本数据类型值，默认返回的都是实例对象，否则以自己返回的值为主
    if (/^(object|function)$/.test(typeof result)) return result;
    return obj;
}
*/

/*
function _new(Ctor, ...params) {
    let obj = Object.create(Ctor.prototype);
    let result = Ctor.call(obj, ...params);
    if (/^(object|function)$/.test(typeof result)) return result;
    return obj;
}
*/

// 重写的方法只考虑pro传递的是一个对象
Object.create = function (pro) {
  function Proxy() {
  }

  Proxy.prototype = pro;
  return new Proxy;
};

function _new(Ctor) {
  // 获取除第一个实参以外，剩余传递的参数信息，以数组的形式保存到params中
  var params = [].slice.call(arguments, 1);
  // Object.create兼容IE低版本浏览器，需要改写
  var obj = Object.create(Ctor.prototype);
  // 基于apply既可以改变this，也可以把数组中的每一项传递给函数
  var result = Ctor.apply(obj, params);
  if (/^(object|function)$/.test(typeof result)) return result;
  return obj;
}

var sanmao = _new(Dog, '三毛');
sanmao.bark(); //=>"wangwang"
sanmao.sayName(); //=>"my name is 三毛"
console.log(sanmao instanceof Dog); //=>true


// Object.create([pro]):创建一个空对象，把[pro]作为当前创建空对象的__proto__的指向(把[pro]作为当前创建空对象的原型)
//  + [pro]可以传递null或者一个对象
//  + 如果传递的是null，则当前空对象不具备__proto__的属性，也就是不属于任何类的实例
// let pro = {
//     A: 10,
//     B: 20
// };
// console.log(Object.create()); //Uncaught TypeError: Object prototype may only be an Object or null: undefined
// console.log(Object.create(null))