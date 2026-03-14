// 构造方法的定义
// 对象的创建
// symbol处理
// options. 自己定义一个属性, 是否为系统级别的事件(isSys)
var Event = function Event(type, options) {
    if(arguments.length === 0){
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
    // 构建每一个事件的时候. 都要存储在memory中
    let event_data = my_env.plugins.init_event({"type": type})
    my_env.memory.events.set(this, event_data);
}

// 处理symbol
my_env.plugins.re_def_sym(Event);

// toString 搞定了
my_env.plugins.set_native(Event);


my_env.plugins.def_obj_prop(Event.prototype, "type", true, true, undefined, undefined,
    function type() {
        if (this instanceof Event) {
            // 拿到当前对象对应的数据集
            return my_env.memory.events.get(this)['type'];
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Event.prototype, "target", true, true, undefined, undefined,
    function target() {
        if (this instanceof Event) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Event.prototype, "currentTarget", true, true, undefined, undefined,
    function currentTarget() {
        if (this instanceof Event) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Event.prototype, "eventPhase", true, true, undefined, undefined,
    function eventPhase() {
        if (this instanceof Event) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Event.prototype, "bubbles", true, true, undefined, undefined,
    function bubbles() {
        if (this instanceof Event) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Event.prototype, "cancelable", true, true, undefined, undefined,
    function cancelable() {
        if (this instanceof Event) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Event.prototype, "defaultPrevented", true, true, undefined, undefined,
    function defaultPrevented() {
        if (this instanceof Event) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Event.prototype, "composed", true, true, undefined, undefined,
    function composed() {
        if (this instanceof Event) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Event.prototype, "timeStamp", true, true, undefined, undefined,
    function timeStamp() {
        if (this instanceof Event) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Event.prototype, "srcElement", true, true, undefined, undefined,
    function srcElement() {
        if (this instanceof Event) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Event.prototype, "returnValue", true, true, undefined, undefined,
    function returnValue() {
        if (this instanceof Event) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function returnValue(value) {
        if (this instanceof Event) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Event.prototype, "cancelBubble", true, true, undefined, undefined,
    function cancelBubble() {
        if (this instanceof Event) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function cancelBubble(value) {
        if (this instanceof Event) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Event.prototype, "NONE", false, true, false,
    0,
);

my_env.plugins.def_obj_prop(Event.prototype, "CAPTURING_PHASE", false, true, false,
    1,
);

my_env.plugins.def_obj_prop(Event.prototype, "AT_TARGET", false, true, false,
    2,
);

my_env.plugins.def_obj_prop(Event.prototype, "BUBBLING_PHASE", false, true, false,
    3,
);

my_env.plugins.def_obj_prop(Event.prototype, "composedPath", true, true, true,
    function composedPath() {
        if (this instanceof Event) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Event.prototype, "initEvent", true, true, true,
    function initEvent(param0) {
        if (this instanceof Event) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Event.prototype, "preventDefault", true, true, true,
    function preventDefault() {
        if (this instanceof Event) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Event.prototype, "stopImmediatePropagation", true, true, true,
    function stopImmediatePropagation() {
        if (this instanceof Event) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Event.prototype, "stopPropagation", true, true, true,
    function stopPropagation() {
        if (this instanceof Event) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);