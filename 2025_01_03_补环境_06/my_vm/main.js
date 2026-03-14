
const {VM, VMScript} = require('vm2');

const {readBrowerCode} = require("./my_env/group");
const {readTargetJSCode} = require("./target/js/group");
const {getCheerioContext, cheerio} = require("./target/html/group");

let jsCode = ";;;;;;debugger;;;;;;\n\r";
jsCode += readBrowerCode();
jsCode += "\n\r\n\r";
jsCode += "\n\r;;;;;;;;debugger;;;;;;;;\n\r";
jsCode += readTargetJSCode();
jsCode += "\n\r;;;;;;;;debugger;;;;;;;";

// 创建VM的时候. 需要给沙箱传递一个cheerio的上下文. 用来获取页面上的任何内容.
// 以及各种dom操作
const vm = new VM({sandbox:{
    // 在编写代码的时候. 去掉vm2的代理.
    // 找到vm2的bridge.js.
    // 找到function thisProxyOther(factory, other, proto) {
    // 该函数的第一行, return other
        // 框架补充完成后. 上面的东西要还原
    out: { // 传递一个out对象进去
        $: getCheerioContext(), // $(dom对象)
    }
    }});
// 代码的返回值需要铺在js最后一行.
// const script = new VMScript("function fn(){console.log(123);return 333;}; fn();"); // 运行我们的代码
const script = new VMScript(jsCode); // 运行我们的代码
const ret = vm.run(script);
console.log(ret);


