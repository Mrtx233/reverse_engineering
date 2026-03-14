// 构造方法的定义
// 对象的创建
// symbol处理
var MimeType = function MimeType() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(MimeType);

// toString 搞定了
my_env.plugins.set_native(MimeType);


my_env.plugins.def_obj_prop(MimeType.prototype, "type", true, true, undefined, undefined,
    function type() {
        if (this instanceof MimeType) {
            return my_env.memory.mms.get(this).type;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MimeType.prototype, "suffixes", true, true, undefined, undefined,
    function suffixes() {
        if (this instanceof MimeType) {
            return my_env.memory.mms.get(this).suffixes;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MimeType.prototype, "description", true, true, undefined, undefined,
    function description() {
        if (this instanceof MimeType) {
            return my_env.memory.mms.get(this).description;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MimeType.prototype, "enabledPlugin", true, true, undefined, undefined,
    function enabledPlugin() {
        if (this instanceof MimeType) {
            return my_env.memory.mms.get(this).enabledPlugin;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

