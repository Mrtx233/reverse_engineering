/**
 * 最单纯的一套逻辑.
 * 只是用来处理基本数据以及普通函数
 */
function handle_value(value, proto, obj){
    if(typeof value === 'function'){ // 如果是函数
        // 函数.name
        // 函数.length
        let pms = [];
        for(let i = 0 ; i < value.length; i++ ){
            pms.push("param" + 0);
        }
        return `function ${value.name}(${pms.join(",")}){${handle_func(value, proto, obj)}}`
    } else if(typeof value === "string"){ // 如果是字符串
        return `'${value}'`;
    } else if(typeof value === "object"){ // 如果是对象
        if (value === null){ // 特殊的对象null
            return "null";
        }
        return `{}`;
    } else {
        return value;
    }
}

function handle_func(func, proto, obj, is_getter, prop_name){
    let jsCode = '';
    let flag;
    let ret = undefined;
    // 判定该方法在浏览器上是否可以正常执行
    try{
        ret = func.call(proto); // 尝试执行该方法  ? get方法如果返回的是一个对象呢?
        if (ret instanceof Promise){
            ret.catch(()=>{});
        }
        flag = true; // 原型链上的这个方法是可以直接执行的
    } catch (e) {
        flag = false; // 原型链上的函数, 默认是不可以被直接执行的
        if(obj){
            try {
                ret = func.call(obj); // 原型链不行的话. 换对象去执行. 看看能否拿到结果
                if (ret instanceof Promise){
                    ret.catch(() => {});
                }
            } catch(ee) {
                // 对象也不能空着返回东西
                // 可以把错误信息保存. 后面生成代码的时候. 可以进一步给出相关的提示
                // 自行去扩展
            }
        }
    }

    if (flag){
        jsCode += `
            debugger; 
            return ${handle_value(ret, proto, obj)};
        `;
    } else {
        // 该函数不可以直接被调用
        jsCode += `
            if (this instanceof ${proto.constructor.name}){
                ${is_getter ? ``: "debugger;"}
                return ${is_getter ? `my_env.memory.navigator.${prop_name}`: ret};
            } else {
                throw new TypeError("Illegal invocation");
            }
        `
    }
    return jsCode;
}

function create_prototype(proto, obj, need_constructor){

    let jsCode = "";

     // 拿到构造器的名字
    let construct_name = proto.constructor.name;

    if (need_constructor){
        jsCode += `
        // 构造方法的定义
        // 对象的创建
        // symbol处理
        var ${construct_name} = function ${construct_name}(){
            throw new Error("Illegal constructor"); // 777
        }
        // 处理symbol
        my_env.plugins.re_def_sym(${construct_name});
        
        // toString 搞定了
        my_env.plugins.set_native(${construct_name});
        
        `;
    }

    // 获取原型对象上所有的属性名
    let prop_names = Object.getOwnPropertyNames(proto);

    for (let i = 0 ; i < prop_names.length; i++){
        let prop_name = prop_names[i];
        if (prop_name === 'constructor'){continue;}
        // 获取到该属性的描述信息
        let prop_desc = Object.getOwnPropertyDescriptor(proto, prop_name);

        let configurable = prop_desc.configurable;
        let enumerable = prop_desc.enumerable;
        let writable = prop_desc.writable;
        let value = prop_desc.value;
        let get = prop_desc.get;
        let set = prop_desc.set;

        // 判断是走value还是getter和setter
        if (writable !== undefined){
            jsCode += `
                my_env.plugins.def_obj_prop(${construct_name}.prototype, "${prop_name}",${configurable},${enumerable},${writable},
                    ${handle_value(value, proto, obj)},
                );
            `;
        } else {
            // getter和setter
            let get_code = get ? `function ${prop_name}(){${handle_func(get, proto, obj, true, prop_name)}}` : `undefined`;
            let set_code = set ? `function ${prop_name}(value){${handle_func(set, proto, obj)}}` : `undefined`;
            jsCode += `
                my_env.plugins.def_obj_prop(${construct_name}.prototype, "${prop_name}",${configurable},${enumerable},undefined, undefined,
                    ${get_code},
                    ${set_code}
                );
            `;
        }
    }
    // 继承关系
    let parent = proto.__proto__;
    if (parent !== Object.prototype){
        jsCode += `Object.setPrototypeOf(${construct_name}.prototype, ${parent.constructor.name}.prototype);`
    }
    return jsCode;
}

let code = create_prototype(Navigator.prototype, navigator, true);
console.log(code);
