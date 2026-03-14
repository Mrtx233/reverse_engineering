(function(plugins){
    // 重新给函数命名, 专门用来处理get,set
    let rename_func = function(func, name, length){
        re_def_func(func, "name", name);
        if(length!==undefined){
            re_def_func(func, "length", length);
        }
        return func;
    }

    let safe_get_set_func = function(func, name, length){
        rename_func(func, name, length);
        my_env.plugins.set_native(func);
        return func;
    }

    let re_def_func = function(func, pro, val){
        Object.defineProperty(func, pro, {
            configurable: true,
            enumerable: false,
            writable: false,
            value: val
        });
    }

    let re_def_sym = function(constructor){
        Object.defineProperty(constructor.prototype, Symbol.toStringTag, {
            configurable: true,
            enumerable: false,
            value: constructor.name,
            writable: false
        });
        return constructor;
    }

    plugins.rename_func = rename_func;
    plugins.safe_get_set_func = safe_get_set_func;
    plugins.re_def_sym = re_def_sym;

    // // 使用的时候:
    // var f = rename_func(function(){}, "get href", 10086);
    // console.log(f.name);
    // console.log(f.length)

})(my_env.plugins);


