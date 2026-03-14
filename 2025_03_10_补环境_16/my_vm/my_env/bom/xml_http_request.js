// 构造方法的定义
// 对象的创建
// symbol处理
var XMLHttpRequest = function XMLHttpRequest() {
    // 创建该对象的时候. 可以把当前xhr对象和xhr数据做关联
    my_env.memory.xhr.set(this, {
        // 存储默认的头...
        headers: {
            "accept": "*/*",
            "accept-encoding": "gzip, deflate, br, zstd",
            "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
            "cache-control": "no-cache",
            "cookie": document.cookie,
            "user-agent": navigator.userAgent
        },
        // 各种状态码
        readyState:0,
        // url
        url: "",
        // method
        method: "GET",
        onreadystatechange: null,
        timeout:0,
        withCredentials: false
    });
}
// 处理symbol
my_env.plugins.re_def_sym(XMLHttpRequest);

// toString 搞定了
my_env.plugins.set_native(XMLHttpRequest);


my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "onreadystatechange", true, true, undefined, undefined,
    function onreadystatechange() {
        if (this instanceof XMLHttpRequest) {
            let xhr_data = my_env.memory.xhr.get(this);
            return xhr_data.onreadystatechange;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onreadystatechange(value) {
        if (this instanceof XMLHttpRequest) {
            let xhr_data = my_env.memory.xhr.get(this);
            xhr_data.onreadystatechange = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "readyState", true, true, undefined, undefined,
    function readyState() {
        if (this instanceof XMLHttpRequest) {
            let xhr_data = my_env.memory.xhr.get(this);
            return xhr_data.readyState;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "timeout", true, true, undefined, undefined,
    function timeout() {
        if (this instanceof XMLHttpRequest) {
            let xhr_data = my_env.memory.xhr.get(this);
            return xhr_data.timeout;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function timeout(value) {
        if (this instanceof XMLHttpRequest) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "withCredentials", true, true, undefined, undefined,
    function withCredentials() {
        if (this instanceof XMLHttpRequest) {
            let xhr_data = my_env.memory.xhr.get(this);
            return xhr_data.withCredentials;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function withCredentials(value) {
        if (this instanceof XMLHttpRequest) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "upload", true, true, undefined, undefined,
    function upload() {
        if (this instanceof XMLHttpRequest) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "responseURL", true, true, undefined, undefined,
    function responseURL() {
        if (this instanceof XMLHttpRequest) {
            let xhr_data = my_env.memory.xhr.get(this);
            return xhr_data.responseURL;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "status", true, true, undefined, undefined,
    function status() {
        if (this instanceof XMLHttpRequest) {
            let xhr_data = my_env.memory.xhr.get(this);
            return xhr_data.status;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "statusText", true, true, undefined, undefined,
    function statusText() {
        if (this instanceof XMLHttpRequest) {
            let xhr_data = my_env.memory.xhr.get(this);
            switch (xhr_data.status) {
                case 200:
                    return "ok";
                default:
                    debugger;
                    return;
            }
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "responseType", true, true, undefined, undefined,
    function responseType() {
        if (this instanceof XMLHttpRequest) {
            let xhr_data = my_env.memory.xhr.get(this);
            return xhr_data.responseType;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function responseType(value) {
        if (this instanceof XMLHttpRequest) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "response", true, true, undefined, undefined,
    function response() {
        if (this instanceof XMLHttpRequest) {
            let xhr_data = my_env.memory.xhr.get(this);
            return xhr_data.response;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "responseText", true, true, undefined, undefined,
    function responseText() {
        if (this instanceof XMLHttpRequest) {
            let xhr_data = my_env.memory.xhr.get(this);
            return xhr_data.responseText;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "UNSENT", false, true, false,
    0,
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "OPENED", false, true, false,
    1,
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "HEADERS_RECEIVED", false, true, false,
    2,
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "LOADING", false, true, false,
    3,
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "DONE", false, true, false,
    4,
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "abort", true, true, true,
    function abort() {
        if (this instanceof XMLHttpRequest) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "getAllResponseHeaders", true, true, true,
    function getAllResponseHeaders() {
        if (this instanceof XMLHttpRequest) {
            let xhr_data = my_env.memory.xhr.get(this);
            return xhr_data.response_headers;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "getResponseHeader", true, true, true,
    function getResponseHeader(key) {
        if (this instanceof XMLHttpRequest) {
            let xhr_data = my_env.memory.xhr.get(this);
            return xhr_data.response_headers[key];
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "open", true, true, true,
    function (method, url) {
        if (this instanceof XMLHttpRequest) {
            let xhr_data = my_env.memory.xhr.get(this);
            xhr_data.method = method;
            xhr_data.url = url;
            xhr_data.readyState = 1;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "overrideMimeType", true, true, true,
    function overrideMimeType(param0) {
        if (this instanceof XMLHttpRequest) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "send", true, true, true,
    function (body) {
        if (this instanceof XMLHttpRequest) {

            let xhr_data = my_env.memory.xhr.get(this);
            // 这里要真的发请求.
            // axios, nodejs自带的request,
            // sync-request  -> 线程同步的库. 简单好用
            // 如果是get请求. content-type是不用给的. 压根就没有请求体.
            let resp = null;
            if(xhr_data.method.toUpperCase() === "GET"){
                debugger;
                resp = my_env.out.request(xhr_data.method, xhr_data.url, {
                    headers: xhr_data.headers
                });
            } else { // post请求
                if(!xhr_data.headers['content-type']){
                    // 没有设置过content-type, 需要给一个默认值
                    this.setRequestHeader("content-type", "application/x-www-form-urlencoded");
                }
                resp = my_env.out.request(xhr_data.method, xhr_data.url, {
                    body: body,
                    headers: xhr_data.headers // 传递头信息
                });
            }


            // xhr_data.readyState 2 3
            xhr_data.response_headers = resp.headers; // 存储响应头  readyState 2
            xhr_data.readyState = 2;
            // 执行一次onreadystatechange
            xhr_data.onreadystatechange.call(this, new Event("readystatechange",{isSys: true}));

            xhr_data.readyState = 3;
            xhr_data.onreadystatechange.call(this, new Event("readystatechange",{isSys: true}));

            // 解析响应内容
            xhr_data.response = resp.getBody("utf8");
            xhr_data.responseText = resp.getBody("utf8");
            xhr_data.responseType = "";
            xhr_data.responseURL = resp.url;
            xhr_data.responseXML = null;
            xhr_data.status = resp.statusCode;

            xhr_data.readyState = 4;  // 直接一步到位
            xhr_data.onreadystatechange.call(this, new Event("readystatechange",{isSys: true}));

        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "setRequestHeader", true, true, true,
    function setRequestHeader(key, value) {
        if (this instanceof XMLHttpRequest) {
            let xhr_data = my_env.memory.xhr.get(this);
            xhr_data.headers[key.toLowerCase()] = value; // 设置请求头
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "responseXML", true, true, undefined, undefined,
    function responseXML() {
        if (this instanceof XMLHttpRequest) {
            let xhr_data = my_env.memory.xhr.get(this);
            return xhr_data.responseXML;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "setAttributionReporting", true, true, true,
    function setAttributionReporting(param0) {
        if (this instanceof XMLHttpRequest) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(XMLHttpRequest.prototype, "setPrivateToken", true, true, true,
    function setPrivateToken(param0) {
        if (this instanceof XMLHttpRequest) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);
Object.setPrototypeOf(XMLHttpRequest.prototype, XMLHttpRequestEventTarget.prototype);