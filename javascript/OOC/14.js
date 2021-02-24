// 输出结果
var name = 'lesson';
function A(x,y){
    var res=x+y;
    console.log(res,this.name);
}
function B(x,y){
    var res=x-y;
    console.log(res,this.name);
}
B.call(A,40,30); // this 指向A   10,
B.call.call.call(A,20,10); // 不懂什么玩意
Function.prototype.call(A,60,50); // 不懂什么玩意儿
Function.prototype.call.call.call(A,80,70);  // 不懂什么玩意




