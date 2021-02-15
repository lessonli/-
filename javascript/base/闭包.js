/*
 * 闭包：函数运行的一种机制（不是某种代码形式）
 *   + 函数执行会形成一个私有上下文，如果上下文中的某些内容(一般指的是堆内存地址)被上下文以外的一些事物(例如:变量/事件绑定等)所占用，则当前上下文不能被出栈释放「浏览器的垃圾回收机制GC所决定的」 =>“闭包”的机制:形成一个不被释放的上下文
 *     + 保护：保护私有上下文中的“私有变量”和外界互不影响
 *     + 保存：上下文不被释放，那么上下文中的“私有变量”和“值”都会被保存起来，可以供其下级上下文中使用
 *   + 弊端:如果大量使用闭包，会导致栈内存太大，页面渲染变慢，性能受到影响，所以真实项目中需要“合理应用闭包”；某些代码会导致栈溢出或者内存泄漏，这些操作都是需要我们注意的；
 *
 */

/*
// 递归：函数执行中再次调用自己执行
// 下面案例是“死递归”  Uncaught RangeError: Maximum call stack size exceeded “内存溢出”
function fn(x) {
    // console.log(x);
    fn(x + 1);
}
fn(1);
*/

//=====================
// 实现不了：我们要清楚原因
/* var buttons = document.querySelectorAll('button'); //=>NodeList“类数组”集合
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        console.log(`当前点击按钮的索引：${i}`);
    };
} */

// 方案一：基于“闭包”的机制完成 「每一轮循环都产生一个闭包，“存储对应的索引”；点击事件触发，执行对应的函数，让其上级上下文是闭包即可」
/* var buttons = document.querySelectorAll('button');
for (var i = 0; i < buttons.length; i++) {
    // 每一轮循环都会形成一个闭包，存储私有变量i的值（当前循环传递的i的值）
    //   + 自执行函数执行，产生一个上下文EC(A)  私有形参变量i=0/1/2
    //   + EC(A)上下文中创建一个小函数，并且让全局buttons中的某一项占用创建的函数
    (function (i) {
        buttons[i].onclick = function () {
            console.log(`当前点击按钮的索引：${i}`);
        };
    })(i);
} */

/* var buttons = document.querySelectorAll('button');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = (function (i) {
        return function () {
            console.log(`当前点击按钮的索引：${i}`);
        };
    })(i);
} */

/*
// 基于LET这种玩法也是“闭包”方案
let buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        console.log(`当前点击按钮的索引：${i}`);
    };
}
*/

// 方案二：自定义属性 「性能强于闭包」
/*
var buttons = document.querySelectorAll('button');
for (var i = 0; i < buttons.length; i++) {
    // 每一轮循环都给当前按钮(对象)设置一个自定义属性：存储它的索引
    buttons[i].myIndex = i;

    buttons[i].onclick = function () {
        // this -> 当前点击的按钮
        console.log(`当前点击按钮的索引：${this.myIndex}`);
    };
}
*/

// 方案三：事件委托 「比之前的性能提高40%-60%」
// + 不论点击BODY中的谁，都会触发BODY的点击事件
// + ev.target是事件源：具体点击的是谁
document.body.onclick = function (ev) {
  var target = ev.target,
    targetTag = target.tagName;
  // 点击的是BUTTON按钮
  if (targetTag === "BUTTON") {
    var index = target.getAttribute('index');
    console.log(`当前点击按钮的索引：${index}`);
  }
};
let obj = {
  name: 'aaa'
}
[1,2,3].forEach((item,index)=>{
  console.log(this)
},obj);

[1,2,4].forEach(function (item,index) {
    console.log(this)
},obj)