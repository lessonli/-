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

/* 延伸知识点 鸭子数据类型 */
/* 一些内置的鸭子数据类型 arguments nodelist ... */
const obj1 = {
  0: 10,
  1: 20,
  length: 2
}
/* 如果类数组 想使用数组方法 */
Array.prototype.forEach.call(obj1, item => {
  console.log(item)
})

/* 第二种方法  改变原型指向 */
Reflect.setPrototypeOf(obj1, Array.prototype)
// console.log(obj1)
/* 解决办法三  把需要用到的方法作为 obj 的一个私有属性  这样就可以直接调用了 */
obj1.push = Array.prototype.push
