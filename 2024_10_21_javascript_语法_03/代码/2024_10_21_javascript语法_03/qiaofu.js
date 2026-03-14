// 樵夫工作, 完成登陆模块的数据加密
// 利用局部作用域, 把一块区域内的东西保护起来. 外界无法进行修改

// var qiao = {};
// (function (a){
//     // 局部
//     let key = "10086";
//     // 局部
//     function jiami(s){ // 简单的完成了数据加密工作
//         console.log('樵夫用秘钥', key, "进行加密", "原文是", s);
//     }
//     // 放心大胆的写各种逻辑
//     function md5(){
//
//     }
//     function aes(){
//
//     }
//     var rsa = {
//         encrypt:function(){
//
//         },
//         decrypt:function(){
//             console.log("我想调用这个东西. 怎么用?11112222222111")
//         }
//     }
//
//     // 1. 对外导出的一些东西
//     // window.jiami_qiaofu = jiami;
//     // window.qiaofu = {
//     //     jiami_qiaofu: jiami,
//     //     jiemi_qiaofu: function(){
//     //
//     //     },
//     //     rsa: rsa,
//     // } // 阅读, 逻辑, 77  99
//     // // 2. 用返回值的方式
//     // return {
//     //     jiami_qiaofu: jiami,
//     //     jiemi_qiaofu: function(){
//     //
//     //     },
//     //     rsa: rsa,
//     // }
//
//     // 3. 参数也可以
//     a['rsa'] = rsa;
//
// })(qiao); // 自运行函数, 完全是为了产生一个局部作用域
//
// qiao.rsa.decrypt();


// (function(win){
//     win.qiao = {
//         rsa: {
//             decrypt:function(){
//             },
//             encrypt:function(){
//                 console.log("怎么才能调用这个东西呢?")
//             }
//         }
//     }
// })(window);
//
// window.qiao.rsa.encrypt();

// 闭包: 和python的闭包一样的.....
// 核心的逻辑: 保护变量不被其他人修改掉. 避免冲突
