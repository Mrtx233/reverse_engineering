// 构造方法的定义
// 对象的创建
// symbol处理
var Text = function Text() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(Text);

// toString 搞定了
my_env.plugins.set_native(Text);


my_env.plugins.def_obj_prop(Text.prototype, "wholeText", true, true, undefined, undefined,
    function wholeText() {
        if (this instanceof Text) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Text.prototype, "assignedSlot", true, true, undefined, undefined,
    function assignedSlot() {
        if (this instanceof Text) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Text.prototype, "splitText", true, true, true,
    function splitText(param0) {
        if (this instanceof Text) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);
Object.setPrototypeOf(Text.prototype, CharacterData.prototype);