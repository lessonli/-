const obj = {
  // 0: 1,
  // 1: 2,
  2: 3,
  3: 4,
  length: 2,
  push: Array.prototype.push
}
obj.push(5) // obj.push=> obj[obj.length] = value  => obj.2 = 5 length ++
obj.push(6) // obj.3 = 6 length ++
console.log(obj)

/* push 源码处理 */
Array.prototype.push = function push (value) {
  this[this.length] = value
  this.length++
}

const arr = [1, 2, 3, 4]
arr.push()
