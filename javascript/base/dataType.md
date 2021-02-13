# js 中的数据类型
+ Number 
    + NaN 
      > 表示不是一个数
      > NaN === NaN false
      > isNAN 是否是有效数字 treu 表示不是有效数字, false 表示是有效数字
    + Infinity （表示无穷大的值）
        >Infinity === Infinity true
+ Boolean
+ String
+ NUll
+ undefined
+ Symbol
+ BigInt
  > 超大数字
+ Object

## 检测数据类型
+ typeof
  > 检测方法（函数）之外的 数据类型都是 Object Null Object Array Reg 
  +  原因： 所有的数据类型值在计算机中都是按照二进制 存储的
  + null -> 000000
  + 只要是对象都是以 000 开头存储的
  + typeof 检测的时候 是按照 计算机存储的二进制的值来检测的
+ instanceof
  > Symbol.hasInstance
+ Object.prototype.toString.call()