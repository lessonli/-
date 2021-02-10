## Object.definProperty
 **概念： 方法会直接在对象上定义一个新属性，或者修改一个对象的现有属性,并返回此对象**

**参数 obj 要定义属性的对象;prop,要定义或修改的属性的名称或 Symbol;descriptor
要定义或修改的属性描述符**。

**使用构造函数 或者表达式 初始化的对象 它的属性描述符都是true 就是支持枚举 删除 修改**

**如果要设置 get set 就不能再 配置 value 和 writable 否者会报错**

### 属性描述符默认值
属性 | 默认值 |说明 
 :-: | :-: | :-:
configurable | false | 描述属性是否可以被删除，默认为 false(不可以)
enumerable |false	|描述属性是否可以被for...in或Object.keys枚举，默认为 false
writable  |	false |	描述属性是否可以修改，默认为 false
get   |	undefined |	当访问属性时触发该方法，默认为undefined
set   |	undefined |	当属性被修改时触发该方法，默认为undefined
value |	undefined |	属性值，默认为undefined


```javascript
 // demo01-default.html

// Object.defineProperty(对象，属性，属性描述符)
  var obj = {};
  console.log('obj:', obj);
  // 默认不可删除，不可枚举，不可修改
  Object.defineProperty(obj, 'name', {
    value: 'Jameswain'
  });
  console.log('obj默认值:', obj);
  delete obj.name;
  console.log('obj删除后:', obj);
  console.log('obj枚举:', Object.keys(obj));
  obj.name = '詹姆斯，韦恩';
  console.log('obj修改后:', obj);
  // 不能重新定义，会报重复定义错误: Uncaught TypeError: Cannot redefine property: name
  Object.defineProperty(obj, 'name', {
    value: '詹姆斯，韦恩'
  });

```
运行结果： ![image](2C1B08C42D9A49B685922B4148E40DCD)

> 从运行结果可以发现，使用Object.defineProperty()定义的属性，默认是不可以被修改，不可以被枚举，不可以被删除的。可以与常规的方式定义属性对比一下：如果不使用Object.defineProperty()定义的属性，默认是可以修改、枚举、删除的

```javascript
 const obj = {};
 obj.name = 'Jameswain';
 console.log('枚举：', Object.keys(obj));
 obj.name = '詹姆斯-韦恩';
 console.log('修改：', obj);
 delete obj.name;
 console.log('删除：', obj);
```
![image](B9E1B543DAB34ED4B8A6B2F91451997F)

### 属性描述符
```javascript
const o = {};
  Object.defineProperty(o, 'name', {
    value: 'Jameswain',   // name属性值
    writable: true,       // 可以被修改
    enumerable: true,     // 可以被枚举
    configurable: true,   // 可以被删除
  });
  console.log(o);
  console.log('枚举：', Object.keys(o));
  o.name = '詹姆斯-韦恩';
  console.log('修改：', o);
  Object.defineProperty(o, 'name', {
    value: 'Po'
  });
  console.log('修改：', o);
  delete o.name;
  console.log('删除：', o);
  
```
**运行结果:**
![image](93CF9448C661499EBF79CC1770D7AA73)

⚠️注意：如果writable为false，configurable为true时，通过o.name = "詹姆斯-韦恩"是无法修改成功的，但是使用Object.defineProperty()修改是可以成功的代码如下：

```js
 const o = {};
  Object.defineProperty(o, 'name', {
    value: 'Jameswain',   // name属性值
    writable: false       // 不可被修改
    enumerable: true,     // 可以被枚举
    configurable: true,   // 可以被删除
  });
  console.log(o);
  console.log('枚举：', Object.keys(o));
  o.name = '詹姆斯-韦恩';
  console.log('修改：', o);
  Object.defineProperty(o, 'name', {
    value: 'Po'
  });
  console.log('修改：', o);
  delete o.name;
  console.log('删除：', o);

```
运行结果：![image](32CF9A64C7F24A59BA2CA4503D1C4111)

⚠️注意：如果writable和configurable都为false时，如果使用Object.defineProperty()修改属性值会报错：Cannot redefine property: name

```js
    const o = {};
  Object.defineProperty(o, 'name', {
    value: 'Jameswain',   // name属性值
    writable: false,       // 不可被修改
    enumerable: true,     // 可以被枚举
    configurable: false,   // 不可被删除
  });
  console.log(o);
  console.log('枚举：', Object.keys(o));
  o.name = '詹姆斯-韦恩';
  console.log('修改：', o);
  Object.defineProperty(o, 'name', {
    value: 'Po'
  });
  console.log('修改：', o);
  delete o.name;
  console.log('删除：', o);
```
![image](6D22E3ABE20D4526ACC9440BD408847A)

### enumerable 枚举

```js
const o = {};
Object.defineProperty(o, 'name', { value: 'Jameswain', enumerable: true });
Object.defineProperty(o, 'trim', { value: (str) => { return str.trim() }, enumerable: false });
Object.defineProperty(o, 'email', { value: 'Jameswain@163.com' });
o.skill = 'node.js';
console.log('枚举：', Object.keys(o));
console.log('trim: ', o.trim('      8888       ') + '1')
console.log(`o.propertyIsEnumerable('name'): `, o.propertyIsEnumerable('name'));
console.log(`o.propertyIsEnumerable('trim'): `, o.propertyIsEnumerable('trim'));
console.log(`o.propertyIsEnumerable('email'): `, o.propertyIsEnumerable('email'));
```
![image](A1E79D7930464887A7D0E01991C6F877)

### get 和 set
⚠️注意：设置set或者get，就不能在设置value和wriable，否则会报错

```js
 const o = {
    __name: ''
  };
  Object.defineProperty(o, 'name', {
    enumerable: true,
    configurable: true,
    // writable: true,    // 如果设置了get或者set，writable和value属性必须注释掉
    // value: '',         // writable和value无法与set和get共存
    get: function () {    // 如果设置了get 或者 set 就不能设置writable和value
      console.log('get', this);
      return 'My name is ' + this.__name;
    },
    set: function (newVal) {
      localStorage.setItem('name', newVal);
      console.log('set', newVal);
      this.__name = newVal;
    }
  });
  console.log(o);
  o.name = 'Jameswain';
  o.name;
  console.log(o);
  o.name = '詹姆斯-韦恩';
  console.log(o);
```
![image](292D9326ABF74F67A2ED750FCA459478)

```js
// 最简易的 数据
 let obj = {a:1, c:{d:22}, b:1}


  let updateView = () =>{
    console.log('更新')
  }

  function observer(obj) { // 缺陷就是无法监控数组的变化
    if(typeof obj !== 'object' && obj== null) return
    for (let key in obj) {
      defineReactive(obj, key, obj[key] )
    }
  }

  function defineReactive(obj, key, value){ // object.defineProperty
    observer(value)
    Object.defineProperty(obj,key, {
      enumerable: true,
      get() {
        return value
      },
      set(val) {
        updateView()
        value = val
      }
    })
  }

  observer(obj)
obj.a = 300

console.log(JSON.stringify(obj))


```