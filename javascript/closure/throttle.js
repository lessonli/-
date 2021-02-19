/*
* 节流函数： 在一段频繁操作当中 触发多次, 触发的频率 我们自己来指定
* */

/**
 *
 * @param func 执行的函数
 * @param wait 触发的频率
 * @returns {function(): void} 可被调用执行的函数
 */

function throttle(func, wait = 300) {


  let timer = null, previous = 0;
  return function (...params) {
    let now = new Date(), remaining = wait - (now - previous); // wait - (当前时间 减去 上一次执行的时间) = 还差多久 达到 我们一次触发的频率
    // 两次操作 时间间隔 超过wait
    if (remaining <= 0) {
      func.call(this, ...params);
      previous = now
      clearTimeout(timer)
    } else if (!timer) {
      timer = setTimeout(() => {
        timer = null
        previous = new Date();
        func.call(this, ...params)
      }, remaining)
    }

  }
}


function handle() {
  console.log('ok')
}


window.onscroll = handle
