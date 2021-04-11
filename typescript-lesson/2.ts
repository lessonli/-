// 函数定义
function hello (name:string): void {
    console.log('hello'+ name);
}

// 函数表达式
// type 用来定义一个类型或者类型别名
type GetUserName = (firstName:string, lastName:string) => string

let getUserName:GetUserName = function (firstName:string, lastName:string) {
    return firstName+lastName
}

// 可选参数 ? 实现可选参数
function print(name:string, age:number, home?:string) {}
// 如果参数不足 print('liSen',18)
// no overload expects 2 arguments, but overloads do exist that expect either 0 or 3 arguments.
print('liSen',18)

// 剩余参数

function sum(...numbers:Array<number>) {
    return numbers.reduce(((previousValue, currentValue) => previousValue+ currentValue), 0)
}

// 函数重载
let obj:any = {}
function attr(val:string):void
function attr(val:number):void // 函数重载
function attr(val: any) {
    if(typeof val === 'string') {
        obj.name = val
    } else if (typeof val === 'number'){
        obj.age = val
    }
}

attr('lesson')
attr(1)
