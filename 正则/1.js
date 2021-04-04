
// queryURLParams

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

  /**
   * millimeter 实现大数字的千分符处理
   * @param
   * @return string 千分符后的字符串
   */
  function millimeter () {
    // 正向预查 ?= 只匹配不捕获
    return this.replace(/\d{1,3}(?=(\d{3})+$)/g, (content) => {
      console.log(content)
      return content + ','
    })
  }

  ['queryURLParams', 'millimeter'].forEach(item => {
    String.prototype[item] = eval(item)
  })
}())

const url = 'http://www.baidu.com/?name=lisen&age=19#video'
console.log(url.queryURLParams('hash'))

const str = '15628954' //= > 15,628,954 千分符
console.log(str.millimeter())

str.replace(/\d{1,3}(?=(\d{3})+$)/g, (content) => {
  console.log(content, '1')
})
