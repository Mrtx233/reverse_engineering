
const {VM, VMScript} = require('vm2');

const {readBrowerCode} = require("./my_env/group");
const {readTargetJSCode} = require("./target/group");
// 1, 把所有的代码进行拼装.
// console.log(readBrowerCode());
// console.log(readTargetJSCode());

let jsCode = ";;;;;;debugger;;;;;;\n\r";
jsCode += readBrowerCode();
jsCode += "\n\r\n\r";
jsCode += "\n\r;;;;;;;;debugger;;;;;;;;\n\r";
jsCode += readTargetJSCode();
jsCode += "\n\r;;;;;;;;debugger;;;;;;;";

// 2, 需要一个沙箱环境 -> 暂时采用 vm2 / 也可以采用其他的沙箱环境
const vm = new VM();
// 代码的返回值需要铺在js最后一行.
// const script = new VMScript("function fn(){console.log(123);return 333;}; fn();"); // 运行我们的代码
const script = new VMScript(jsCode); // 运行我们的代码
const ret = vm.run(script);
console.log(ret);
