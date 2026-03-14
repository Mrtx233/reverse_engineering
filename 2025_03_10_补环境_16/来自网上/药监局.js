function get_enviroment(proxy_array) {
    for (var i = 0; i < proxy_array.length; i++) {
        handler = '{\n' +
            '    get: function(target, property, receiver) {\n' +
            '        console.log("方法:", "get  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return target[property];\n' +
            '    },\n' +
            '    set: function(target, property, value, receiver) {\n' +
            '        console.log("方法:", "set  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return Reflect.set(...arguments);\n' +
            '    }\n' +
            '}'
        eval('try{\n' + proxy_array[i] + ';\n'
            + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}catch (e) {\n' + proxy_array[i] + '={};\n'
            + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}')
    }
}

proxy_array = ['window', 'document', 'location', 'navigator', 'history', 'screen']

let log_flag = true

function vlog() {
    if (log_flag) {
        console.log(...arguments)
    }
}

_null = function () {
    vlog(arguments)
}
vlog("补环境开始")

window = global;
window.top = window;
window.addEventListener = function () {
};
window.attachEvent = undefined
window.setInterval = function () {
}
window.setTimeout = function () {
}
window.HTMLFormElement = function () {
}
window.XMLHttpRequest = function () {
}

window.ActiveXObject = undefined;

delete __dirname;
delete __filename;

location = {
    "ancestorOrigins": {},
    "href": "https://www.nmpa.gov.cn/xxgk/kpzhsh/kpzhshyp/index.html",
    "origin": "https://www.nmpa.gov.cn",
    "protocol": "https:",
    "host": "www.nmpa.gov.cn",
    "hostname": "www.nmpa.gov.cn",
    "port": "",
    "pathname": "/xxgk/kpzhsh/kpzhshyp/index.html",
    "search": "",
    "hash": ""
};
navigator = {
    appCodeName: "Mozilla",
    appName: "Netscape",
    appVersion: "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    languages: ["zh-CN", "zh"],
    webdriver: undefined
}
div = {
    getElementsByTagName: function (arg) {
        console.log("getElementsByTagName", arg)
        if (arg === "i") {
            return {length: 0}
        }
    }
}

var content = 'content_code'

meta = {
    getAttribute: function (arg) {
        if (arg === "r") {
            return "m"
        }
    },
    parentNode: {
        removeChild: function () {

        }
    },
    content: content
}
document = {
    createElement: function (arg) {
        console.log("对象: document   属性: createElement :", arg)
        if (arg === "div") {
            return div
        }
        if (arg === "a") {
            return {}
        }
        if (arg === "form") {
            return {}
        }
    },
    getElementsByTagName: function (arg) {
        console.log("对象: document   属性: getElementsByTagName", arg)
        if (arg === "script") {
            return {
                0: {},
                1: {}
            }
        }
        if (arg === "meta") {
            return [meta, meta]
        }
        if (arg === "base") {
            return {}
        }
    },
    getElementById: function () {
    },
    addEventListener: function () {
    },
    attachEvent: undefined,
    appendChild: function () {
    },
    removeChild: function () {
    },
    documentElement: {},
    body: function () {
    }
}

vlog("补环境结束")
get_enviroment(proxy_array);

var Buffer = undefined
var process = undefined
var clearImmediate = undefined
var setImmediate = undefined
// global = undefined;

'ts_'

require('./tscode')

// 'ts_code'
function get_ck() {
    console.log(document.cookie);
    return document.cookie
}

function jsonMD5ToStr(_0x20954c) {
    var _0x4699d8 = {
        'rlhqt': '%21',
        'AphAs': '%28',
        'MDmYq': function(_0x291a56, _0x5dbbe1) {
            return _0x291a56(_0x5dbbe1);
        },
        'YvYLd': function(_0x40b163, _0x2aa002) {
            return _0x40b163 + _0x2aa002;
        },
        'WCdKH': '%7E'
    };
    _0x20954c = _0x20954c['concat'](_0x4699d8['YvYLd']('&', 'nmpasecret2020'));
    _0x20954c = _0x4699d8['MDmYq'](encodeURIComponent, _0x20954c);
    _0x20954c = _0x20954c['replace'](new RegExp('!','gm'), _0x4699d8['rlhqt']);
    _0x20954c = _0x20954c['replace'](new RegExp('\x5c(','gm'), _0x4699d8['AphAs']);
    _0x20954c = _0x20954c['replace'](new RegExp('\x5c)','gm'), '%29');
    _0x20954c = _0x20954c['replace'](new RegExp('~','gm'), _0x4699d8['WCdKH']);
    return _0x20954c;
}


