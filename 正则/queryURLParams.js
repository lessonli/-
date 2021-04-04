
// queryURLParams

/**
 * 获取URL 地址问号和后面的参数信息(可能包含hash值)
 * @param
 * @return [object] 把问号后面的参数信息以键值对的方式存储并且返回
 */
~(function () {
  function queryURLParams (params) {
    const obj = {}
    // 除了？#=&
    const reg = /([^?#&=]+)=([^?#&=]+)/g
    this.replace(reg, (...arg) => {
      const [content, $1, $2] = arg
      obj[$1] = $2
    })
    this.replace(/#([^?#&=]+)/g, (...[, $1]) => { obj.hash = $1 })
    return params ? obj[params] : obj
  }
  ['queryURLParams'].forEach(item => {
    String.prototype[item] = eval(item)
  })
}())

const url = 'http://www.baidu.com/?name=lisen&age=19#video'
console.log(url.queryURLParams('hash'))
