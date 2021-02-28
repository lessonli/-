/*
*   Array.prototype.slice 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
*   语法:
*     arr.slice([begin[, end]])
*   参数：
*     + begin 可选, 拷贝的起始下标
*     + end 可选  拷贝的结束位置
*   返回值
*     + 一个含有被提取元素的新数组
*
*   注意： 如果拷贝的元素 存在引用数据类型, 那么该元素的拷贝 属于 浅拷贝
* */

// 使用 slice 方法从 myCar 中创建一个 newCar。
const myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }
const myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
const newCar = myCar.slice(0, 2)

// 输出 myCar、newCar 以及各自的 myHonda 对象引用的 color 属性。
console.log(' myCar = ' + JSON.stringify(myCar))
console.log('newCar = ' + JSON.stringify(newCar))
console.log(' myCar[0].color = ' + JSON.stringify(myCar[0].color))
console.log('newCar[0].color = ' + JSON.stringify(newCar[0].color))

// 改变 myHonda 对象的 color 属性.
myHonda.color = 'purple'
console.log('The new color of my Honda is ' + myHonda.color)

// 输出 myCar、newCar 中各自的 myHonda 对象引用的 color 属性。
console.log(' myCar[0].color = ' + myCar[0].color)
console.log('newCar[0].color = ' + newCar[0].color)
