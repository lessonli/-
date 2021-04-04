~(function () {
  /**
   *
   * @param template 模板规则 {0}年 {1-5} 月日时分秒
   * @return {string} 格式化后的时间字符串
   */
  function formatTime (template = '{0}年{1}月{2}日 {3}时{4}分{5}秒') {
    /*
    * 1 首先获取时间字符串当中的年月日 时分秒
    * 2 得到想要的格式
    * */
    const timeAry = this.match(/\d+/g) // ["2020", "12", "11"]
    template = template.replace(/\{(\d+)\}/g, (content, $1) => {
      // content 表示大正则匹配的信息 $1 表示小分组匹配的信息
      //   以$1 的值作为索引 到timeAry 找到对应的时间
      console.log(timeAry, $1)
      let time = timeAry[$1] || '00'
      time.length < 2 ? time = '0' + time : time
      // return time.length < 2 ? time = '0' + time : time
      return time
    })
    return template
  }
  /* 扩展到内置类Strng.prototype */
  ['formatTime'].forEach(item => {
    String.prototype[item] = eval(item)
  })
}())
// 时间格式字符串
const time = '2020-02-23 15:21:21'
//= 》 '2020/02/23 15:21:21'
console.log(time.formatTime('{0}/{1}/{2}/ {3}/{4}/{5}'))
