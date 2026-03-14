const fs = require("fs");


const js_files = [
    "start.js",
    "target.js",
    "result.js"
]

function readTargetJSCode(){
    let jsCode = "";
    for(let i = 0 ; i < js_files.length; i ++){
        jsCode += fs.readFileSync(__dirname+"/"+js_files[i], {encoding:"utf-8"})
    }
    return jsCode;
}

module.exports = {
    readTargetJSCode
}
