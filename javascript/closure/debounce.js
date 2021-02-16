/*
* 防抖 在指定的时间以内 只执行一次, 如果在指定的时间内执行了 多次 那么 以最后已至此为准
*
*
* */

/**
 *
 * @param func 最后需要触发的时间
 * @param wait  指定的时间1
 * @param immediate 是否立即执行 是否是第一次 触发 或者最后一次触发
 */
// 主体思路 在当前事件点击 完成后 我们等待 wart 时间 看是否会触发第二次  如果没有触发 第二次 属于 飞频繁操作 我们直接执行 想要 执行的函数 func 如果触发了第二次 则 以前的不算 从当前开始等待
// function debounce(func, wait, immediate = false) {
//   let timer = null
//   // 返回一个匿名函数
//   return function (...params) {
//     // let now = immediate && timer == null; // 第一次执行
//     let now = immediate && !timer; // 第一次执行
//     /*this 当前元素*/
//     // 每次点击 都把之前 设置的定制器清除掉
//     clearTimeout(timer)
//     //重新设置定制器
//     timer = setTimeout(() => {
//       timer = null // 回归到初始状态
//       !immediate ? func.call(this, ...params): null // 绑定事件的初始this
//     }, wait)
//     //   如果 当前是 立即执行
//     now ? func.call(this, ...params) : null
//   }
// }
//

function handle() {
  setTimeout(() => {
    console.log('ok')
  }, 1000)
}

// submit.onclick = debounce(handle, 500, true)


const debounce = (func, wait, immedit = false) => {
  let timer = null
  return function (...params) {
    clearTimeout(timer) // 每次进来都清除一下定制器// 保证 是最后一次执行
    let now = immedit && !timer  // 表示第一次执行
    timer = setTimeout(() => {
      timer = null
      /* 当函数是 立即执行的时候 就是点击执行 点击结束 不执行*/
      !immedit ? func.call(this, ...params) : null
    }, wait)

    now ? func.call(this, ...params) : null
  }
}


function debounce(func, wait, immediate = false) {
  let timer = null

  if(timer) clearTimeout(timer)
  return function (...params) {
    let now = immediate && !timer
    timer = setTimeout(() => {
      timer = null
      // 如果是不是立即执行
      !immediate ? func.call(this, ...params) : null
    }, wait)
    !now ? func.call(this, ...params) : null
  }

}


