// 构造方法的定义
// 对象的创建
// symbol处理
var HTMLAllCollection = function HTMLAllCollection() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(HTMLAllCollection);

// toString 搞定了
my_env.plugins.set_native(HTMLAllCollection);


my_env.plugins.def_obj_prop(HTMLAllCollection.prototype, "length", true, true, undefined, undefined,
    function length() {
        if (this instanceof HTMLAllCollection) {
            return 3;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(HTMLAllCollection.prototype, "item", true, true, true,
    function item() {
        if (this instanceof HTMLAllCollection) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(HTMLAllCollection.prototype, "namedItem", true, true, true,
    function namedItem(param0) {
        if (this instanceof HTMLAllCollection) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);