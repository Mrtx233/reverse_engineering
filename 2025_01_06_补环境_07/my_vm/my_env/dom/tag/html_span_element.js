// 构造方法的定义
// 对象的创建
// symbol处理
var HTMLSpanElement = function HTMLSpanElement() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(HTMLSpanElement);

// toString 搞定了
my_env.plugins.set_native(HTMLSpanElement);

Object.setPrototypeOf(HTMLSpanElement.prototype, HTMLElement.prototype);