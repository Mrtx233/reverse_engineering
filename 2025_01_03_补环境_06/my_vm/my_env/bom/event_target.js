// 构造方法的定义
// 对象的创建
// symbol处理
var EventTarget = function EventTarget() {
    throw new Error("Illegal constructor"); // 777
}
// 处理symbol
my_env.plugins.re_def_sym(EventTarget);

// toString 搞定了
my_env.plugins.set_native(EventTarget);


my_env.plugins.def_obj_prop(EventTarget.prototype, "addEventListener", true, true, true,
    function addEventListener(param0, param0) {
        if (this instanceof EventTarget) {
            debugger;
            return undefined;
        } else {
            throw new TypeError("Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(EventTarget.prototype, "dispatchEvent", true, true, true,
    function dispatchEvent(param0) {
        if (this instanceof EventTarget) {
            debugger;
            return undefined;
        } else {
            throw new TypeError("Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(EventTarget.prototype, "removeEventListener", true, true, true,
    function removeEventListener(param0, param0) {
        if (this instanceof EventTarget) {
            debugger;
            return undefined;
        } else {
            throw new TypeError("Illegal invocation");
        }
    },
);



