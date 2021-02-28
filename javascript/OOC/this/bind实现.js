
/* 预先 处理思想 【柯理化函数】  bind */
// 我们绑定方法的时候(不论是事件绑定还是 定时器) 先绑定一个匿名函数 事件触发或者达到时间 先把匿名函数执行 在执行匿名函数的时候 再把我们需要执行的函数执行 此时就可以基于  call 和apply 改变this 和参数信息了
// setTimeout(function () {
//   fn1.call(obj1, 20, 40)
// }, 1000)

const obj = { naem: 'liSen' }

function fn (x, y) {
  console.log(this, x, y)
  return x + y
}

console.log(fn.bind(obj, 1, 2)())

//= =========================================
Function.prototype.bind = function bind (context, ...params) {
  const that = this
  return function proxy (...args) {
    params = params.concat(args)
    return that.call(context, ...params)
  }
}
