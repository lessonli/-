/* 参照 Array.prototype.reduce*/

// 求和
var sum = [0, 1, 2, 3].reduceRight(function (a, b) {
  return a + b;
});
// sum is 6


// 扁平化 二维数组

var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function (a, b) {
  return a.concat(b);
}, []);
// flattened is [4, 5, 2, 3, 0, 1]

// 运行一个带有回调每个函数将其结果传给下一个的异步函数列表
const waterfall = (...functions) => (callback, ...args) =>
  functions.reduceRight(
    (composition, fn) => (...results) => fn(composition, ...results),
    callback
  )(...args);

const randInt = max => Math.floor(Math.random() * max)

const add5 = (callback, x) => {
  setTimeout(callback, randInt(1000), x + 5);
};
const mult3 = (callback, x) => {
  setTimeout(callback, randInt(1000), x * 3);
};
const sub2 = (callback, x) => {
  setTimeout(callback, randInt(1000), x - 2);
};
const split = (callback, x) => {
  setTimeout(callback, randInt(1000), x, x);
};
const add = (callback, x, y) => {
  setTimeout(callback, randInt(1000), x + y);
};
const div4 = (callback, x) => {
  setTimeout(callback, randInt(1000), x / 4);
};

const computation = waterfall(add5, mult3, sub2, split, add, div4);
computation(console.log, 5) // -> 14

// same as:

const computation2 = (input, callback) => {
  const f6 = x => div4(callback, x);
  const f5 = (x, y) => add(f6, x, y);
  const f4 = x => split(f5, x);
  const f3 = x => sub2(f4, x);
  const f2 = x => mult3(f3, x);
  add5(f2, input);
}


/* 定义一个可组合函数*/

/**
 * Function Composition is way in which result of one function can
 * be passed to another and so on.
 *
 * h(x) = f(g(x))
 *
 * Function execution happens right to left
 *
 * https://en.wikipedia.org/wiki/Function_composition
 */

const compose = (...args) => (value) => args.reduceRight((acc, fn) => fn(acc), value)

// Increament passed number
const inc = (n) => n + 1

// Doubles the passed value
const double = (n) => n * 2

// using composition function
console.log(compose(double, inc)(2)); // 6

// using composition function
console.log(compose(inc, double)(2)); // 5
