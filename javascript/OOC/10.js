const utils = (function () {
  /*
   * toArray：转换为数组的方法
   *   @params
   *      不固定数量，不固定类型
   *   @return
   *      [Array] 返回的处理后的新数组
   * by zhufengpeixun on 2020
   */
  function toArray () {
    //= >实现你的代码（多种办法实现）
  }

  return {
    toArray
  }
})()
let ary = utils.toArray(10, 20, 30) //= >[10,20,30]
ary = utils.toArray('A', 10, 20, 30) //= >['A',10,20,30]
