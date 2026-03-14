
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

const vm = new VM({sandbox:{
    out: {
        $: getCheerioContext(),
    }
    }});
const script = new VMScript(jsCode); // 运行我们的代码
const ret = vm.run(script);
console.log(ret);
