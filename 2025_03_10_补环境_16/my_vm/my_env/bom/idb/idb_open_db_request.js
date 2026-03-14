// 构造方法的定义
// 对象的创建
// symbol处理
var IDBOpenDBRequest = function IDBOpenDBRequest() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(IDBOpenDBRequest);

// toString 搞定了
my_env.plugins.set_native(IDBOpenDBRequest);


my_env.plugins.def_obj_prop(IDBOpenDBRequest.prototype, "onblocked", true, true, undefined, undefined,
    function onblocked() {
        if (this instanceof IDBOpenDBRequest) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onblocked(value) {
        if (this instanceof IDBOpenDBRequest) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(IDBOpenDBRequest.prototype, "onupgradeneeded", true, true, undefined, undefined,
    function onupgradeneeded() {
        if (this instanceof IDBOpenDBRequest) {
            return this._onupgradeneeded;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onupgradeneeded(value) {
        if (this instanceof IDBOpenDBRequest) {
            let _old_value = this._onupgradeneeded;
            this._onupgradeneeded = value;
            if(_old_value){
                this.removeEventListener("upgradeneeded", _old_value);
            }
            this.addEventListener("upgradeneeded", value);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);
Object.setPrototypeOf(IDBOpenDBRequest.prototype, IDBRequest.prototype);