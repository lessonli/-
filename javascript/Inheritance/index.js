/*
* js 是一门基于面向对象的语言
* 类=> 封装 继承 和多态
* 封装: 类也是一个函数, 把实现功能的代码进行封装, 以此实现"低耦合高内聚"
* 多态: 重载 重写
*     重写: 子类重写父类的方法(一般针对)于继承
*     重载: 相同的方法 用于参数或返回值的不同 具备了不同的功能 （Java） js不具备严格意义的重载
* 继承
*   子类基于父类的继承
*
* */
/*
* 继承
*   + 目的:继承的目的就是让子类同时具备父类的私有属性和方法
*   + 继承方案
*     + 原型继承 (子类的原型 指向 父类的实例即可 Child.prototype = new Parent) ie禁止操作__proto__
*     + call/apply/bind  在子类中执行父类的方法 parent.call(this) 此时this 执向当前实例 只能实现父类私有的 继承
*     + 寄生组合式继承
*     + es6 extend 继承
* */

function Parent () {
  this.x = 100
}
Parent.prototype.getX = function getX () {
  return this.x
}

function Child () {
  /* 在子类的构造函数当中, 把父类当做普通方法执行 没有父类实例 父类原型上的属性和方法 就和 子类没有关系了
  // Parent() // this -> window
  // Parent.call(this) // 当作为构造函数的时候 会被作为构造函数执行 this 指向实例 c1 次数相当于子类的实例继承了 父类私有的属性，变为子类私有的属性 '拷贝试' */

  /* 第三种继承 寄生组合式继承 */
  parent.call(this)
  this.y = 200
}

Child.prototype.getY = function getY () {
  return this.y
}
/* 第一种继承 原型继承  子类的原型等于父类的实例即可 */
// Child.prototype = new Parent()
/* 第二种继承方式 call/apply/bind 继承 */
/* 第三种继承方式寄生组合式继承  会把父类中私有的编程 子类中共有的 */
/* es6 关键字继承 extend */
const c1 = new Child()
