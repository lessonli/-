~(function () {
  function change () {
    //= >实现你的代码
  };
  Function.prototype.change = change
}())
const obj = { name: 'zhufeng' }
function func (x, y) {
  this.total = x + y
  return this
}
const res = func.change(obj, 100, 200)
// res => {name:'Alibaba',total:300}
console.log(res)
