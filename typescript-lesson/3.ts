// 类

// 如何定义类
class Person {
    name: string
    age: number

    constructor(name:string) {
        this.name = 'lesson'
        this.age = 12
    }
}
let person = new Person("lesson")
console.log(person.age);

// 存取器 getter setter

namespace b {
    class Person {
        myName: string
        constructor(name:string) {
            console.log(name, 'name');
            this.myName = name
        }
        get name() {
            return this.myName
        }

        set name(newVal:string){
            this.myName = newVal.toUpperCase()
        }
    }
    let p = new Person('lesson')
    p.name = 'liSen'
    console.log(p);
}

namespace C {
    // public readOnly
    class Person {
        // public 作为类上的属性
        constructor(public name:string,  readonly age:number=20) {
            this.name = 'lesson'
            this.age = age
        }
    }

    let p = new Person('lisen', 23) // 此时再修改就没用 因为只读
    // p.age =12 // readOnly
    console.log(p);
}

// 继承
/*
* 子类继承父类后 子类的实例上就有了 父类中的属性和方法
* 访问修饰符 public  protected private
*   public 自己的子类和其他类都可以访问
*   protected 自己和自己的子类可以访问 而子类的实例不可以
*   private 私有的 只能自己访问 自己的子类不能访问
* */

/*静态属性
*  static 自己的 只有自己可以访问 而自己的实例不能访问
*
* */

namespace d{
    // strictPropertyInitialization false 取消默认 初始化的属性
    class Person {
        name:string
        age:number
        constructor(name:string, age:number) {
            this.name = name
            this.age  = age
        }
        getName() {
            return this.name
        }
        setName(newName:string) {
            this.name = newName
        }
    }
    class Student extends Person {
        static type = 'Student'
        stuNo: number
        constructor(name:string, age: number, stuNo: number) {
            super(name, age); // 代表父类的构造函数执行
            this.stuNo = stuNo
        }
        getStuNo() {
            return this.stuNo
        }
        setStuNo(stuNo:number) {
            this.stuNo = stuNo
        }
    }
    let s = new Student('李森', 18, 1565)
    // console.log(s.type); // undefined
    console.log(Student.type); // student
}

