/*
*  this的几种情况
*   + 事件绑定
*   + 函数执行
*     + 自执行函数
*     + 回调函数
*   + 构造函数
*   + 基于 call/apply/bind 改变函数当中的this
*   + 箭头函数中没有自己的this， 所用到的都是上下文当中的
*
* */
// Function.prototype => call/apply/bind 所有的函数都可以调用者三个方法

const obj = { name: 'liSen', age: 18 }

function fn () {
  console.log(this.name)
}
// fn.call(obj)
// fn 先 基于 __proto__ 找到 Function.prototype.call, 把call 执行的时候 call方法内部实现一些功能， 会把fn 执行， 并且让fn 中的this this 改为第一个实参
fn.call(obj, 10, 20)

fn.call()// 不传/ null  this window/undefined

// apply和 call 只有一个区别, 所有需要传递给函数的实参全部用 '[]'包裹
fn.apply(obj, [10])

/* 需求 求一组数组中的 最大值 */
const arr = [10, 20, 34, 23, 43, 12, 4, 2]
/*
* 先排序 后 取值 */

arr.sort((a, b) => {
  return a - b
})

// arr.sort(function (a, b) {
//   return a - b
// })
// const max = arr[arr.length - 1]
// console.log(max)

/* 假设 法 */
// 假设数组中的第一个为 最大值 , 逐个比较 换位置
/*
let max = arr[0]
for (let i = 1; i < arr.length; i++) {
  const item = arr[i]
  if (item > max) {
    max = item
  }
}
console.log(max)
*/
/* 假设法 换一种 写法 */
/*
const max = arr.reduce((result, item) => {
  return item > result ? item : result
})
console.log(max)
*/
/* Math.max */
console.log(Math.max(...arr)) // 获取一组数据的最大值
console.log(Math.max.apply(null, arr)) // apply 会逐个把数组中的数据传递给 Math.max

/* 最 恶习 的 用字符串拼接 我们想要的表达式 */
const str = `Math.max(${arr})`
// eslint-disable-next-line no-eval
console.log(eval(str))
// 求和

function sum () {
  /* 使 argument 变成 数组 Array.from(argument)  [...argument] */

  // const arr = [...arguments]
  // return arr.reduce((prev, current) => prev + current)
  /* 改变this */
  console.log(arguments, '+11')
  const arr = [].slice.call(arguments)
  console.log(arr, 'de')
  return arr.reduce((prev, current) => prev + current)
}

const arr1 = [1, 2, 3, 4, 5]
const total = sum(...arr1)
console.log(total)

function fn1 (x, y) {
  console.log(this, x, y)
}

// document.onclick = fn
// 事件绑定的时候函是没有执行的 当 触发点击事件的时候 才会执行 this 为body x=》 事件对象 y undefined
const obj1 = {
  name: 'lesson'
}
// setTimeout(fn1, 1000) // this window x=> undefined y=> undefined

/* 我们期望 无论是事件绑定 还是定时器 执行对应的方法 可以改变 方法中的this， 以及给方法传递 实参信息 */
// setTimeout(fn1.bind(obj1, 10, 29), 1000)

/* 预先 处理思想 【柯理化函数】  bind */
// 我们绑定方法的时候(不论是事件绑定还是 定时器) 先绑定一个匿名函数 事件触发或者达到时间 先把匿名函数执行 在执行匿名函数的时候 再把我们需要执行的函数执行 此时就可以基于  call 和apply 改变this 和参数信息了
// setTimeout(function () {
//   fn1.call(obj1, 20, 40)
// }, 1000)

//= ========================
// 箭头函数没有自己的this
// const obj3 = {
//   name: 'lesson',
//   age: 18,
//   fun: function () {
//     return function () {
//       console.log(this)
//     }
//   }
// }
// const f = obj3.fun()
// f() // this window
// const obj3 = {
//   name: 'lesson',
//   age: 18,
//   fun: function () {
//     const that = this
//     return function () {
//       that.name = '李森'
//       console.log(this)
//     }
//   }
// }
// const f = obj3.fun()
// f() // this window

const obj3 = {
  name: 'lesson',
  age: 18,
  fun: function () {
    return () => {
      this.name = '李森'
      console.log(this)
    }
  }
}
const f = obj3.fun()
f.call(obj3) // this 箭头函数没有自己的this 就没有 初始化 this 这一项 因此基于 call/ apply 都是无效的
