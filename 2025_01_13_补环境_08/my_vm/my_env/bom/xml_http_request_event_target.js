// 构造方法的定义
// 对象的创建
// symbol处理
var XMLHttpRequestEventTarget = function XMLHttpRequestEventTarget() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(XMLHttpRequestEventTarget);

// toString 搞定了
my_env.plugins.set_native(XMLHttpRequestEventTarget);


my_env.plugins.def_obj_prop(XMLHttpRequestEventTarget.prototype, "onloadstart", true, true, undefined, undefined,
    function onloadstart() {
        if (this instanceof XMLHttpRequestEventTarget) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onloadstart(value) {
        if (this instanceof XMLHttpRequestEventTarget) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(XMLHttpRequestEventTarget.prototype, "onprogress", true, true, undefined, undefined,
    function onprogress() {
        if (this instanceof XMLHttpRequestEventTarget) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onprogress(value) {
        if (this instanceof XMLHttpRequestEventTarget) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(XMLHttpRequestEventTarget.prototype, "onabort", true, true, undefined, undefined,
    function onabort() {
        if (this instanceof XMLHttpRequestEventTarget) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onabort(value) {
        if (this instanceof XMLHttpRequestEventTarget) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(XMLHttpRequestEventTarget.prototype, "onerror", true, true, undefined, undefined,
    function onerror() {
        if (this instanceof XMLHttpRequestEventTarget) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onerror(value) {
        if (this instanceof XMLHttpRequestEventTarget) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(XMLHttpRequestEventTarget.prototype, "onload", true, true, undefined, undefined,
    function onload() {
        if (this instanceof XMLHttpRequestEventTarget) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onload(value) {
        if (this instanceof XMLHttpRequestEventTarget) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(XMLHttpRequestEventTarget.prototype, "ontimeout", true, true, undefined, undefined,
    function ontimeout() {
        if (this instanceof XMLHttpRequestEventTarget) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ontimeout(value) {
        if (this instanceof XMLHttpRequestEventTarget) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(XMLHttpRequestEventTarget.prototype, "onloadend", true, true, undefined, undefined,
    function onloadend() {
        if (this instanceof XMLHttpRequestEventTarget) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onloadend(value) {
        if (this instanceof XMLHttpRequestEventTarget) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);
Object.setPrototypeOf(XMLHttpRequestEventTarget.prototype, EventTarget.prototype);