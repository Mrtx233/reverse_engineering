// 构造方法的定义
// 对象的创建
// symbol处理
var Document = function Document() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(Document);

// toString 搞定了
my_env.plugins.set_native(Document);


my_env.plugins.def_obj_prop(Document.prototype, "implementation", true, true, undefined, undefined,
    function implementation() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "URL", true, true, undefined, undefined,
    function URL() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "documentURI", true, true, undefined, undefined,
    function documentURI() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "compatMode", true, true, undefined, undefined,
    function compatMode() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "characterSet", true, true, undefined, undefined,
    function characterSet() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "charset", true, true, undefined, undefined,
    function charset() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "inputEncoding", true, true, undefined, undefined,
    function inputEncoding() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "contentType", true, true, undefined, undefined,
    function contentType() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "doctype", true, true, undefined, undefined,
    function doctype() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "documentElement", true, true, undefined, undefined,
    function documentElement() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "xmlEncoding", true, true, undefined, undefined,
    function xmlEncoding() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "xmlVersion", true, true, undefined, undefined,
    function xmlVersion() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function xmlVersion(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "xmlStandalone", true, true, undefined, undefined,
    function xmlStandalone() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function xmlStandalone(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "domain", true, true, undefined, undefined,
    function domain() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function domain(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "referrer", true, true, undefined, undefined,
    function referrer() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "cookie", true, true, undefined, undefined,
    function cookie() {
        // 字符串, 对象,
        if (this instanceof Document) {
            // 获取cookie的时候要执行的方法
            let cks = my_env.memory.cookies;
            let arr = [];
            for(let k in cks){
                let v = cks[k];
                arr.push(`${k}=${v}`)
            }
            return arr.join("; ");
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function cookie(value) {
        if (this instanceof Document) {
            // 设置cookie的时候要执行的方法
            // document.cookie = "qiao=123456";
            let [k, ...v] = value.split("=");
            my_env.memory.cookies[k] = v.join("="); // 存储cookie的信息
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "lastModified", true, true, undefined, undefined,
    function lastModified() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "readyState", true, true, undefined, undefined,
    function readyState() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "title", true, true, undefined, undefined,
    function title() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function title(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "dir", true, true, undefined, undefined,
    function dir() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function dir(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "body", true, true, undefined, undefined,
    function body() {
        if (this instanceof Document) {
            let c_elem = my_env.out.$("body")[0];
            let obj = Object.create(HTMLBodyElement.prototype);
            my_env.memory.nodes.set(obj, c_elem);
            return obj;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function body(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "head", true, true, undefined, undefined,
    function head() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "images", true, true, undefined, undefined,
    function images() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "embeds", true, true, undefined, undefined,
    function embeds() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "plugins", true, true, undefined, undefined,
    function plugins() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "links", true, true, undefined, undefined,
    function links() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "forms", true, true, undefined, undefined,
    function forms() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "scripts", true, true, undefined, undefined,
    function scripts() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "currentScript", true, true, undefined, undefined,
    function currentScript() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "defaultView", true, true, undefined, undefined,
    function defaultView() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "designMode", true, true, undefined, undefined,
    function designMode() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function designMode(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onreadystatechange", true, true, undefined, undefined,
    function onreadystatechange() {
        debugger;
        return undefined;
    },
    function onreadystatechange(value) {
        debugger;
        return undefined;
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "anchors", true, true, undefined, undefined,
    function anchors() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "applets", true, true, undefined, undefined,
    function applets() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "fgColor", true, true, undefined, undefined,
    function fgColor() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function fgColor(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "linkColor", true, true, undefined, undefined,
    function linkColor() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function linkColor(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "vlinkColor", true, true, undefined, undefined,
    function vlinkColor() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function vlinkColor(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "alinkColor", true, true, undefined, undefined,
    function alinkColor() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function alinkColor(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "bgColor", true, true, undefined, undefined,
    function bgColor() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function bgColor(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "all", true, true, undefined, undefined,
    function all() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "scrollingElement", true, true, undefined, undefined,
    function scrollingElement() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "onpointerlockchange", true, true, undefined, undefined,
    function onpointerlockchange() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onpointerlockchange(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onpointerlockerror", true, true, undefined, undefined,
    function onpointerlockerror() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onpointerlockerror(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "hidden", true, true, undefined, undefined,
    function hidden() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "visibilityState", true, true, undefined, undefined,
    function visibilityState() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "wasDiscarded", true, true, undefined, undefined,
    function wasDiscarded() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "prerendering", true, true, undefined, undefined,
    function prerendering() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "featurePolicy", true, true, undefined, undefined,
    function featurePolicy() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "webkitVisibilityState", true, true, undefined, undefined,
    function webkitVisibilityState() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "webkitHidden", true, true, undefined, undefined,
    function webkitHidden() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "onbeforecopy", true, true, undefined, undefined,
    function onbeforecopy() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onbeforecopy(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onbeforecut", true, true, undefined, undefined,
    function onbeforecut() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onbeforecut(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onbeforepaste", true, true, undefined, undefined,
    function onbeforepaste() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onbeforepaste(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onfreeze", true, true, undefined, undefined,
    function onfreeze() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onfreeze(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onprerenderingchange", true, true, undefined, undefined,
    function onprerenderingchange() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onprerenderingchange(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onresume", true, true, undefined, undefined,
    function onresume() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onresume(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onsearch", true, true, undefined, undefined,
    function onsearch() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onsearch(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onvisibilitychange", true, true, undefined, undefined,
    function onvisibilitychange() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onvisibilitychange(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "timeline", true, true, undefined, undefined,
    function timeline() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "fullscreenEnabled", true, true, undefined, undefined,
    function fullscreenEnabled() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function fullscreenEnabled(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "fullscreen", true, true, undefined, undefined,
    function fullscreen() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function fullscreen(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onfullscreenchange", true, true, undefined, undefined,
    function onfullscreenchange() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onfullscreenchange(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onfullscreenerror", true, true, undefined, undefined,
    function onfullscreenerror() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onfullscreenerror(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "webkitIsFullScreen", true, true, undefined, undefined,
    function webkitIsFullScreen() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "webkitCurrentFullScreenElement", true, true, undefined, undefined,
    function webkitCurrentFullScreenElement() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "webkitFullscreenEnabled", true, true, undefined, undefined,
    function webkitFullscreenEnabled() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "webkitFullscreenElement", true, true, undefined, undefined,
    function webkitFullscreenElement() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "onwebkitfullscreenchange", true, true, undefined, undefined,
    function onwebkitfullscreenchange() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onwebkitfullscreenchange(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onwebkitfullscreenerror", true, true, undefined, undefined,
    function onwebkitfullscreenerror() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onwebkitfullscreenerror(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "rootElement", true, true, undefined, undefined,
    function rootElement() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "pictureInPictureEnabled", true, true, undefined, undefined,
    function pictureInPictureEnabled() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "onbeforexrselect", true, true, undefined, undefined,
    function onbeforexrselect() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onbeforexrselect(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onabort", true, true, undefined, undefined,
    function onabort() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onabort(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onbeforeinput", true, true, undefined, undefined,
    function onbeforeinput() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onbeforeinput(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onbeforematch", true, true, undefined, undefined,
    function onbeforematch() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onbeforematch(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onbeforetoggle", true, true, undefined, undefined,
    function onbeforetoggle() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onbeforetoggle(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onblur", true, true, undefined, undefined,
    function onblur() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onblur(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "oncancel", true, true, undefined, undefined,
    function oncancel() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function oncancel(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "oncanplay", true, true, undefined, undefined,
    function oncanplay() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function oncanplay(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "oncanplaythrough", true, true, undefined, undefined,
    function oncanplaythrough() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function oncanplaythrough(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onchange", true, true, undefined, undefined,
    function onchange() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onchange(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onclick", true, true, undefined, undefined,
    function onclick() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onclick(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onclose", true, true, undefined, undefined,
    function onclose() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onclose(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "oncontentvisibilityautostatechange", true, true, undefined, undefined,
    function oncontentvisibilityautostatechange() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function oncontentvisibilityautostatechange(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "oncontextlost", true, true, undefined, undefined,
    function oncontextlost() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function oncontextlost(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "oncontextmenu", true, true, undefined, undefined,
    function oncontextmenu() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function oncontextmenu(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "oncontextrestored", true, true, undefined, undefined,
    function oncontextrestored() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function oncontextrestored(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "oncuechange", true, true, undefined, undefined,
    function oncuechange() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function oncuechange(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "ondblclick", true, true, undefined, undefined,
    function ondblclick() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ondblclick(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "ondrag", true, true, undefined, undefined,
    function ondrag() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ondrag(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "ondragend", true, true, undefined, undefined,
    function ondragend() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ondragend(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "ondragenter", true, true, undefined, undefined,
    function ondragenter() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ondragenter(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "ondragleave", true, true, undefined, undefined,
    function ondragleave() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ondragleave(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "ondragover", true, true, undefined, undefined,
    function ondragover() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ondragover(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "ondragstart", true, true, undefined, undefined,
    function ondragstart() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ondragstart(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "ondrop", true, true, undefined, undefined,
    function ondrop() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ondrop(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "ondurationchange", true, true, undefined, undefined,
    function ondurationchange() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ondurationchange(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onemptied", true, true, undefined, undefined,
    function onemptied() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onemptied(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onended", true, true, undefined, undefined,
    function onended() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onended(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onerror", true, true, undefined, undefined,
    function onerror() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onerror(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onfocus", true, true, undefined, undefined,
    function onfocus() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onfocus(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onformdata", true, true, undefined, undefined,
    function onformdata() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onformdata(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "oninput", true, true, undefined, undefined,
    function oninput() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function oninput(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "oninvalid", true, true, undefined, undefined,
    function oninvalid() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function oninvalid(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onkeydown", true, true, undefined, undefined,
    function onkeydown() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onkeydown(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onkeypress", true, true, undefined, undefined,
    function onkeypress() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onkeypress(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onkeyup", true, true, undefined, undefined,
    function onkeyup() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onkeyup(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onload", true, true, undefined, undefined,
    function onload() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onload(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onloadeddata", true, true, undefined, undefined,
    function onloadeddata() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onloadeddata(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onloadedmetadata", true, true, undefined, undefined,
    function onloadedmetadata() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onloadedmetadata(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onloadstart", true, true, undefined, undefined,
    function onloadstart() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onloadstart(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onmousedown", true, true, undefined, undefined,
    function onmousedown() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onmousedown(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onmouseenter", true, true, undefined, undefined,
    function onmouseenter() {
        debugger;
        return undefined;
    },
    function onmouseenter(value) {
        debugger;
        return undefined;
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onmouseleave", true, true, undefined, undefined,
    function onmouseleave() {
        debugger;
        return undefined;
    },
    function onmouseleave(value) {
        debugger;
        return undefined;
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onmousemove", true, true, undefined, undefined,
    function onmousemove() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onmousemove(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onmouseout", true, true, undefined, undefined,
    function onmouseout() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onmouseout(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onmouseover", true, true, undefined, undefined,
    function onmouseover() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onmouseover(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onmouseup", true, true, undefined, undefined,
    function onmouseup() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onmouseup(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onmousewheel", true, true, undefined, undefined,
    function onmousewheel() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onmousewheel(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onpause", true, true, undefined, undefined,
    function onpause() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onpause(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onplay", true, true, undefined, undefined,
    function onplay() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onplay(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onplaying", true, true, undefined, undefined,
    function onplaying() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onplaying(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onprogress", true, true, undefined, undefined,
    function onprogress() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onprogress(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onratechange", true, true, undefined, undefined,
    function onratechange() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onratechange(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onreset", true, true, undefined, undefined,
    function onreset() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onreset(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onresize", true, true, undefined, undefined,
    function onresize() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onresize(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onscroll", true, true, undefined, undefined,
    function onscroll() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onscroll(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onsecuritypolicyviolation", true, true, undefined, undefined,
    function onsecuritypolicyviolation() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onsecuritypolicyviolation(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onseeked", true, true, undefined, undefined,
    function onseeked() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onseeked(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onseeking", true, true, undefined, undefined,
    function onseeking() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onseeking(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onselect", true, true, undefined, undefined,
    function onselect() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onselect(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onslotchange", true, true, undefined, undefined,
    function onslotchange() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onslotchange(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onstalled", true, true, undefined, undefined,
    function onstalled() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onstalled(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onsubmit", true, true, undefined, undefined,
    function onsubmit() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onsubmit(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onsuspend", true, true, undefined, undefined,
    function onsuspend() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onsuspend(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "ontimeupdate", true, true, undefined, undefined,
    function ontimeupdate() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ontimeupdate(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "ontoggle", true, true, undefined, undefined,
    function ontoggle() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ontoggle(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onvolumechange", true, true, undefined, undefined,
    function onvolumechange() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onvolumechange(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onwaiting", true, true, undefined, undefined,
    function onwaiting() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onwaiting(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onwebkitanimationend", true, true, undefined, undefined,
    function onwebkitanimationend() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onwebkitanimationend(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onwebkitanimationiteration", true, true, undefined, undefined,
    function onwebkitanimationiteration() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onwebkitanimationiteration(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onwebkitanimationstart", true, true, undefined, undefined,
    function onwebkitanimationstart() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onwebkitanimationstart(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onwebkittransitionend", true, true, undefined, undefined,
    function onwebkittransitionend() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onwebkittransitionend(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onwheel", true, true, undefined, undefined,
    function onwheel() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onwheel(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onauxclick", true, true, undefined, undefined,
    function onauxclick() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onauxclick(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "ongotpointercapture", true, true, undefined, undefined,
    function ongotpointercapture() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ongotpointercapture(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onlostpointercapture", true, true, undefined, undefined,
    function onlostpointercapture() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onlostpointercapture(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onpointerdown", true, true, undefined, undefined,
    function onpointerdown() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onpointerdown(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onpointermove", true, true, undefined, undefined,
    function onpointermove() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onpointermove(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onpointerrawupdate", true, true, undefined, undefined,
    function onpointerrawupdate() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onpointerrawupdate(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onpointerup", true, true, undefined, undefined,
    function onpointerup() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onpointerup(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onpointercancel", true, true, undefined, undefined,
    function onpointercancel() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onpointercancel(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onpointerover", true, true, undefined, undefined,
    function onpointerover() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onpointerover(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onpointerout", true, true, undefined, undefined,
    function onpointerout() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onpointerout(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onpointerenter", true, true, undefined, undefined,
    function onpointerenter() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onpointerenter(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onpointerleave", true, true, undefined, undefined,
    function onpointerleave() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onpointerleave(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onselectstart", true, true, undefined, undefined,
    function onselectstart() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onselectstart(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onselectionchange", true, true, undefined, undefined,
    function onselectionchange() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onselectionchange(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onanimationend", true, true, undefined, undefined,
    function onanimationend() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onanimationend(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onanimationiteration", true, true, undefined, undefined,
    function onanimationiteration() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onanimationiteration(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onanimationstart", true, true, undefined, undefined,
    function onanimationstart() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onanimationstart(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "ontransitionrun", true, true, undefined, undefined,
    function ontransitionrun() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ontransitionrun(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "ontransitionstart", true, true, undefined, undefined,
    function ontransitionstart() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ontransitionstart(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "ontransitionend", true, true, undefined, undefined,
    function ontransitionend() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ontransitionend(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "ontransitioncancel", true, true, undefined, undefined,
    function ontransitioncancel() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ontransitioncancel(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "oncopy", true, true, undefined, undefined,
    function oncopy() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function oncopy(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "oncut", true, true, undefined, undefined,
    function oncut() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function oncut(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onpaste", true, true, undefined, undefined,
    function onpaste() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onpaste(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "children", true, true, undefined, undefined,
    function children() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "firstElementChild", true, true, undefined, undefined,
    function firstElementChild() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "lastElementChild", true, true, undefined, undefined,
    function lastElementChild() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "childElementCount", true, true, undefined, undefined,
    function childElementCount() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "activeElement", true, true, undefined, undefined,
    function activeElement() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "styleSheets", true, true, undefined, undefined,
    function styleSheets() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "pointerLockElement", true, true, undefined, undefined,
    function pointerLockElement() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "fullscreenElement", true, true, undefined, undefined,
    function fullscreenElement() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function fullscreenElement(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "adoptedStyleSheets", true, true, undefined, undefined,
    function adoptedStyleSheets() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function adoptedStyleSheets(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "pictureInPictureElement", true, true, undefined, undefined,
    function pictureInPictureElement() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "fonts", true, true, undefined, undefined,
    function fonts() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "adoptNode", true, true, true,
    function adoptNode(param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "append", true, true, true,
    function append() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "captureEvents", true, true, true,
    function captureEvents() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "caretRangeFromPoint", true, true, true,
    function caretRangeFromPoint() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "clear", true, true, true,
    function clear() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "close", true, true, true,
    function close() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "createAttribute", true, true, true,
    function createAttribute(param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "createAttributeNS", true, true, true,
    function createAttributeNS(param0, param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "createCDATASection", true, true, true,
    function createCDATASection(param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "createComment", true, true, true,
    function createComment(param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "createDocumentFragment", true, true, true,
    function createDocumentFragment() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

// window, docuemnt全部盖上代理后.
// 所有的操作. 都被代理着. 返回值. 获取属性, 设置属性
my_env.plugins.def_obj_prop(Document.prototype, "createElement", true, true, true,
    function createElement(tag_name) {
        if (this instanceof Document) {
            let c_elem;
            let obj;
            switch(tag_name){
                case "div":
                    c_elem = my_env.out.$("<div></div>")[0];
                    obj = Object.create(HTMLDivElement.prototype);
                    // obj.__qiao_el__ = c_elem; // 直接把某个特殊对象. 存储在当前dom对象上
                    my_env.memory.nodes.set(obj, c_elem); // 存的时候是目标对象
                    return obj;
                case "span":
                    c_elem = my_env.out.$("<span></span>")[0];
                    obj = Object.create(HTMLSpanElement.prototype);
                    my_env.memory.nodes.set(obj, c_elem);
                    return obj;
                case "canvas":
                    // 为了迎合网站的API. 原型链能对的上
                    c_elem = my_env.out.$("<canvas></canvas>")[0];

                    obj = Object.create(HTMLCanvasElement.prototype);
                    my_env.memory.nodes.set(obj, c_elem);

                    // 上面这个对象是不能画图的. 这个才是真正去画图的
                    let cvs = my_env.out.createCanvas();
                    my_env.memory.dom_cvs.set(obj, cvs);

                    return obj;

                case "iframe":
                    c_elem = my_env.out.$("<iframe></iframe>")[0];
                    obj = Object.create(HTMLIFrameElement.prototype);
                    my_env.memory.nodes.set(obj, c_elem);
                    // 额外的为这个iframe创建一个新的顶级作用域(上下文)
                    // 相当于我们要创建一个全新的window，document，。。。。
                    let win = my_env.out.create_context();
                    // 保存win和obj的关系
                    my_env.memory.wins.set(obj, win);
                    return obj;
            }
            my_env.qiao_log("缺少"+tag_name+"标签,需要去补充");
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "createElementNS", true, true, true,
    function createElementNS(param0, param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "createEvent", true, true, true,
    function createEvent(param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "createExpression", true, true, true,
    function createExpression(param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "createNSResolver", true, true, true,
    function createNSResolver(param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "createNodeIterator", true, true, true,
    function createNodeIterator(param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "createProcessingInstruction", true, true, true,
    function createProcessingInstruction(param0, param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "createRange", true, true, true,
    function createRange() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "createTextNode", true, true, true,
    function createTextNode(param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "createTreeWalker", true, true, true,
    function createTreeWalker(param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "elementFromPoint", true, true, true,
    function elementFromPoint(param0, param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "elementsFromPoint", true, true, true,
    function elementsFromPoint(param0, param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "evaluate", true, true, true,
    function evaluate(param0, param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "execCommand", true, true, true,
    function execCommand(param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "exitFullscreen", true, true, true,
    function exitFullscreen() {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "exitPictureInPicture", true, true, true,
    function exitPictureInPicture() {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "exitPointerLock", true, true, true,
    function exitPointerLock() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "getAnimations", true, true, true,
    function getAnimations() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "getElementById", true, true, true,
    function getElementById(id) {
        if (this instanceof Document) {
            // 通过id检索页面上的内容.
            // 拿到的是cheerio的对象
            let c_obj = my_env.out.$("#"+id);
            if(c_obj.length === 0){ // 没有检索到任何东西
                return null;
            }
            let c_elem = c_obj[0]; // 获取到节点上的数据
            // 判断节点的名称.
            // 根据名称创建不同的标签对象
            // 判断该节点数据是否已经存放在内存中.
            // 如果已经有了该节点的数据. 就直接返回该节点即可

            // cheerio 获取到相同节点的时候. 它拿到的是同一个对象
            for (let [k, v] of my_env.memory.nodes.entries()){
                if(v === c_elem){
                    return k;
                }
            }
            // 能走到这里. 标签还没有进内存
            let obj = null;
            switch(c_elem.name){
                case "div":
                    obj = Object.create(HTMLDivElement.prototype);
                    // 记录 对象和数据
                    my_env.memory.nodes.set(obj, c_elem);
                    return obj;
                case "canvas":
                    // 为了迎合网站的API. 原型链能对的上
                    obj = Object.create(HTMLCanvasElement.prototype);
                    my_env.memory.nodes.set(obj, c_elem);

                    // 上面这个对象是不能画图的. 这个才是真正去画图的
                    let cvs = my_env.out.createCanvas();
                    my_env.memory.dom_cvs.set(obj, cvs);
                    // 前期不用管初始化的操作. 后期如果有问题. 再加.
                    return obj;
                case "a":
                    return;
            }
            debugger;
            return null;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "getElementsByClassName", true, true, true,
    function getElementsByClassName(param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "getElementsByName", true, true, true,
    function getElementsByName(param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "getElementsByTagName", true, true, true,
    function getElementsByTagName(tag_name) {
        if (this instanceof Document) {
            // $(标签)
            let elements = my_env.out.$(tag_name);
            if(elements.length === 0){
                return null;
            }
            let result = Object.create(HTMLCollection.prototype);

            for (let i = 0 ; i < elements.length; i++){
                let el_obj = elements[i]; // 节点数据
                let obj = null;

                for (let [k, v] of my_env.memory.nodes.entries()){
                    if(v === el_obj){
                        obj = k;
                        break;
                    }
                }
                // 该节点是个新的
                if(obj === null){
                    switch (el_obj.name){
                        case "div":
                            obj = Object.create(HTMLDivElement.prototype);
                            my_env.memory.nodes.set(obj, el_obj); // 节点和数据绑定
                            break;
                        case "a":
                            debugger;
                            break;
                    }
                }
                // 把节点存储一起返回 result[i] = obj
                Object.defineProperty(result, i, {
                    configurable:true,
                    enumerable: true,
                    writable: false,
                    value: obj
                });
            }
            return result;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "getElementsByTagNameNS", true, true, true,
    function getElementsByTagNameNS(param0, param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "getSelection", true, true, true,
    function getSelection() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "hasFocus", true, true, true,
    function hasFocus() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "hasStorageAccess", true, true, true,
    function hasStorageAccess() {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "hasUnpartitionedCookieAccess", true, true, true,
    function hasUnpartitionedCookieAccess() {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "importNode", true, true, true,
    function importNode(param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "open", true, true, true,
    function open() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "prepend", true, true, true,
    function prepend() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "queryCommandEnabled", true, true, true,
    function queryCommandEnabled(param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "queryCommandIndeterm", true, true, true,
    function queryCommandIndeterm(param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "queryCommandState", true, true, true,
    function queryCommandState(param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "queryCommandSupported", true, true, true,
    function queryCommandSupported(param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "queryCommandValue", true, true, true,
    function queryCommandValue(param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "querySelector", true, true, true,
    function querySelector(param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "querySelectorAll", true, true, true,
    function querySelectorAll(param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "releaseEvents", true, true, true,
    function releaseEvents() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "replaceChildren", true, true, true,
    function replaceChildren() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "requestStorageAccess", true, true, true,
    function requestStorageAccess() {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "requestStorageAccessFor", true, true, true,
    function requestStorageAccessFor(param0) {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "startViewTransition", true, true, true,
    function startViewTransition() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "webkitCancelFullScreen", true, true, true,
    function webkitCancelFullScreen() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "webkitExitFullscreen", true, true, true,
    function webkitExitFullscreen() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "write", true, true, true,
    function write() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "writeln", true, true, true,
    function writeln() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "fragmentDirective", true, true, undefined, undefined,
    function fragmentDirective() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Document.prototype, "browsingTopics", true, true, true,
    function browsingTopics() {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "hasPrivateToken", true, true, true,
    function hasPrivateToken(param0) {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "hasRedemptionRecord", true, true, true,
    function hasRedemptionRecord(param0) {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Document.prototype, "onscrollend", true, true, undefined, undefined,
    function onscrollend() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onscrollend(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onscrollsnapchange", true, true, undefined, undefined,
    function onscrollsnapchange() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onscrollsnapchange(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "onscrollsnapchanging", true, true, undefined, undefined,
    function onscrollsnapchanging() {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onscrollsnapchanging(value) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Document.prototype, "caretPositionFromPoint", true, true, true,
    function caretPositionFromPoint(param0, param0) {
        if (this instanceof Document) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);
Object.setPrototypeOf(Document.prototype, Node.prototype);