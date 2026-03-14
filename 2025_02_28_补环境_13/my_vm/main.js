
const {VM, VMScript} = require('vm2');

const {readBrowerCode} = require("./my_env/group");
const {readTargetJSCode} = require("./target/js/group");
const {getCheerioContext, cheerio} = require("./target/html/group");
let urllib = require("url");
const request = require('sync-request');
const {createCanvas} = require("canvas");


let jsCode = ";;;;;;debugger;;;;;;\n\r";
jsCode += readBrowerCode();
jsCode += "\n\r\n\r";
jsCode += "\n\r;;;;;;;;debugger;;;;;;;;\n\r";
jsCode += readTargetJSCode();
jsCode += "\n\r;;;;;;;;debugger;;;;;;;";

// 该函数用来构建新的window
let create_context = function(){
    let my_context_code = readBrowerCode();
    my_context_code+= ";window;";
    // 创建vm2. 去执行上述代码. 构建新的window
    const vm = new VM({sandbox:{
        out: {
            $: getCheerioContext(),
            request,
            createCanvas,
        }
        }});
    const script = new VMScript(my_context_code);
    return vm.run(script);
}


// 我们现在的window是通过vm2运行上述代码之后产生的.
const vm = new VM({sandbox:{
    out: {
        $: getCheerioContext(),
        create_context,
        request,
        createCanvas,
        setTimeout,
        setInterval,
        clearTimeout,
        clearInterval,
        urllib,
    }
    }});
const script = new VMScript(jsCode); // 运行我们的代码
const ret = vm.run(script);
console.log(ret);
