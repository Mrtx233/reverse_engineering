
let _eval = eval;
 eval = function eval(s){
     let x = _eval(s);
     console.log("有人调用了eval('",s,"')", "返回值是", x);
     return x;
 }
let ret = eval('!new function(){eval("this.a=1")}().a');
console.log(ret); // false

eval("console.log(this)");
