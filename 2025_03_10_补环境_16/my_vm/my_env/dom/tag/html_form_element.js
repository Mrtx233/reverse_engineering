// 构造方法的定义
// 对象的创建
// symbol处理
var HTMLFormElement = function HTMLFormElement() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(HTMLFormElement);

// toString 搞定了
my_env.plugins.set_native(HTMLFormElement);


my_env.plugins.def_obj_prop(HTMLFormElement.prototype, "acceptCharset", true, true, undefined, undefined,
    function acceptCharset() {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function acceptCharset(value) {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLFormElement.prototype, "action", true, true, undefined, undefined,
    function action() {
        if (this instanceof HTMLFormElement) {
            debugger; // form.action, 而不是form.getAttribute("action")
            return this.getAttribute("action");
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function action(value) {
        if (this instanceof HTMLFormElement) {
            this.setAttribute("action", value);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLFormElement.prototype, "autocomplete", true, true, undefined, undefined,
    function autocomplete() {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function autocomplete(value) {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLFormElement.prototype, "enctype", true, true, undefined, undefined,
    function enctype() {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function enctype(value) {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLFormElement.prototype, "encoding", true, true, undefined, undefined,
    function encoding() {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function encoding(value) {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLFormElement.prototype, "method", true, true, undefined, undefined,
    function method() {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function method(value) {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLFormElement.prototype, "name", true, true, undefined, undefined,
    function name() {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function name(value) {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLFormElement.prototype, "noValidate", true, true, undefined, undefined,
    function noValidate() {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function noValidate(value) {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLFormElement.prototype, "target", true, true, undefined, undefined,
    function target() {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function target(value) {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLFormElement.prototype, "rel", true, true, undefined, undefined,
    function rel() {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function rel(value) {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLFormElement.prototype, "relList", true, true, undefined, undefined,
    function relList() {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function relList(value) {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLFormElement.prototype, "elements", true, true, undefined, undefined,
    function elements() {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(HTMLFormElement.prototype, "length", true, true, undefined, undefined,
    function length() {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(HTMLFormElement.prototype, "checkValidity", true, true, true,
    function checkValidity() {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(HTMLFormElement.prototype, "reportValidity", true, true, true,
    function reportValidity() {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(HTMLFormElement.prototype, "requestSubmit", true, true, true,
    function requestSubmit() {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(HTMLFormElement.prototype, "reset", true, true, true,
    function reset() {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(HTMLFormElement.prototype, "submit", true, true, true,
    function submit() {
        if (this instanceof HTMLFormElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);
Object.setPrototypeOf(HTMLFormElement.prototype, HTMLElement.prototype);