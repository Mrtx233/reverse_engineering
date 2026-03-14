// 构造方法的定义
// 对象的创建
// symbol处理
var IDBRequest = function IDBRequest() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(IDBRequest);

// toString 搞定了
my_env.plugins.set_native(IDBRequest);


my_env.plugins.def_obj_prop(IDBRequest.prototype, "result", true, true, undefined, undefined,
    function result() {
        if (this instanceof IDBRequest) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(IDBRequest.prototype, "error", true, true, undefined, undefined,
    function error() {
        if (this instanceof IDBRequest) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(IDBRequest.prototype, "source", true, true, undefined, undefined,
    function source() {
        if (this instanceof IDBRequest) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(IDBRequest.prototype, "transaction", true, true, undefined, undefined,
    function transaction() {
        if (this instanceof IDBRequest) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(IDBRequest.prototype, "readyState", true, true, undefined, undefined,
    function readyState() {
        if (this instanceof IDBRequest) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(IDBRequest.prototype, "onsuccess", true, true, undefined, undefined,
    function onsuccess() {
        if (this instanceof IDBRequest) {
            return this._onsuccess;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onsuccess(value) {
        if (this instanceof IDBRequest) {
            let _old_value = this._onsuccess;
            this._onsuccess = value;
            if(_old_value){
                this.removeEventListener("success", _old_value);
            }
            this.addEventListener("success", value);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(IDBRequest.prototype, "onerror", true, true, undefined, undefined,
    function onerror() {
        if (this instanceof IDBRequest) {
            return this._onerror;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onerror(value) {
        if (this instanceof IDBRequest) {
            let _old_value = this._onerror;
            this._onerror = value;
            if(_old_value){
                this.removeEventListener("error", _old_value);
            }
            this.addEventListener("error", value);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);
Object.setPrototypeOf(IDBRequest.prototype, EventTarget.prototype);