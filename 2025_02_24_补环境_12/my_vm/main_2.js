
const {VM, VMScript} = require('vm2');




let jsCode = ";;;;;;debugger;;;;;;\n\r";
jsCode += `
// // ctrl+shift+r搜 
// // VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL
//
// let my_env = {
//     plugins:{
//         error_handle: function(e){
//             // 改error
//             debugger;
//             e.stack = "樵夫老大, 天老二";
//         }
//     }
// }
//
// function fn(){
//     let obj = {};
//     console.log(obj.m()); // 故意的产生一个错误
// }
// debugger;
// try{
//     fn();
// } catch (e) { // 捕获异常
//     console.log(e.stack);
//     // 如果网站想要检测stack. 如果异常来自于V8引擎的话, 那么
//     // 获取异常, 并且检测的逻辑一定要在catch语句中
// }
// debugger;

Error = function Error(){
    
}

debugger;

Object.defineProperty(Error.prototype,"stack", {
    get:function(){
        return "hello, it's me!!!";
    }
})


function fn(){
    return new Error("shit");
}


let obj = fn();
console.log(obj.stack);

`;


// 我们现在的window是通过vm2运行上述代码之后产生的.
const vm = new VM();
const script = new VMScript(jsCode); // 运行我们的代码
const ret = vm.run(script);
console.log(ret);
