

// // 进行hook
// Error = function Error(){
//
// }
// Object.defineProperty(Error.prototype, "stack", {
//     get: function (){
//         return "stack" ///????
//     }
// })
//
// function fn(){
//     return new Error("你好"); // 在网站的js代码中new的Error
// }
//
// let e = fn();
// console.log(e.stack); // 拿到的是一个字符串
// console.log("==========");


//
//
// `
// 12期结尾的wasm, 11vmp里面详细的讲解了为什么计算机里必须要有栈....用来记录函数调用的过程
// 通过栈. 计算机可以知道当一个函数结束之后. 应该继续做什么
//
// stack中存放的是堆栈信息:
//     当前错误产生的位置. 往回去溯源...
//
//     a -> b -> c -> error
//
//     stack:
//         error
//         c
//         b
//         a
//
//         function a(){
//             xxxx
//             b()
//             xxxxx
//         }
//
//         function b(){
//
//
//         }
//
//         a() -> b()
// `
//
// `
// Error: 你好
//     at fn (D:\\爬虫13期专用\\2025_02_21_补环境_11\\补充知识点\\01_关于异常信息.js:3:12)
//     at Object.<anonymous> (D:\\爬虫13期专用\\2025_02_21_补环境_11\\补充知识点\\01_关于异常信息.js:6:9)
//     at Module._compile (node:internal/modules/cjs/loader:1469:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
//     at Module.load (node:internal/modules/cjs/loader:1288:32)
//     at Module._load (node:internal/modules/cjs/loader:1104:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
//     at node:internal/main/run_main_module:28:49
//
// `
//



// Error = function Error(){
//
// }
//
// Object.defineProperty(TypeError.prototype, "stack", {
//     get: function (){
//         return "stack" ///????
//     }
// })
//
// function fn(){
//     let obj = {};
//     console.log(obj.m()); // 故意的产生一个错误
// }
//
// try{
//     fn();
// } catch (e) { // 捕获异常
//     console.log(e.stack);
//     // 如果网站想要检测stack. 如果异常来自于V8引擎的话, 那么
//     // 获取异常, 并且检测的逻辑一定要在catch语句中
// }
///?????

// js: Error => 到了V8那边(相对应的类V8Error)  .....
// 13

// 1. 直接new出来的error  -> 直接hook即可
// 2. V8直接返回的错误对象 -> 必须要借助 -> ast
// 最优秀的解决办法是改V8 => 难度非常大
// 分而治之
// AST 抽象语法树
// js代码 -> AST处理成语法树 -> 编译 -> V8去运行









Error = function Error(){

}

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





