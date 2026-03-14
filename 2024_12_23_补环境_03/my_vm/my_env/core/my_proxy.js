(function(plugins){
    function obj_proxy(obj, name){
    return new Proxy(obj, {
        get(target, pro, rece){
            var val = Reflect.get(target, pro, rece);
            console.log("从", name, "获取", pro, "该属性的值是", val);
            if (typeof val == 'object'){
                return obj_proxy(val, pro); // 灵魂~~~ 777777 999
            } else if(typeof val == 'function'){
                return func_proxy(val, pro);
            }
            return val;
        },
        set(target, pro, val, rece){
            console.log("向",  name, "设置", pro, "该属性的值是", val);
            Reflect.set(target, pro, val, rece);
        }
    });
}
    function func_proxy(func, name){
    return new Proxy(func, {
        apply(target, thisArg, arg_list){
             var ret = Reflect.apply(target, thisArg, arg_list);
             console.log("调用了"+name+"函数", "函数的返回值是", ret);
             if (typeof ret == 'object'){
                return obj_proxy(ret, name+"的返回值"); // 灵魂~~~ 777777 999
             } else if(typeof ret == 'function'){
                return func_proxy(ret, name+"的返回值");
             }
             return ret;
        }
    })
}

    plugins.obj_proxy = obj_proxy;
    plugins.func_proxy = func_proxy;
})(my_env.plugins);
