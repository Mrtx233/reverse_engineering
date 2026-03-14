// 构造方法的定义
// 对象的创建
// symbol处理
var PluginArray = function PluginArray() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(PluginArray);

// toString 搞定了
my_env.plugins.set_native(PluginArray);


my_env.plugins.def_obj_prop(PluginArray.prototype, "length", true, true, undefined, undefined,
    function length() {
        if (this instanceof PluginArray) {
            return my_env.memory.pgs.size;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(PluginArray.prototype, "item", true, true, true,
    function item(param0) {
        if (this instanceof PluginArray) {
            return this[param0] ? this[param0]: null;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(PluginArray.prototype, "namedItem", true, true, true,
    function namedItem(param0) {
        if (this instanceof PluginArray) {
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

my_env.plugins.def_obj_prop(PluginArray.prototype, "refresh", true, true, true,
    function refresh() {
        if (this instanceof PluginArray) {
            debugger;
            return undefined;   // 不知道这玩意干啥的. 直接放着. 就行了.
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(PluginArray.prototype, Symbol.iterator, true, false, true,
    function* () {
        // 获取所有可枚举的属性
        const keys = Object.keys(this);
        for(const key of keys) {
            yield this[key];
        }
    },
);


(function(){
    // navigator
    // 构建 -> mimeTypes
    // 构建 -> plugins
    // 浏览器查看plugins的结构
    // Object.getOwnPropertyNames(navigator.plugins)

    // 构建mimetypes
    let mimeTypes = Object.create(MimeTypeArray.prototype);

    for (let j = 0; j < my_env.basic_info.mms.length; j++) {
        let basic_info_ms = my_env.basic_info.mms[j]; // 获取mimetype基础数据
        let mt = Object.create(MimeType.prototype); // 构建mimetype对象
        // mimetype的基础信息保存
        my_env.memory.mms.set(mt, basic_info_ms);

        Object.defineProperty(mimeTypes, j, {
            configurable: true,
            enumerable: true,
            writable: false,
            value: mt
        });
        Object.defineProperty(mimeTypes, basic_info_ms["type"], {
            configurable: true,
            enumerable: false,
            writable: false,
            value: mt
        });
    }


    // 构建plugins
    var plugins = Object.create(PluginArray.prototype);

    // plugins中的属性信息 -> 5
    for (let i = 0; i < my_env.basic_info.pgs.length; i++) {
        let pg = my_env.basic_info.pgs[i]; // 取plugin的基础数据
        let plugin = Object.create(Plugin.prototype);

        // 循环mimeTypes  获取到每一个mimeType, 装到plugin中即可
        for (let j = 0 ; j < mimeTypes.length; j++){
            let mt = mimeTypes[j];
            Object.defineProperty(plugin, j, {
                configurable: true,
                enumerable: true,
                writable: false,
                value: mt
            });

            Object.defineProperty(plugin, mt.type, {
                configurable: true,
                enumerable: true,
                writable: false,
                value: mt
            });
        }

        // 构建每一个plugin对象的时候. 都有基础数据.
        // 单独存储plugin的数据. 然后再原型链上. 获取该属性的值
        // 记录该plugin和基础数据的关系

        my_env.memory.pgs.set(plugin, pg);

        // 设置各种信息
        // 把plugin设置到plugins里面
        Object.defineProperty(plugins, i, {
            configurable: true,
            enumerable: true,
            writable: false,
            value: plugin
        });
        Object.defineProperty(plugins, pg['name'], {
            configurable: true,
            enumerable: false,
            writable: false,
            value: plugin
        });
    }

    // 最后完善mimetypes中的enabledPlugin
    for (let j = 0 ; j < mimeTypes.length; j++){
        let mmt = mimeTypes[j];
        my_env.memory.mms.get(mmt).enabledPlugin = plugins[0];
    }

    // navigator.plugins[0] === navigator.plugins['PDF Viewer']
    // true  777   999

    // navigator.plugins = plugins;
    // navigator.mimeTypes = mimeTypes;
    my_env.memory.navigator.plugins = plugins;
    my_env.memory.navigator.mimeTypes = mimeTypes;
})();

// 逻辑. 结构. 除了迭代器以外. 全都一样了.
// 补DOM
