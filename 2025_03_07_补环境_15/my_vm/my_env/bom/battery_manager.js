// 构造方法的定义
// 对象的创建
// symbol处理
var BatteryManager = function BatteryManager() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(BatteryManager);

// toString 搞定了
my_env.plugins.set_native(BatteryManager);


my_env.plugins.def_obj_prop(BatteryManager.prototype, "charging", true, true, undefined, undefined,
    function charging() {
        if (this instanceof BatteryManager) {
            
            return true;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(BatteryManager.prototype, "chargingTime", true, true, undefined, undefined,
    function chargingTime() {
        if (this instanceof BatteryManager) {
            
            return 0;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(BatteryManager.prototype, "dischargingTime", true, true, undefined, undefined,
    function dischargingTime() {
        if (this instanceof BatteryManager) {
            
            return Infinity;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(BatteryManager.prototype, "level", true, true, undefined, undefined,
    function level() {
        if (this instanceof BatteryManager) {
            
            return 1;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(BatteryManager.prototype, "onchargingchange", true, true, undefined, undefined,
    function onchargingchange() {
        if (this instanceof BatteryManager) {
            
            return null;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onchargingchange(value) {
        if (this instanceof BatteryManager) {
            
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(BatteryManager.prototype, "onchargingtimechange", true, true, undefined, undefined,
    function onchargingtimechange() {
        if (this instanceof BatteryManager) {
            
            return null;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onchargingtimechange(value) {
        if (this instanceof BatteryManager) {
            
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(BatteryManager.prototype, "ondischargingtimechange", true, true, undefined, undefined,
    function ondischargingtimechange() {
        if (this instanceof BatteryManager) {
            
            return null;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ondischargingtimechange(value) {
        if (this instanceof BatteryManager) {
            
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(BatteryManager.prototype, "onlevelchange", true, true, undefined, undefined,
    function onlevelchange() {
        if (this instanceof BatteryManager) {
            
            return null;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onlevelchange(value) {
        if (this instanceof BatteryManager) {
            
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);
Object.setPrototypeOf(BatteryManager.prototype, EventTarget.prototype);