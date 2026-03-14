// 构造方法的定义
// 对象的创建
// symbol处理
var HTMLHeadElement = function HTMLHeadElement() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(HTMLHeadElement);

// toString 搞定了
my_env.plugins.set_native(HTMLHeadElement);

Object.setPrototypeOf(HTMLHeadElement.prototype, HTMLElement.prototype);