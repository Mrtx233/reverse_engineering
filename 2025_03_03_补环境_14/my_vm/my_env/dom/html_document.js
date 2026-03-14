// 构造方法的定义
// 对象的创建
// symbol处理
var HTMLDocument = function HTMLDocument() {
        my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(HTMLDocument);

// toString 搞定了
my_env.plugins.set_native(HTMLDocument);

Object.setPrototypeOf(HTMLDocument.prototype, Document.prototype);

document = Object.create(HTMLDocument.prototype);
// 挂代理
document = my_env.plugins.obj_proxy(document, "document");