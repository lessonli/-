/*
*
* indexOf() 方法返回调用它的 String 对象中第一次出现的指定值的索引，从 fromIndex 处进行搜索。如果未找到该值，则返回 -1
* 语法:str.indexOf(searchValue [, fromIndex])
* 参数
*   + searchValue 查找的值
*   + fromIndex 开始查找的位置
* 返回值
*   + 返回当前元素在字符串中的下标, 没有返回 -1
* */
const { log } = console
const string = 'lesson'
log(string.indexOf('l'))
log(string.indexOf('m'))
