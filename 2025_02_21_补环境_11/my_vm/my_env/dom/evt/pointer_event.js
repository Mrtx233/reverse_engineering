// 构造方法的定义
// 对象的创建
// symbol处理
var PointerEvent = function PointerEvent(type, options) {
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
    // 注意, 浏览器中, 默认创建出来的事件对象属性值都是有默认值的. 自己给.
    let event_data = my_env.plugins.init_pointer_event({"type": type})
    my_env.memory.events.set(this, event_data);
}
// 处理symbol
my_env.plugins.re_def_sym(PointerEvent);

// toString 搞定了
my_env.plugins.set_native(PointerEvent);


my_env.plugins.def_obj_prop(PointerEvent.prototype, "pointerId", true, true, undefined, undefined,
    function pointerId() {
        if (this instanceof PointerEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(PointerEvent.prototype, "width", true, true, undefined, undefined,
    function width() {
        if (this instanceof PointerEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(PointerEvent.prototype, "height", true, true, undefined, undefined,
    function height() {
        if (this instanceof PointerEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(PointerEvent.prototype, "pressure", true, true, undefined, undefined,
    function pressure() {
        if (this instanceof PointerEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(PointerEvent.prototype, "tiltX", true, true, undefined, undefined,
    function tiltX() {
        if (this instanceof PointerEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(PointerEvent.prototype, "tiltY", true, true, undefined, undefined,
    function tiltY() {
        if (this instanceof PointerEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(PointerEvent.prototype, "azimuthAngle", true, true, undefined, undefined,
    function azimuthAngle() {
        if (this instanceof PointerEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(PointerEvent.prototype, "altitudeAngle", true, true, undefined, undefined,
    function altitudeAngle() {
        if (this instanceof PointerEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(PointerEvent.prototype, "tangentialPressure", true, true, undefined, undefined,
    function tangentialPressure() {
        if (this instanceof PointerEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(PointerEvent.prototype, "twist", true, true, undefined, undefined,
    function twist() {
        if (this instanceof PointerEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(PointerEvent.prototype, "pointerType", true, true, undefined, undefined,
    function pointerType() {
        if (this instanceof PointerEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(PointerEvent.prototype, "isPrimary", true, true, undefined, undefined,
    function isPrimary() {
        if (this instanceof PointerEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(PointerEvent.prototype, "getPredictedEvents", true, true, true,
    function getPredictedEvents() {
        if (this instanceof PointerEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(PointerEvent.prototype, "persistentDeviceId", true, true, undefined, undefined,
    function persistentDeviceId() {
        if (this instanceof PointerEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(PointerEvent.prototype, "getCoalescedEvents", true, true, true,
    function getCoalescedEvents() {
        if (this instanceof PointerEvent) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);
Object.setPrototypeOf(PointerEvent.prototype, MouseEvent.prototype);