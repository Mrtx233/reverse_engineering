const fs = require("fs");


const js_files = [
    "node.js",
    "document.js",
    "html_document.js",     // 这里创建的document对象

    // tag中的代码
    "tag/html_collection.js",
    "tag/element.js",
    "tag/html_element.js",
    "tag/html_html_element.js",
    "tag/html_head_element.js",
    "tag/html_meta_element.js",
    "tag/html_body_element.js",
    "tag/html_div_element.js",
    "tag/html_a_element.js",
    "tag/html_span_element.js",
    "tag/html_iframe_element.js",
    "tag/html_canvas_element.js",
    "tag/html_script_element.js",
    "canvas_rendering_context2D.js",
    "css_style_declaration.js",
    "xpath_expression.js",

    "evt/event.js",
    "evt/ui_event.js",
    "evt/mouse_event.js",
    "evt/pointer_event.js",

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
