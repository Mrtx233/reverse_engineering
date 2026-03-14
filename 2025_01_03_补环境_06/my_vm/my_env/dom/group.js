const fs = require("fs");


const js_files = [
    "node.js",
    "document.js",
    "html_document.js",     // 这里创建的document对象

    // tag中的代码
    "tag/element.js",
    "tag/html_element.js",
    "tag/html_body_element.js",
    "tag/html_div_element.js",
    "tag/html_span_element.js",
]

function readDOMJSCode(){
    let jsCode = "";
    for(let i = 0 ; i < js_files.length; i ++){
        jsCode += fs.readFileSync(__dirname+"/"+js_files[i], {encoding:"utf-8"})
        jsCode += "\n\r\n\r"
    }
    return jsCode;
}

module.exports = {
    readDOMJSCode
}
