// window.onbeforeunload = function(){
//     debugger;
// };
//
// location.replace = function(){
//     console.log("我爱你");
// };
// setTimeout(function(){
//     // location.href="http://www.baidu.com";
//     location.replace("http://www.baidu.com");
// }, 5000);
//
// // 1. 可以hook onbeforeunload事件, 当窗口跳转的时候, 可以断住
// window.onbeforeunload = function(){
//     debugger;
// }
// // 不要太新的浏览器, 在老一些的浏览器上, 或者在新的浏览器上(偶尔)能看到调用栈.

// 2. 直接把页面跳转的代码干掉(本地替换)