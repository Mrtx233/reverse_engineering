/**
 * 这里面负责发网络请求
 */
// 只要把env模块引入就可以了
var mm = require("./env"); // 1. 模块名和python差不多. 不用后面那个`.js` , 2. 告诉查找路径
var enc = require("./qiao_enc");

function send_req(){
    // 先拿到浏览器环境. 然后再发出去
    // check_env();
    var v = mm.chenv();
    // 把当前环境信息. 进行加密
    var mi = enc.encrypt(v);
    console.log("我发请求了.", mi); // 模拟
}
window.send_req = send_req; // 这样才是真的对外开放
module.exports = send_req

// 名字不重要...
