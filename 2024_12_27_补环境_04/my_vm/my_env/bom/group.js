const fs = require("fs");


const js_files = [
    "event_target.js",
    "window.js",
    "location.js",
    "navigator.js",
]

function readBomJSCode(){
    let jsCode = "";
    for(let i = 0 ; i < js_files.length; i ++){
        jsCode += fs.readFileSync(__dirname+"/"+js_files[i], {encoding:"utf-8"})
        jsCode += "\n\r\n\r"
    }
    return jsCode;
}

module.exports = {
    readBomJSCode
}
