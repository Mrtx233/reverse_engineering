// 构造方法的定义
// 对象的创建
// symbol处理
var HTMLImageElement = function HTMLImageElement() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(HTMLImageElement);

// toString 搞定了
my_env.plugins.set_native(HTMLImageElement);


my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "alt", true, true, undefined, undefined,
    function alt() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function alt(value) {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "src", true, true, undefined, undefined,
    function src() {
        if (this instanceof HTMLImageElement) {
            return this.getAttribute("src");
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function src(value) {
        if (this instanceof HTMLImageElement) {
            let img = my_env.memory.imgs.get(this);
            img.src = value;
            this.width = img.naturalWidth;
            this.height = img.naturalHeight;
            return this.setAttribute("src", value);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "srcset", true, true, undefined, undefined,
    function srcset() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function srcset(value) {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "sizes", true, true, undefined, undefined,
    function sizes() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function sizes(value) {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "crossOrigin", true, true, undefined, undefined,
    function crossOrigin() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function crossOrigin(value) {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "useMap", true, true, undefined, undefined,
    function useMap() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function useMap(value) {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "isMap", true, true, undefined, undefined,
    function isMap() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function isMap(value) {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "width", true, true, undefined, undefined,
    function width() {
        if (this instanceof HTMLImageElement) {
            return this.getAttribute("width");
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function width(value) {
        if (this instanceof HTMLImageElement) {
            let img = my_env.memory.imgs.get(this);
            img.width = value;
            return this.setAttribute("width", value);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "height", true, true, undefined, undefined,
    function height() {
        if (this instanceof HTMLImageElement) {
            return this.getAttribute("height");
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function height(value) {
        if (this instanceof HTMLImageElement) {
            let img = my_env.memory.imgs.get(this);
            img.height = value;
            return this.setAttribute("height", value);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "naturalWidth", true, true, undefined, undefined,
    function naturalWidth() {
        if (this instanceof HTMLImageElement) {
            let img = my_env.memory.imgs.get(this);
            return img.naturalWidth;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "naturalHeight", true, true, undefined, undefined,
    function naturalHeight() {
        if (this instanceof HTMLImageElement) {
            let img = my_env.memory.imgs.get(this);
            return img.naturalHeight;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "complete", true, true, undefined, undefined,
    function complete() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "currentSrc", true, true, undefined, undefined,
    function currentSrc() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "referrerPolicy", true, true, undefined, undefined,
    function referrerPolicy() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function referrerPolicy(value) {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "decoding", true, true, undefined, undefined,
    function decoding() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function decoding(value) {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "fetchPriority", true, true, undefined, undefined,
    function fetchPriority() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function fetchPriority(value) {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "loading", true, true, undefined, undefined,
    function loading() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function loading(value) {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "name", true, true, undefined, undefined,
    function name() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function name(value) {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "lowsrc", true, true, undefined, undefined,
    function lowsrc() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function lowsrc(value) {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "align", true, true, undefined, undefined,
    function align() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function align(value) {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "hspace", true, true, undefined, undefined,
    function hspace() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function hspace(value) {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "vspace", true, true, undefined, undefined,
    function vspace() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function vspace(value) {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "longDesc", true, true, undefined, undefined,
    function longDesc() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function longDesc(value) {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "border", true, true, undefined, undefined,
    function border() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function border(value) {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "x", true, true, undefined, undefined,
    function x() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "y", true, true, undefined, undefined,
    function y() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "decode", true, true, true,
    function decode() {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "browsingTopics", true, true, undefined, undefined,
    function browsingTopics() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function browsingTopics(value) {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "attributionSrc", true, true, undefined, undefined,
    function attributionSrc() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function attributionSrc(value) {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLImageElement.prototype, "sharedStorageWritable", true, true, undefined, undefined,
    function sharedStorageWritable() {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function sharedStorageWritable(value) {
        if (this instanceof HTMLImageElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);
Object.setPrototypeOf(HTMLImageElement.prototype, HTMLElement.prototype);