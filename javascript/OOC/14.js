/*
* var name = '珠峰培训';
function A(x,y){
    var res=x+y;
    console.log(res,this.name);
}
function B(x,y){
    var res=x-y;
    console.log(res,this.name);
}
B.call(A,40,30);
B.call.call.call(A,20,10);
Function.prototype.call(A,60,50);
Function.prototype.call.call.call(A,80,70);
* */



