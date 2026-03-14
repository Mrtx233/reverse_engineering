// 构造方法的定义
// 对象的创建
// symbol处理
var HTMLDivElement = function HTMLDivElement() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(HTMLDivElement);

// toString 搞定了
my_env.plugins.set_native(HTMLDivElement);


my_env.plugins.def_obj_prop(HTMLDivElement.prototype, "align", true, true, undefined, undefined,
    function align() {
        if (this instanceof HTMLDivElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function align(value) {
        if (this instanceof HTMLDivElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);
Object.setPrototypeOf(HTMLDivElement.prototype, HTMLElement.prototype);