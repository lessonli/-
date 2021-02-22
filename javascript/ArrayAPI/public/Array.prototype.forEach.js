/*
*  Array.prototype.forEach  方法对数组的每个元素执行一次给定的函数。
*   + 语法： arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
*   + 参数
*     + callback(item, index, arr)
*     + thisObj
*   + 返回值 undefined
*
*   + 注意
*     + 如果使用箭头函数表达式来传入函数参数， thisArg 参数会被忽略，因为箭头函数在词法上绑定了 this 值
*     + 除了抛出异常 不支持 中止， 或者 跳出循环
*     + 不对未初始化的值进行任何操作（稀疏数组） 未初始化的元素 [0,1,,3],
*     +
*
* */
