function Foo() {
  getName = function () {
    console.log(1);
  };
  console.log(this)
  return this;
}

// 重写 getName
Foo.getName = function () {
  console.log(2);
};
// 原型方法
Foo.prototype.getName = function () {
  console.log(3);
};
// 全局方法
var getName = function () {
  console.log(4);
};

function getName() {
  console.log(5);
}

Foo.getName(); // 2  原因 被重写掉了
getName(); //4

/* 下面的暂时不理解 */
Foo().getName(); // 1
getName(); // 1
new Foo.getName(); //2
new Foo().getName(); // 3
new new Foo().getName(); // 3