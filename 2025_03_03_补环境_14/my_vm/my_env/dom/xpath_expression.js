// 构造方法的定义
// 对象的创建
// symbol处理
var XPathExpression = function XPathExpression() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(XPathExpression);

// toString 搞定了
my_env.plugins.set_native(XPathExpression);


my_env.plugins.def_obj_prop(XPathExpression.prototype, "evaluate", true, true, true,
    function evaluate(param0) {
        if (this instanceof XPathExpression) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);