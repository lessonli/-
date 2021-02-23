/* 重写 只考虑 pro 是  对象*/
Object.create = function (pro) {
  function Proxy () {}
  Proxy.prototype = pro
  return new Proxy
}



/* 完全 兼容 浏览器的 方法*/

function _new(Ctor) {
  // 获取 除第一个参数以外，剩余传递的参数信息， 以数组的形式保存
  var params = [].slice(arguments, 1)
  // 改写 兼容 ie 低版本
  var obj = Object.create(Ctor.prototype)
  var result = Ctor.apply(obj, params)
  if(/^(object|function)$/.test(typeof  result)) return result
  return  obj
}