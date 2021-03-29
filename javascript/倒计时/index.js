/*
* 问题：服务器获取时间 是耗费时间的  这个问题是怎么解决的呢？
  尽可能的减少 请求过程中的时间消耗

1. 请求方式 head （只获取请求头信息）这样请求时间最快 ajax 状态为2 获取时间信息 =》 从服务器获得时间
2. 每隔一秒钟计算一次时间差, 此时不能向服务器发请求（服务器会爆）， 而应该在第一次获取服务器时间上减去一秒（页面刷新，重新执行）
* */

const target = new Date('2021/03/29 18:13:00')
let now = new Date()
let timer = null
function queryServerTime (callback) {
  const xhr = new XMLHttpRequest()
  xhr.open('HEAD', './date.json')
  xhr.onreadystatechange = () => {
    // 请求成功 并且 拿到请求头
    if (xhr.status === 200 && xhr.readyState === 2) {
      //   响应头中 有个 Date 时间 服务器时间 表示 JWT 格林尼日时间 我们需要转换为 标准北京时间
      const time = xhr.getResponseHeader('Date')
      // xhr.getAllResponseHeaders() 获取所有的响应头时间
      callback && callback(new Date(time))
    }
  }
  xhr.send(null)
}

queryServerTime(time => {
  // 得到服务器标准时间
  now = time
  //   计算时间差
  computedTime()
  // 每间隔一秒钟 在现有时间上加上一秒
  timer = setInterval(_ => {
    // console.log('now', now)
    now = new Date(now.valueOf() + 1000)
    computedTime()
  }, 1000)
})

function computedTime () {
  let spanTime = target - now
  console.log(spanTime, 'spanTime')
  // 到达抢购时间

  if (spanTime <= 0) {
    clearInterval(timer)
    document.querySelectorAll('#box')[0].innerHTML = '开始抢购'
  } else {
    console.log('没到抢购时间')
    //   没到达抢购时间
    //   小时 时间戳/ 每小时的毫秒数
    let hour = Math.floor(spanTime / (60 * 60 * 1000))
    spanTime = spanTime - hour * 60 * 60 * 1000
    let minutes = Math.floor(spanTime / (60 * 1000))
    spanTime = spanTime - minutes * 60 * 1000
    let sec = Math.floor(spanTime / (1000))
    spanTime = spanTime - sec * 1000
    hour < 10 ? hour = '0' + hour : null
    minutes < 10 ? minutes = '0' + minutes : null
    sec < 10 ? sec = '0' + sec : null

    document.querySelectorAll('#box')[0].innerHTML = `距离抢购${hour}时${minutes}分${sec}秒`
  }
}
