/*
* ~function(){
    //=>bind方法在IE6~8中不兼容，接下来我们自己基于原生JS实现这个方法
    function bind(){

    };
    Function.prototype.bind=bind;
}();
var obj = {name:'zhufeng'};
function func(){
    console.log(this,arguments);
    //=>当点击BODY的时候，执行func方法，输出：obj [100,200,MouseEvent事件对象]
}
document.body.onclick = func.bind(obj,100,200);
* */