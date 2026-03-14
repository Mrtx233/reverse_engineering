// 构造方法的定义
// 对象的创建
// symbol处理
var MimeTypeArray = function MimeTypeArray() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(MimeTypeArray);

// toString 搞定了
my_env.plugins.set_native(MimeTypeArray);


my_env.plugins.def_obj_prop(MimeTypeArray.prototype, "length", true, true, undefined, undefined,
    function length() {
        if (this instanceof MimeTypeArray) {
           return my_env.memory.mms.size;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(MimeTypeArray.prototype, "item", true, true, true,
    function item(param0) {
        if (this instanceof MimeTypeArray) {
            return this[param0] ? this[param0]: null; // 直接返回即可
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(MimeTypeArray.prototype, "namedItem", true, true, true,
    function namedItem(param0) {
        if (this instanceof MimeTypeArray) {
            let obj = Object.getOwnPropertyDescriptor(this, param0)
            if(obj){
                if (!obj.enumerable){
                    return obj.value; // 不可被枚举的. 返回数据
                }
            }
            return null;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);


my_env.plugins.def_obj_prop(MimeTypeArray.prototype, Symbol.iterator, true, false, true,
    function* () {
        // 获取所有可枚举的属性
        const keys = Object.keys(this);
        for(const key of keys) {
            yield this[key];
        }
    },
);

