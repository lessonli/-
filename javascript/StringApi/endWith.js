/*
*   endWith() 判断当前字符串是否是以另外一个给定的子字符串结尾的, 根据判断结果返回 true false
*   语法:
*     str.endsWith(searchString[, length])
*   参数
*     + searchString
*     + length 可选 指str的长度 如果大于 字符串的长度 则截取 length的长度
* */
const str = 'To be, or not to be, that is the question.'
console.log(str.length)
// console.log(str.endsWith('question.')) // true
// console.log(str.endsWith('to be')) // false
// console.log(str.endsWith('to be', 19)) // true
// console.log(str.endsWith('on.')) //
