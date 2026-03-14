(function(plugins){

     // 创建一个随机值
    let my_name = "qiao"+Math.random();
    let my_value = "fu"+Math.random();

    // HOOK Object.getOwnPropertyDescriptors  防止检测到两个特殊值
    // HOOK Object.getOwnPropertyNames  防止检测到两个特殊值

    let _getOwnPropertyNames = Object.getOwnPropertyNames;

    Object.getOwnPropertyNames = function getOwnPropertyNames(obj){
        let names = _getOwnPropertyNames.apply(this, arguments);
        let results = [];
        for(let i = 0 ; i < names.length; i++){
            let name = names[i];
            if (name === my_name){ // 过滤掉和我随机值相同的那个属性
                continue;
            }
            results.push(name);
        }
        return results;
    }

    let _getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors;

    Object.getOwnPropertyDescriptors = function getOwnPropertyDescriptors(obj){
        let _objs = _getOwnPropertyDescriptors.apply(this, arguments);
        let results = {};
        for(let key in _objs){
            if (key === my_name){ // 过滤掉和我随机值相同的那个属性
                continue;
            }
            results[key] = _objs[key];
        }
        return results;
    }

    // 拦截所有的toString -> Function.prototype.toString
    let _toString = Function.prototype.toString;
    Function.prototype.toString = function toString(){
        let wak = this[my_name];
        if (wak === my_value){ // 判断是会否执行过set_native
            // 拦截所有的toString
            let name = this.name;
            // 太暴力了. 相当于, 不紧紧是我们补的, 还有人家程序的. 全都给拦截了
            return `function ${name}() { [native code] }`;
        } else {
            return _toString.apply(this, arguments);
        }
    }

    let set_native = function(func){
        Object.defineProperty(func, my_name, {
            enumerable: false,
            configurable: false,
            value: my_value, // 完全是做个标记
            writable: false
        });
        return func;
    }

    set_native(Function.prototype.toString); // 刚刚hook的代码进行toStirng的保护
    set_native(Object.getOwnPropertyDescriptors); // 刚刚hook的代码进行toStirng的保护
    set_native(Object.getOwnPropertyNames);  // 刚刚hook的代码进行toStirng的保护

    plugins.set_native = set_native;
})(my_env.plugins);

