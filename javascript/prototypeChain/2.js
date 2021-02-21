/*
 * 扩展内置类原型上的方法
 *   + 调用的时候更加方便
 *   + 也更好的实现链式调用 
 * 注意：自己编写的方法会覆盖内置的方法，所以自己命名的时候需要注意，一般都是设置前缀，例如：myUnique
 */

/* Array.prototype.sort = function sort() {
    console.log('哈哈');
}; */

Array.prototype.unique = function unique() {
    // this->arr 一般是当前操作类的实例
    let result = new Set(this);
    result = Array.from(result);
    return result; //返回的结果还是一个数组，则可以继续调用数组的其它方法 ->“链式调用”
};

// 先去重，再排序
//  + sort是Array.prototype上的方法，所以数组可以直接调用
let arr = [1, 2, 3, 2, 3, 4, 2, 3, 4, 2, 1, 2, 3, 4, 5, 3, 4];
let result = arr.unique().sort((a, b) => a - b);
console.log(arr, result);

/* 
function unique(arr) {
    // 首先基于Set结构去重，最后转换为数组
    let result = new Set(arr);
    result = Array.from(result);
    return result;
}
let arr = [1, 2, 3, 2, 3, 4, 2, 3, 4, 2, 1, 2, 3, 4, 5, 3, 4];
let result = unique(arr);
console.log(result); 
*/