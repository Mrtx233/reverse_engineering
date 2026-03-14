// 构造方法的定义
// 对象的创建
// symbol处理
var HTMLHtmlElement = function HTMLHtmlElement() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(HTMLHtmlElement);

// toString 搞定了
my_env.plugins.set_native(HTMLHtmlElement);


my_env.plugins.def_obj_prop(HTMLHtmlElement.prototype, "version", true, true, undefined, undefined,
    function version() {
        if (this instanceof HTMLHtmlElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function version(value) {
        if (this instanceof HTMLHtmlElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);
Object.setPrototypeOf(HTMLHtmlElement.prototype, HTMLElement.prototype);