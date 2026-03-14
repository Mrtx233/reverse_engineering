const fs = require("fs");


const js_files = [
    "plugins.js",
    "my_proxy.js",
    "to_native_string.js",
    "func_tools.js",
    "object_tools.js",
    "error_tools.js",
    "delete.js",
    "events.js",
    "hook_reg.js"
]

function readCoreJSCode(){
    let jsCode = "";
    for(let i = 0 ; i < js_files.length; i ++){
        jsCode += fs.readFileSync(__dirname+"/"+js_files[i], {encoding:"utf-8"})
        jsCode += ";\n\r;\n\r;"
    }
    return jsCode;
}

module.exports = {
    readCoreJSCode
}
