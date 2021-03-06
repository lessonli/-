// 输出结果

// eslint-disable-next-line no-unused-vars
var name = 'lesson'
function A (x, y) {
  const res = x + y
  console.log(res, this.name)
}
function B (x, y) {
  const res = x - y
  console.log(res, this.name)
}
// B.call(A, 40, 30) // this 指向A   10,
// 参照 call 实现的 过程
// B.call.call.call(A, 20, 10) // 不懂什么玩意
// Function.prototype.call(A, 60, 50) // 不懂什么玩意儿
Function.prototype.call.call.call(A, 80, 70) // 不懂什么玩意
