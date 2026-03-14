
const {readCoreJSCode} = require("./core/group");
const {readBomJSCode} = require("./bom/group");
const {readDOMJSCode} = require("./dom/group");

function readBrowerCode(){
    let jsCode = "";
    jsCode += readCoreJSCode() + "\n\r\n\r";  // 先读 core
    jsCode += readBomJSCode() + "\n\r\n\r";  // bom
    jsCode += readDOMJSCode() + "\n\r\n\r";  // dom
    return jsCode
}

module.exports = {
    readBrowerCode
}

