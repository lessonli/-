/* debugger;
var x=1;
function func(x,y=function anonymous1(){x=2}){
    x=3;
    y();
    console.log(x);
}
func(5);
console.log(x); */

/* debugger;
var x=1;
function func(x,y=function anonymous1(){x=2}){
    var x=3;
    y();
    console.log(x);
}
func(5);
console.log(x); */

/*
debugger;
var x=1;
function func(x,y=function anonymous1(){x=2}){
    var x=3;
    var y=function anonymous2(){x=4};
    y();
    console.log(x);
}
func(5);
console.log(x); */