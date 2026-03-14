const fs = require("fs");


const js_files = [
    "event_target.js",
    "window.js",
    "location.js",
    "navigator.js",
    "storage.js",
    "mime_type.js",
    "plugin.js",
    "mime_type_array.js",
    "plugin_array.js",
    "xml_http_request_event_target.js",
    "xml_http_request.js",
    "idb_factory.js",
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
