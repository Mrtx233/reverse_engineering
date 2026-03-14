// 构造方法的定义
// 对象的创建
// symbol处理
var Plugin = function Plugin() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(Plugin);

// toString 搞定了
my_env.plugins.set_native(Plugin);


my_env.plugins.def_obj_prop(Plugin.prototype, "name", true, true, undefined, undefined,
    function name() {
        if (this instanceof Plugin) {
            // 在这里无法区分. 当前this是哪一个对象
            // 就无法给出正确的name值
            let pg = my_env.memory.pgs.get(this) // plugin的基础数据
            return pg['name'];
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Plugin.prototype, "filename", true, true, undefined, undefined,
    function filename() {
        if (this instanceof Plugin) {
            let pg = my_env.memory.pgs.get(this) // plugin的基础数据
            return pg['filename'];
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Plugin.prototype, "description", true, true, undefined, undefined,
    function description() {
        if (this instanceof Plugin) {
            let pg = my_env.memory.pgs.get(this) // plugin的基础数据
            return pg['description'];
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Plugin.prototype, "length", true, true, undefined, undefined,
    function length() {
        if (this instanceof Plugin) {
            let pg = my_env.memory.pgs.get(this) // plugin的基础数据
            return pg['length'];
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Plugin.prototype, "item", true, true, true,
    function item(param0) {
        if (this instanceof Plugin) {
            return this[param0] ? this[param0]: null;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Plugin.prototype, "namedItem", true, true, true,
    function namedItem(param0) {
        if (this instanceof Plugin) {
            let obj = Object.getOwnPropertyDescriptor(this, param0);
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

my_env.plugins.def_obj_prop(Plugin.prototype, Symbol.iterator, true, false, true,
    function* () {
        // 获取所有可枚举的属性
        const keys = Object.keys(this);
        for(const key of keys) {
            yield this[key];
        }
    },
);