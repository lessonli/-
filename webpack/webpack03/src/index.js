import $$ from 'jquery'
console.log($$, 'jquery')
require('./a')
const a = 23433

@logger1
class A {
  constructor () {
    this.nn = 'lisen'
  }
}
function logger1 (num) {
  console.log(num, '1212')
}
console.log(a, new A(), $)
