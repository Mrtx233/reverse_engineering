(function (plugins) {
    function obj_proxy(obj, name) {
        if(obj.__proto__ != null){
            if(obj.__proto__.constructor.name === 'Uint8ClampedArray' ||
                obj.__proto__.constructor.name === 'TypeArray'){
                return obj;
            }
        }

        if(obj instanceof RegExp){
            return obj;
        }

        if(obj === null || obj === undefined){
            return obj;
        }

        // if(obj.__tar________get__){
        //     return obj;
        // }

        return new Proxy(obj, {
            get(target, pro, rece) {
                if(pro === '__tar________get__'){ // 随便定义一个虚拟属性
                    // 只要有人从代理对象上访问该属性
                    // 直接返回原始对象
                    return obj;
                }

                try{
                    var val = Reflect.get(target, pro, rece);
                } catch (e) {
                    var val = obj[pro]; // 直接从原始对象上获取东西. 不要代理了.
                }

                if (typeof val == 'object' && val !== null) {
                    if(val.constructor.name === 'ImageData'){
                        return val;
                    }
                    my_env.qiao_log("从", name, "获取", pro, "该属性的值是", val);
                    return obj_proxy(val, pro); // 灵魂~~~ 777777 999
                } else if (typeof val == 'function') {
                    my_env.qiao_log("从", name, "获取", pro, "该属性的值是", val.name);
                    return func_proxy(val, pro);
                }
                my_env.qiao_log("从", name, "获取", pro, "该属性的值是", val); // 这里忘记打印了
                return val;
            },
            set(target, pro, val, rece) {
                if (typeof val === 'function'){
                    my_env.qiao_log("向", name, "设置", pro, "该属性的值是", val.name);
                } else {
                    my_env.qiao_log("向", name, "设置", pro, "该属性的值是", val);
                }
                Reflect.set(target, pro, val, rece);
            }
        });
    }

    // document.createElement     ()
    function func_proxy(func, name) {
        if (func.name === "eval" || func.name === "slice"){
            return func;
        }

        return new Proxy(func, {
            apply(target, thisArg, arg_list) {
                if(func.name === 'slice'){
                    debugger;
                }
                try{
                    var ret = Reflect.apply(target, thisArg, arg_list);
                } catch(e){
                    debugger;
                    var ret = func.apply(thisArg, arg_list);
                }
                if (typeof ret == 'object' && ret !== null) {
                    my_env.qiao_log("调用了" + name + "函数", "函数的返回值是", ret);
                    return obj_proxy(ret, name + "的返回值"); // 灵魂~~~ 777777 999
                } else if (typeof ret == 'function') {
                    my_env.qiao_log("调用了" + name + "函数", "函数的返回值是", ret.name);
                    return func_proxy(ret, name + "的返回值");
                }
                my_env.qiao_log("调用了" + name + "函数", "函数的返回值是", ret);
                return ret;
            }
        })
    }

    plugins.obj_proxy = obj_proxy;
    plugins.func_proxy = func_proxy;
})(my_env.plugins);
