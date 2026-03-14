// 简单的补充一下window


// 构造方法的定义
// 对象的创建
// symbol处理
var Window = function Window() {
    throw new Error("Illegal constructor"); // 777
}
// 处理symbol
my_env.plugins.re_def_sym(Window);

// toString 搞定了
my_env.plugins.set_native(Window);


my_env.plugins.def_obj_prop(Window.prototype, "TEMPORARY", false, true, false,
    0,
);

my_env.plugins.def_obj_prop(Window.prototype, "PERSISTENT", false, true, false,
    1,
);

my_env.plugins.def_obj_prop(Window.prototype, "constructor", true, false, true,
    function Window() {
        if (this instanceof Window) {
            debugger;
            return undefined;
        } else {
            throw new TypeError("Illegal invocation");
        }
    },
);

Object.setPrototypeOf(Window.prototype, EventTarget.prototype);

window = globalThis;
Object.setPrototypeOf(window, Window);
