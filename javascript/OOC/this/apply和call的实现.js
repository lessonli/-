// call 实现 思路: 把需要执行的函数放到fn 和需要改变的this 指向obj 关联在一起 obj.xxx = fn 此时我们只需要obj,xxx()  就相当于 把 fn 执行 而且函数中的this 就是 obj

const obj = { name: 'lesson', age: 19 }
// const obj = { name: 'lesson', age: 19, fn: fn }
//
function fn (x, y) {
  console.log(this)
  return x + y
}

// console.log(obj.fn(10, 20)) 如果能够坐蔸这样 那就完成l

// 基础版本
// Function.prototype.call = function call (context, ...params) {
//   //   this-》 fn 需要执行的函数
//   //   context -> obj 需要改变的this
//   // 10 20 需要给函数传递的实参
//   context.temp = this // 产生 关联
//   const result = context.temp(...params)
//   delete context.temp // 用完后删除临时增加的元素
//   return result
// }

//   // + 优化1:  新起的临时变量 可能会冲突 删除后 原来的数据会修改
//   // + 优化2 参数的处理
//   //    + context 不传 或者不传 最后的this 都是window
//   //    + 必须要保证context 都是引用数据类型的值(不论传递的是什么类型)
Function.prototype.call = function (context, ...params) {
  context == null ? context = window : null
  !(/^(object|function)$/).test(typeof context) ? context = Object(context) : null

  const key = Symbol('KEY')
  let result = 'undefined'
  context[key] = this
  result = context[key](...params)
  delete context[key]
  return result
}

const res = fn.call(10, 10, 30)

console.log(res)
