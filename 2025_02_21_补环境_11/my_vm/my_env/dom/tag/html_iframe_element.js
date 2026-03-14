// 构造方法的定义
// 对象的创建
// symbol处理
var HTMLIFrameElement = function HTMLIFrameElement() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(HTMLIFrameElement);

// toString 搞定了
my_env.plugins.set_native(HTMLIFrameElement);


my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "src", true, true, undefined, undefined,
    function src() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function src(value) {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "srcdoc", true, true, undefined, undefined,
    function srcdoc() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function srcdoc(value) {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "name", true, true, undefined, undefined,
    function name() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function name(value) {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "sandbox", true, true, undefined, undefined,
    function sandbox() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function sandbox(value) {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "allowFullscreen", true, true, undefined, undefined,
    function allowFullscreen() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function allowFullscreen(value) {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "width", true, true, undefined, undefined,
    function width() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function width(value) {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "height", true, true, undefined, undefined,
    function height() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function height(value) {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "contentDocument", true, true, undefined, undefined,
    function contentDocument() {
        if (this instanceof HTMLIFrameElement) {
            return my_env.memory.wins.get(this).document;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "contentWindow", true, true, undefined, undefined,
    function contentWindow() {
        if (this instanceof HTMLIFrameElement) {
            return my_env.memory.wins.get(this);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "referrerPolicy", true, true, undefined, undefined,
    function referrerPolicy() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function referrerPolicy(value) {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "csp", true, true, undefined, undefined,
    function csp() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function csp(value) {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "allow", true, true, undefined, undefined,
    function allow() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function allow(value) {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "featurePolicy", true, true, undefined, undefined,
    function featurePolicy() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "loading", true, true, undefined, undefined,
    function loading() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function loading(value) {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "align", true, true, undefined, undefined,
    function align() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function align(value) {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "scrolling", true, true, undefined, undefined,
    function scrolling() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function scrolling(value) {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "frameBorder", true, true, undefined, undefined,
    function frameBorder() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function frameBorder(value) {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "longDesc", true, true, undefined, undefined,
    function longDesc() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function longDesc(value) {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "marginHeight", true, true, undefined, undefined,
    function marginHeight() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function marginHeight(value) {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "marginWidth", true, true, undefined, undefined,
    function marginWidth() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function marginWidth(value) {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "getSVGDocument", true, true, true,
    function getSVGDocument() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "credentialless", true, true, undefined, undefined,
    function credentialless() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function credentialless(value) {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "allowPaymentRequest", true, true, undefined, undefined,
    function allowPaymentRequest() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function allowPaymentRequest(value) {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "privateToken", true, true, undefined, undefined,
    function privateToken() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function privateToken(value) {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "browsingTopics", true, true, undefined, undefined,
    function browsingTopics() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function browsingTopics(value) {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "adAuctionHeaders", true, true, undefined, undefined,
    function adAuctionHeaders() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function adAuctionHeaders(value) {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLIFrameElement.prototype, "sharedStorageWritable", true, true, undefined, undefined,
    function sharedStorageWritable() {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function sharedStorageWritable(value) {
        if (this instanceof HTMLIFrameElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);
Object.setPrototypeOf(HTMLIFrameElement.prototype, HTMLElement.prototype);