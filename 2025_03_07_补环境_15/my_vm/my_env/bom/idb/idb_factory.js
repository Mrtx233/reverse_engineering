// 构造方法的定义
// 对象的创建
// symbol处理
var IDBFactory = function IDBFactory() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(IDBFactory);

// toString 搞定了
my_env.plugins.set_native(IDBFactory);


my_env.plugins.def_obj_prop(IDBFactory.prototype, "cmp", true, true, true,
    function cmp(param0, param1) {
        if (this instanceof IDBFactory) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(IDBFactory.prototype, "databases", true, true, true,
    function databases() {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(IDBFactory.prototype, "deleteDatabase", true, true, true,
    function deleteDatabase(param0) {
        if (this instanceof IDBFactory) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(IDBFactory.prototype, "open", true, true, true,
    function open(param0) {
        if (this instanceof IDBFactory) {

            my_env.qiao_log("打开的数据库信息是", arguments);
            debugger;
            let obj = Object.create(IDBOpenDBRequest.prototype);
            return obj;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);