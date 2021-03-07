var arr = []
var slice = arr.slice

// 数组扁平化  思考？N种方案实现数据扁平化
var flat = arr.flat
  ? function (array) {
    return arr.flat.call(array)
  }
  : function (array) {
    return arr.concat.apply([], array)
  }

var version = '3.5.1'
var jQuery = function (selector, context) {
  // 创建JQ类的是实例（JQ对象：类数组集合）
  return new jQuery.fn.init(selector, context)
}

// jQuery作为构造函数，在原型上提供其实例（JQ对象）调用的公共属性和方法
jQuery.fn = jQuery.prototype = {
  jquery: version,
  constructor: jQuery,
  // 基于索引从JQ对象类数组集合中找到对应项「原生DOM对象」
  get: function (num) {
    // 如果传递任何的索引，则直接把JQ集合对象变为数组对象
    if (num == null) {
      return slice.call(this)
    }
    // 支持负数作为索引
    return num < 0 ? this[num + this.length] : this[num]
  },
  // 基于索引从JQ对象类数组集合中找到对应项「依然JQ对象」
  eq: function (i) {
    // 支持负数索引
    var len = this.length
    var j = +i + (i < 0 ? len : 0)
    return this.pushStack(j >= 0 && j < len ? [this[j]] : [])
  },
  pushStack: function (elems) {
    // 把传递进来的数组和一个空的JQ实例合并在一起：结果还是JQ实例，但是JQ集合对象中包含了传递的数组中的信息
    var ret = jQuery.merge(this.constructor(), elems)
    // prevObject记录的是当前操作的根节点「起始节点」
    ret.prevObject = this
    return ret
  },
  // 原型上的each用的也是$.each([JQ类数组对象],callback)
  //   + JQ内置循环机制
  //   + $('*').css('color','red') JQ内置会把选择器获取的JQ集合中的每一项样式都进行修改，无需自己遍历一个个的修改
  each: function (callback) {
    return jQuery.each(this, callback)
  }
}

// jQuery也可以作为一个普通对象，在对象上提供一系列的方法「工具类方法：和实例没有直接的关系」
// jQuery.extend：向JQ对象和JQ原型上扩展方法
//   + 编写JQ插件 $.fn.extend({xxx:function(){}})  -> $(...).xxx()
//   + 完善JQ类库 $.extend({xxx:function(){}}) -> $.xxx()
jQuery.extend = jQuery.fn.extend = function () {
  var options; var name; var src; var copy; var copyIsArray; var clone
  var target = arguments[0] || {}
  var i = 1
  var length = arguments.length
  var deep = false
  // $.extend({...}) target->{...}  deep->false
  // $.extend(true,{...})  deep->true  target->{...}
  if (typeof target === 'boolean') {
    deep = target
    target = arguments[i] || {}
    i++
  }
  if (typeof target !== 'object' && !isFunction(target)) {
    target = {}
  }

  // target->$/$.fn
  if (i === length) {
    target = this
    i--
  }

  for (; i < length; i++) {
    // options->{...}
    if ((options = arguments[i]) != null) {
      for (name in options) {
        // name->key  copy->value
        copy = options[name]
        if (name === '__proto__' || target === copy) {
          continue
        }
        if (deep && copy && (jQuery.isPlainObject(copy) ||
          (copyIsArray = Array.isArray(copy)))) {
          // 获取$/$.fn原始对象中的属性值
          src = target[name]
          if (copyIsArray && !Array.isArray(src)) {
            clone = []
          } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
            clone = {}
          } else {
            clone = src
          }
          copyIsArray = false
          target[name] = jQuery.extend(deep, clone, copy)
        } else if (copy !== undefined) {
          // 在deep不是true的时候，直接把传递对象中的每一项替换$/$.fn的成员
          target[name] = copy
        }
      }
    }
  }
  return target
}

jQuery.extend({
  // 类似于数组中的forEach，用来遍历普通对象、类数组对象、数组对象的；支持回调函数返回值，如果返回的是false，则结束遍历「这个操作forEach是不具备的」；
  //   + $.each({name:'xxx'},function(key,value){ this->value });
  //   + $.each([10,20,30],function(index,item){ this->item })
  each: function (obj, callback) {
    var length; var i = 0
    if (isArrayLike(obj)) {
      // 数据或者类数组
      length = obj.length
      for (; i < length; i++) {
        if (callback.call(obj[i], i, obj[i]) === false) {
          break
        }
      }
    } else {
      // 普通对象
      /* for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
              break;
          }
      } //=>弊端：遍历自己扩展的公共属性、遍历不到Symbol的属性 */
      var keys = [
        ...Object.getOwnPropertyNames(obj),
        ...Object.getOwnPropertySymbols(obj)
      ]
      for (; i < keys.length; i++) {
        var key = keys[i]
        var value = obj[key]
        if (callback.call(value, key, value) === false) {
          break
        }
      }
    }
    return obj
  }
})

var rootjQuery = jQuery(document)
var rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/
var init = jQuery.fn.init = function (selector, context, root) {
  root = root || rootjQuery
  // $(null/undefined/""/false) 或者 $() 返回的是JQ的实例「空的实例对象」
  if (!selector) {
    return this
  }

  // selector支持三种类型：String、DOM节点（元素节点）、函数
  if (typeof selector === 'string') {
    if (selector[0] === '<' &&
        selector[selector.length - 1] === '>' &&
        selector.length >= 3) {
      // 适配 $("<div>珠峰培训</div>") 动态创建一个DOM元素
      match = [null, selector, null]
    } else {
      // 适配正常的选择器
      match = rquickExpr.exec(selector)
    }
    // ...
  } else if (selector.nodeType) {
    // 把一个原生DOM对象变为JQ对象「JQ实例」：这样就可以调用JQ原型上提供的方法了
    this[0] = selector
    this.length = 1
    return this
  } else if (isFunction(selector)) {
    // 等到DOM结构加载完成再执行selector函数
    return root.ready !== undefined
      ? root.ready(selector)
      : selector(jQuery)
  }

  // 创造符合JQ对象这种的类数组
  return jQuery.makeArray(selector, this)
}
init.prototype = jQuery.fn
window.jQuery = window.$ = jQuery

// ---------
// $('.box', document.getElementById('container'));
//= >把jQuery当作普通的函数执行 selector选择器 context上下文(默认值document)
//= >返回的结果是jQuery这个类的一个实例（原本是init这个类的实例，但是中转到jQuery上）
//= >我们返回的这个结果成为“JQ对象「JQ实例对象」”，它可以调用JQ原型上的方法

// 在浏览器端，下数的两种写法是相同的意思：都是基于监听DOMContentLoaded事件，实现只有页面中DOM结构加载完成后，才会触发回调函数selector执行
// $(function () {});
// $(document).ready(function () {});
