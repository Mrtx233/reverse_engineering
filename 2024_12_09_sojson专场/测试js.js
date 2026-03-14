var func_toString = Function.prototype.toString;

Function.prototype.toString = function(){
    var s = func_toString.apply(this, arguments);
    console.log(s);
    debugger;
    return s;
}

function fn(){console.log("我爱你");}

function gn() {
    console.log("我爱你");
}

// 程序中一定要有办法拿到函数的字符串形式(代码)
// 进行正则匹配

debugger;
// // 所有的函数都有toString()
// // Function.prototype.toString()
// console.log(gn.toString());
// console.log(gn);
// console.log(gn+"");


// 21:30 继续
