// 构造方法的定义
// 对象的创建
// symbol处理
var HTMLCollection = function HTMLCollection() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(HTMLCollection);

// toString 搞定了
my_env.plugins.set_native(HTMLCollection);


my_env.plugins.def_obj_prop(HTMLCollection.prototype, "length", true, true, undefined, undefined,
    function length() {
        if (this instanceof HTMLCollection) {
            return Object.keys(this).length;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(HTMLCollection.prototype, "item", true, true, true,
    function item(param0) {
        if (this instanceof HTMLCollection) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(HTMLCollection.prototype, "namedItem", true, true, true,
    function namedItem(param0) {
        if (this instanceof HTMLCollection) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);
