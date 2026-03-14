// 简单的补充一下window


// 构造方法的定义
// 对象的创建
// symbol处理
var Window = function Window() {
    my_env.plugins.throw_error(TypeError,"Illegal constructor"); // 777
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

Object.setPrototypeOf(Window.prototype, EventTarget.prototype);

window = globalThis;
Object.setPrototypeOf(window, Window.prototype); // 前面写错了.

my_env.plugins.def_obj_prop(window, "onload", true, true, undefined, undefined,
    function onload(){
        // 这里的this是有问题的...把this换成window
    },
    function onload(func){
        window.addEventListener("load", func);
    }
);

window = my_env.plugins.obj_proxy(window, "window");