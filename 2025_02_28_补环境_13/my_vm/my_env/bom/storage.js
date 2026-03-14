// 构造方法的定义
// 对象的创建
// symbol处理
var Storage = function Storage() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(Storage);

// toString 搞定了
my_env.plugins.set_native(Storage);


my_env.plugins.def_obj_prop(Storage.prototype, "length", true, true, undefined, undefined,
    function length() {
        if (this instanceof Storage) {
            return Object.getOwnPropertyNames(this).length;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Storage.prototype, "clear", true, true, true,
    function clear() {
        if (this instanceof Storage) {
            // 循环所有属性. 挨个删除...
            let names = Object.getOwnPropertyNames(this);
            for (let i = 0 ; i < names.length; i++){
                this.removeItem(names[i]); // 进行删除
            }
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Storage.prototype, "getItem", true, true, true,
    function getItem(key) {
        if (this instanceof Storage) {
            let v = this[key] ? this[key] : null;
            my_env.qiao_log("从",this, "中提取", key, "得到的是", v);
            return v;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Storage.prototype, "key", true, true, true,
    function key(n) {
        if (this instanceof Storage) {
            let v = Object.getOwnPropertyNames(this)[n];
            return v === undefined ? null : v;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Storage.prototype, "removeItem", true, true, true,
    function removeItem(key) {
        if (this instanceof Storage) {
            delete this[key]; // 删除
            my_env.qiao_log("从storage中删除", key);
            return undefined; // 稍后捋细节
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Storage.prototype, "setItem", true, true, true,
    function setItem(key, value) {
        if (this instanceof Storage) {
            my_env.qiao_log("向",this, "中设置", key, ", 值是", value);
            this[key] = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

var localStorage = Object.create(Storage.prototype);
var sessionStorage = Object.create(Storage.prototype);
