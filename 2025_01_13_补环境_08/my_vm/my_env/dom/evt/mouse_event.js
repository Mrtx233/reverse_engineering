// 构造方法的定义
// 对象的创建
// symbol处理
var MouseEvent = function MouseEvent() {
    if(arguments.length ===0){
        my_env.plugins.throw_error(TypeError, "Failed to construct 'Event': 1 argument required, but only 0 present.");
    }
    if(options && options['isSys']){
        my_env.plugins.def_obj_prop(this, "isTrusted", false, true, undefined, undefined,
            function isTrusted() {
                return true;
            },
            undefined
        );
    } else {
        my_env.plugins.def_obj_prop(this, "isTrusted", false, true, undefined, undefined,
            function isTrusted() {
                return false;
            },
            undefined
        );
    }
    let event_data = my_env.plugins.init_mouse_event({"type": type})
    my_env.memory.events.set(this, event_data);
}
// 处理symbol
my_env.plugins.re_def_sym(MouseEvent);

// toString 搞定了
my_env.plugins.set_native(MouseEvent);


my_env.plugins.def_obj_prop(MouseEvent.prototype, "screenX", true, true, undefined, undefined,
    function screenX() {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "screenY", true, true, undefined, undefined,
    function screenY() {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "clientX", true, true, undefined, undefined,
    function clientX() {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "clientY", true, true, undefined, undefined,
    function clientY() {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "ctrlKey", true, true, undefined, undefined,
    function ctrlKey() {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "shiftKey", true, true, undefined, undefined,
    function shiftKey() {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "altKey", true, true, undefined, undefined,
    function altKey() {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "metaKey", true, true, undefined, undefined,
    function metaKey() {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "button", true, true, undefined, undefined,
    function button() {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "buttons", true, true, undefined, undefined,
    function buttons() {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "relatedTarget", true, true, undefined, undefined,
    function relatedTarget() {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "pageX", true, true, undefined, undefined,
    function pageX() {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "pageY", true, true, undefined, undefined,
    function pageY() {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "x", true, true, undefined, undefined,
    function x() {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "y", true, true, undefined, undefined,
    function y() {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "offsetX", true, true, undefined, undefined,
    function offsetX() {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "offsetY", true, true, undefined, undefined,
    function offsetY() {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "movementX", true, true, undefined, undefined,
    function movementX() {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "movementY", true, true, undefined, undefined,
    function movementY() {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "fromElement", true, true, undefined, undefined,
    function fromElement() {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "toElement", true, true, undefined, undefined,
    function toElement() {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "layerX", true, true, undefined, undefined,
    function layerX() {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "layerY", true, true, undefined, undefined,
    function layerY() {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "getModifierState", true, true, true,
    function getModifierState(param0) {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(MouseEvent.prototype, "initMouseEvent", true, true, true,
    function initMouseEvent(param0) {
        if (this instanceof MouseEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);
Object.setPrototypeOf(MouseEvent.prototype, UIEvent.prototype);