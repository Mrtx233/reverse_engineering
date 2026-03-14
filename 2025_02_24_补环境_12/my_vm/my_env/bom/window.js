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

my_env.plugins.def_obj_prop(window, "top", false, true, undefined, undefined,
    function top(){
       return window;
    },
    undefined
);

my_env.plugins.def_obj_prop(window, "name", true, true, undefined, undefined,
    function name(){
        let win_name = window.__qiao_name__;
       return win_name ? win_name : "";
    },
    function name(value){
       window.__qiao_name__ = value;
    }
);
my_env.plugins.def_obj_prop(window, "self", true, true, undefined, undefined,
    function self(){
        return window;
    },
    function self(value){
        console.log("有人给window.self设置东西.....", value);
        window.__se__lf__ = value;
    }
);

my_env.plugins.def_obj_prop(window, "history", true, true, undefined, undefined,
    function history(){
        return window;
    },
    undefined
);


my_env.plugins.def_obj_prop(window, "indexedDB", true, true, undefined, undefined,
    function indexedDB(){
       let __indexed_db__ = window.__indexed_db__;
       if (__indexed_db__ === undefined){
           __indexed_db__ = Object.create(IDBFactory.prototype);
           window.__indexed_db__ = __indexed_db__;
       }
       return __indexed_db__;
    },
    undefined
);

my_env.plugins.def_obj_prop(window, "DOMParser", true, false, true,
    function DOMParser(){
        debugger;
        my_env.qiao_log("执行了window.DOMParser()");
    }
);


window.setTimeout = my_env.plugins.set_native(function setTimeout(func, tm){
    my_env.qiao_log("setTimeout", func, tm);
    return my_env.out.setTimeout(func, tm);
});

window.setInterval = my_env.plugins.set_native(function setInterval(func, tm){
    my_env.qiao_log("setInterval", func, tm);
    return my_env.out.setInterval(func, tm);
});

window.clearTimeout = my_env.plugins.set_native(function clearTimeout(func, tm){
    my_env.qiao_log("clearTimeout", func, tm);
    return my_env.out.clearTimeout(func, tm);
});

window.clearInterval = my_env.plugins.set_native(function clearInterval(func, tm){
    my_env.qiao_log("clearInterval", func, tm);
    return my_env.out.clearInterval(func, tm);
});


window.Request = my_env.plugins.set_native(function Request(){
    debugger;
    my_env.qiao_log("有人执行了window.Request()==>需要补充");
});

window.fetch = my_env.plugins.set_native(function fetch(){
    debugger;
    my_env.qiao_log("有人执行了window.fetch()==>需要补充");
});

window.chrome = {
    "runtime": {
        "ContextType": {
            "BACKGROUND": "BACKGROUND",
            "DEVELOPER_TOOLS": "DEVELOPER_TOOLS",
            "OFFSCREEN_DOCUMENT": "OFFSCREEN_DOCUMENT",
            "POPUP": "POPUP",
            "SIDE_PANEL": "SIDE_PANEL",
            "TAB": "TAB"
        },
        "OnInstalledReason": {
            "CHROME_UPDATE": "chrome_update",
            "INSTALL": "install",
            "SHARED_MODULE_UPDATE": "shared_module_update",
            "UPDATE": "update"
        },
        "OnRestartRequiredReason": {
            "APP_UPDATE": "app_update",
            "OS_UPDATE": "os_update",
            "PERIODIC": "periodic"
        },
        "PlatformArch": {
            "ARM": "arm",
            "ARM64": "arm64",
            "MIPS": "mips",
            "MIPS64": "mips64",
            "X86_32": "x86-32",
            "X86_64": "x86-64"
        },
        "PlatformNaclArch": {
            "ARM": "arm",
            "MIPS": "mips",
            "MIPS64": "mips64",
            "X86_32": "x86-32",
            "X86_64": "x86-64"
        },
        "PlatformOs": {
            "ANDROID": "android",
            "CROS": "cros",
            "FUCHSIA": "fuchsia",
            "LINUX": "linux",
            "MAC": "mac",
            "OPENBSD": "openbsd",
            "WIN": "win"
        },
        "RequestUpdateCheckStatus": {
            "NO_UPDATE": "no_update",
            "THROTTLED": "throttled",
            "UPDATE_AVAILABLE": "update_available"
        }
    },
    "csi": my_env.plugins.set_native(function csi(){
        debugger;
    }),
    "loadTimes": my_env.plugins.set_native(function loadTimes(){
        debugger;
    })
}

window = my_env.plugins.obj_proxy(window, "window");