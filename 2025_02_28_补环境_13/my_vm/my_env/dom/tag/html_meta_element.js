// 构造方法的定义
// 对象的创建
// symbol处理
var HTMLMetaElement = function HTMLMetaElement() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(HTMLMetaElement);

// toString 搞定了
my_env.plugins.set_native(HTMLMetaElement);


my_env.plugins.def_obj_prop(HTMLMetaElement.prototype, "name", true, true, undefined, undefined,
    function name() {
        if (this instanceof HTMLMetaElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function name(value) {
        if (this instanceof HTMLMetaElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLMetaElement.prototype, "httpEquiv", true, true, undefined, undefined,
    function httpEquiv() {
        if (this instanceof HTMLMetaElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function httpEquiv(value) {
        if (this instanceof HTMLMetaElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLMetaElement.prototype, "content", true, true, undefined, undefined,
    function content() {
        if (this instanceof HTMLMetaElement) {
            return this.getAttribute("content");
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function content(value) {
        if (this instanceof HTMLMetaElement) {
            return this.setAttribute("content", value);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLMetaElement.prototype, "media", true, true, undefined, undefined,
    function media() {
        if (this instanceof HTMLMetaElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function media(value) {
        if (this instanceof HTMLMetaElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLMetaElement.prototype, "scheme", true, true, undefined, undefined,
    function scheme() {
        if (this instanceof HTMLMetaElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function scheme(value) {
        if (this instanceof HTMLMetaElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);
Object.setPrototypeOf(HTMLMetaElement.prototype, HTMLElement.prototype);