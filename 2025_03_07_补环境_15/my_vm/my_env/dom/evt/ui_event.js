// 构造方法的定义
// 对象的创建
// symbol处理
var UIEvent = function UIEvent(type, options) {
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
    let event_data = my_env.plugins.init_ui_event({"type": type})
    my_env.memory.events.set(this, event_data);
}
// 处理symbol
my_env.plugins.re_def_sym(UIEvent);

// toString 搞定了
my_env.plugins.set_native(UIEvent);


my_env.plugins.def_obj_prop(UIEvent.prototype, "view", true, true, undefined, undefined,
    function view() {
        if (this instanceof UIEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(UIEvent.prototype, "detail", true, true, undefined, undefined,
    function detail() {
        if (this instanceof UIEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(UIEvent.prototype, "sourceCapabilities", true, true, undefined, undefined,
    function sourceCapabilities() {
        if (this instanceof UIEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(UIEvent.prototype, "which", true, true, undefined, undefined,
    function which() {
        if (this instanceof UIEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(UIEvent.prototype, "initUIEvent", true, true, true,
    function initUIEvent(param0) {
        if (this instanceof UIEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);
Object.setPrototypeOf(UIEvent.prototype, Event.prototype);