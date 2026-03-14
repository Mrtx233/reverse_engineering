// // 回忆下hook逻辑
// // // 1. 对系统函数进行hook
// // var setTimeout_ = setTimeout;
// // setTimeout = function setTimeout(){
// //     debugger;
// //     console.log("拦截")
// //     return setTimeout_.apply(this, arguments);
// // }
// //
// //
// // setTimeout(function(){
// //     console.log("爆炸");
// // }, 1000);
//
// // 2. hook属性. cookie
//
// var document = {
//     // cookie: ""
// }
//
// // var b = document.cookie;  // 从对象的某个属性中获取数据
// // document.cookie = xxxx;  // 给对象的某个属性设置数据
// // 总结, 对于一个属性而言, 一共就俩操作. 一个是获取数据, 一个是设置数据
//
// // // 给某个对象定义属性.
// // Object.defineProperty(document, "cookie", { // 描述符
// //     get(){ // getter方法, 返回的内容作为该属性的值
// //         return "哈哈哈哈哈"
// //     },
// //     set(val){ // setter方法, 给对象的属性, 设置值的
// //         console.log('你给该属性设置了一个值', val)
// //     }
// // });
// //
// // // console.log(document.cookie)
// //
// // document.cookie = '马大哈'
//
//
// // 访问器描述符
// // get -> getter 访问器, 获取数据用的
// // set -> setter 访问器, 设置数据的
//
// // 7  9
//
// var obj = {}
//
// Object.defineProperty(obj, "qiaofu", {
//     value:"马大哈",
//     writable: false  // 是否可以改变该值的数据
// })
//
// console.log(obj.qiaofu);
// obj.qiaofu = "呵呵呵呵呵 "
// console.log(obj. qiaofu);
//
//
//
//
// // 数据描述符
// // value  ->  数据|对象|函数
// // writable -> 是否可写,是否可以被更改

// var obj = {};
// // Object.defineProperty(obj, "qiaofu", {
// //     writable: true, // 只读
// //     value: "哈哈哈"
// // });
// (function(){
//     var tmp = "哈哈哈";
//     Object.defineProperty(obj, "qiaofu", {
//         get(){
//             // 可以写更多复杂的事情..
//             // 提示....报错..
//             return tmp
//         },
//         set(val){
//             // tmp = val;
//         }
//     });
// })();
//
// console.log(obj.qiaofu);
// obj.qiaofu = "呵呵呵"
// console.log(obj.qiaofu);


// configurable -> 是否可以对该属性进行重新配置....是否可以修改描述符
// enumerable  -> 该属性是否可以被枚举

// 这两个东西都是用来处理对象的属性值的.
// 数据描述符
// value  ->  数据|对象|函数
// writable -> 是否可写,是否可以被更改
// 访问器描述符
// get -> getter 访问器, 获取数据用的
// set -> setter 访问器, 设置数据的


// configurable

// var obj = {}
//
// Object.defineProperty(obj, "qiaofu", {
//     configurable: false, // 所有的描述符都会锁死, 不可更改, writable和value除外
//     enumerable: true,
//     value: "哈哈",
//     writable: true, // 不受configurable控制
// });
//
//
// Object.defineProperty(obj, "qiaofu", { // 第二次define的时候是修改
//     configurable: true
// });
//
// delete obj.qiaofu; // 一旦设置为configurable:false, 该属性无法被删除
// console.log(obj)
//
// // 7777 9999
//
// //
// // console.log(obj.qiaofu);
// // obj.qiaofu = "嘿嘿";
// // console.log(obj.qiaofu);
// //
// // console.log(Object.getOwnPropertyDescriptor(obj, "qiaofu"))


// // enumerable 是否可枚举
//
// var obj = {
//     name: "樵夫",
//     age: 13,
// }
//
// Object.defineProperty(obj, "qiaofu", {
//     value:"很厉害",
//     enumerable: false // 在循环该对象的属性的时候是否可以看见该属性
// });
// // // 做条件判断
// // console.log("name" in obj); //
// // console.log("hehe" in obj);
//
// // console.log(JSON.stringify(obj));
//
// // for (let k in obj){
// //     console.log(k);
// // }
//
// console.log(Object.keys(obj));
// console.log(obj.qiaofu);
// // 7777 999

// 想要拿到某个对象的属性描述
// own, 拥有者, 自己的
// Object.getOwnPropertyDescriptor(对象, 属性)
// Object.getOwnPropertyDescriptors(对象)

// var obj = { // 默认, 可写, 可重新配置, 可枚举, value
//     name: "樵夫",
//     age: 66,
//     chi: function(){
//
//     },
//     qifei: {
//         duogao: "2米"
//     }
// }
//
// console.log(Object.getOwnPropertyDescriptors(obj));


// function Person(){
//     this.name = "樵夫";
//     this.chi = function(){}
//     this.age = 18
// }
//
// var obj = new Person();
// console.log(Object.getOwnPropertyDescriptors(obj));



// // 创建对象
// // var obj = {};
//
// var Window = function Window(){
//
// }
// // 对象
// var window = Object.create(Window.prototype, {
//     onclick: {
//         configurable: true,
//         enumerable: true,
//         get(){
//             debugger;
//         },
//         set(){
//             debugger;
//         }
//     },
// });
//
//
// // 原型链
// Object.defineProperty(Window.prototype, "PERSISTENT", {
//     "configurable":false,
//     "enumerable":true,
//     "value":"1",
//     "writable": false
// });
//
// console.log(window.PERSISTENT);

// var obj = {
//     name: "哈哈"
// }
//
// Object.defineProperty(obj, "age", {
//     value:18,
//     enumerable: false,
//     configurable:false,
//     writable: false
// });
//
// Object.defineProperty(obj, "ch", {
//     value:99,
//     enumerable: false,
//     configurable:true,
//     writable: true
// });
//
// var obj2 = {
//     shenxian: "神仙"
// }
//
// Object.setPrototypeOf(obj, obj2); // 强行给个原型对象 7777 9999
//
// console.log(obj.shenxian);
//
// //
// //
// console.log(Object.getOwnPropertyNames(obj)); // 该对象所有的属性都会被拉出来
// console.log(Object.keys(obj)); // 只能罗列enumerable=true
//
// // 想看原型对象上的东西. 单独去写
// console.log(Object.getOwnPropertyNames(obj.__proto__));
