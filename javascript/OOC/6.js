/*
 * 编写queryURLParams方法实现如下的效果（至少两种方案）
 */
function queryURLParams (url) {
}
const url = 'http://www.baidu.cn/?lx=1&from=wx#video'
// console.log(url.queryURLParams('from')) //= >"wx"
// console.log(url.queryURLParams('_HASH')) //= >"video"
console.log(queryURLParams(url))
