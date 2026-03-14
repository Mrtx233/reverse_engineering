// 构造方法的定义
// 对象的创建
// symbol处理
var History = function History() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(History);

// toString 搞定了
my_env.plugins.set_native(History);


my_env.plugins.def_obj_prop(History.prototype, "length", true, true, undefined, undefined,
    function length() {
        if (this instanceof History) {
            return 2;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(History.prototype, "scrollRestoration", true, true, undefined, undefined,
    function scrollRestoration() {
        if (this instanceof History) {
            return "auto";
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function scrollRestoration(value) {
        if (this instanceof History) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);



my_env.plugins.def_obj_prop(History.prototype, "state", true, true, undefined, undefined,
    function state() {
        if (this instanceof History) {
            return null;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(History.prototype, "back", true, true, true,
    function back() {
        if (this instanceof History) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(History.prototype, "forward", true, true, true,
    function forward() {
        if (this instanceof History) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(History.prototype, "go", true, true, true,
    function go() {
        if (this instanceof History) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(History.prototype, "pushState", true, true, true,
    function pushState(param0, param0) {
        if (this instanceof History) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(History.prototype, "replaceState", true, true, true,
    function replaceState(param0, param0) {
        if (this instanceof History) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);