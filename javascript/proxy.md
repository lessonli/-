## 
放个链接吧 [阮一峰 proxy](https://es6.ruanyifeng.com/#docs/proxy/)
> 概念：Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

> Proxy用于修改某些操作的默认行为，也可以理解为在目标对象之前架设一层拦截，外部所有的访问都必须先通过这层拦截，因此提供了一种机制，可以对外部的访问进行过滤和修改。这个词的原理为代理，在这里可以表示由它来“代理”某些操作，译为“代理器”。

> 参数 target, 要使用proxy 包装的对象; handle, 一个通常以函数作为属性的对象, 各属性中的函数分别定义了在执行各种操作是代理p 的行为

### proxy 的方法
1. getPrototypeOf(),是一个代理（Proxy）方法，当读取代理对象的原型时，该方法就会被调用。
> 参数 ： target 被代理的对象， 返回值 getPrototypeOf 方法的返回值必须是一个对象或者 null。

>Object.getPrototypeOf 方法的捕捉器。 就是代理对象使用原型方法是会被捕获
```js 
let obj = {name: 'lesson'}
let proxy = new Proxy(obj, {
  getPrototypeOf(target) {
    //  该方法的返回值 必须是一个对象 或者是null
    return {sex: ' 男'}
  }
})
console.log(proxy.__proto__)  // {sex: " 男"}
console.log(Object.getPrototypeOf(proxy)) // { sex: ' 男' }
```
2. setprototype() 方法主要用来拦截 Object.setPrototypeOf()
> 参数 target 被拦截目标对象; prototype 对象新原型或为null. 
返回值 如果成功修改了[[Prototype]], setPrototypeOf 方法返回 true,否则返回 false. 
> 拦截 这个方法可以拦截以下操作:

Object.setPrototypeOf()
Reflect.setPrototypeOf()
```js

// 兼容性差

let obj = {a:1, b:2,c: {d:2334}}
// let obj = [1,2,3]
let proxy = new Proxy(obj, {
  get(target,key) {
    // console.log(target, key , '取值')
    // return target[key]
    return Reflect.get(target, key)
  },
  // 当是数组的时候 会触发 两次set 第一次[ 1, 2, 3 ] '3' 456 , 原数组 修改的下标值 设置的值 2.[ 1, 2, 3, 456 ] 'length' 4  会重新触发 length
  set(target, key, value) { // Reflect  反射属性
    // if (key === 'length') return true
    console.log(target, key, value) // target, 操作的对象, key 操作的属性(无论是否存在),  value 设置的值
    console.log('update')
    // target[key] = value
   return  Reflect.set(target, key, value)
  }
})

// proxy.m = 100
// 对于多层的对象 无法代理 只能代理第一层
proxy.c.d = 100

// proxy.push(456)
// 支持数组 可以直接更改数组  达到拦截的目的
// console.log(proxy)


// 关于多层的 对象 解决办法

let demo = {a:{b:{c:{d:{e:5}}}}}

let handler = { // 有 13 种属性
  get(target,key) {
    // 当我们设置值的时候 会先走get 因此我们可以在get 里做一层递归
    if(typeof target[key] === 'object') {
      return new Proxy(target[key], handler); // 如果是对象 就 返回这个对象的代理
    }
    return Reflect.get(target,key)
  },
  set(target, key, value) {
    return Reflect.set(target,key, value)
  }
}

let pro = new Proxy(demo, handler)

pro.a.b.c.d.e =  300

console.log(JSON.parse(JSON.stringify(pro)))

```