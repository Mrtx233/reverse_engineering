(function(plugins){

     let _match = String.prototype.match;
     String.prototype.match = my_env.plugins.set_native(function match(arg0){
         let val = _match.apply(this, arguments);
         my_env.qiao_log("有人调用了match方法, 源字符串:",this,"目标正则", arg0, "结果是", val);
         return val;
     });

     let _test = RegExp.prototype.test;
     RegExp.prototype.test = my_env.plugins.set_native(function test(arg0){
         let val = _test.apply(this, arguments);
         my_env.qiao_log("有人调用了正则的test方法,正则:", this, "源字符串:", arg0,"结果是", val);
         return val;
     });

     let _eval = eval;
     eval = my_env.plugins.set_native(function eval(s){
         if(s === 'this.a=1'){
             return undefined;
         }
         if (s === '!new function(){eval("this.a=1")}().a'){
             return false;
         }
         let x = _eval(s);
         my_env.qiao_log("有人调用了eval('",s,"')", "返回值是", x);
         return x;
     });

})(my_env.plugins);

