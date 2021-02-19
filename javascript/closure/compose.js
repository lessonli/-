/*
* js 高级编程技巧 【本质】 基于闭包执行
* 闭包: 保存 这些值 供下级上下文使用
*      保护 私有 变量 不受外界干扰
*       弊端： 占用内存 消耗浏览器性能 （可以用, 但是不能滥用）
* */
// 闭包常见应用 循环处理 （var let） 单例 惰性函数  柯里化  compose
// 函数的组合 compose
/*
    在函数式编程当中有一个很重要的概念就是函数组合， 实际上就是把处理数据的函数像管道一样连接起来， 然后让数据穿过管道得到最终的结果。 例如：
    const add1 = (x) => x + 1;
    const mul3 = (x) => x * 3;
    const div2 = (x) => x / 2;
    div2(mul3(add1(add1(0)))); //=>3
​
    而这样的写法可读性明显太差了，我们可以构建一个compose函数，它接受任意多个函数作为参数（这些函数都只接受一个参数），然后compose返回的也是一个函数，达到以下的效果：
    const operate = compose(div2, mul3, add1, add1)
    operate(0) //=>相当于div2(mul3(add1(add1(0))))
    operate(2) //=>相当于div2(mul3(add1(add1(2))))
​
    简而言之：compose可以把类似于f(g(h(x)))这种写法简化成compose(f, g, h)(x)，请你完成 compose函数的编写
*/
// 按照管道的顺序依次存储着要处理的函数
// const compose = (...funcs)=> {
//   // 返回 opeate 函数
//   // func =》 [div2, mult3, add1, add1] 从左往右 依次执行
//   /*
//   *  1 翻转数组
//   * 2 reduceRight
//   * */
//   return (x)=> {
//     let len = funcs.length
//     if(len === 0)  return  x
//     if(len === 1)  return  funcs[0](x) // 如果 数组中只有一项 那就没必要循环
//     return funcs.reduceRight((result, item) => {
//       return item(result)
//     }, x)
//   }
// }


// 它接受任意多个函数作为参数（这些函数都只接受一个参数），然后compose返回的也是一个函数，达到以下的效果：

// 1 柯里化 思想
// const compose = (...funcs)=> x => {
//   let len = funcs.length
//   if(len == 0) return x
//   if(len == 1) return  funcs[0](x)
//   return  funcs.reduceRight((result, item)=> {
//     console.log(x, 'x',)
//     return item(result)
//   },x)
//
// }

const add1 = (x) => x + 1;
const mul3 = (x) => x * 3;
const div2 = (x) => x / 2;
div2(mul3(add1(add1(0)))); //=>3
// const operate = compose(div2, mul3, add1, add1);
// console.log(operate(0));
// console.log(operate(2));
// console.log(compose()(10));

// 2 . redux 源码处理
function compose(...funcs) {
  if (funcs.length === 0) {
    // infer the argument type so it is usable in inference down the line
    return arg => {
      console.log(arg, 'arg');
      return arg
    }
  }
  if (funcs.length === 1) {
    console.log(funcs[0].toString())
    return funcs[0] // 函数返回出来了
    // return ~function (x) {
    //   return x +1
    // }()

  }
  return funcs.reduce((prev, current) => (...args) => prev(current(...args)))
  // return funcs.reduce(function (prev, current) {
  //   return function (...args) {
  //     console.log(prev.toString(), 'prev')
  //     console.log(current.toString(), 'current')
  //     return prev(current(...args))
  //   }
  // })
}

// console.log(compose(div2, mul3, add1)(2));
// console.log(compose(add1)(2));
