function handle_value(value){
    if(typeof value === 'function'){ // 如果是函数
        return `function ${value.name}(){debugger;}`
    } else if(typeof value === "string"){ // 如果是字符串
        return `'${value}'`;
    } else if(typeof value === "object"){ // 如果是对象
        if (value === null){
            return "null";
        }
        return `{}`;
    } else {
        return value;
    }
}

// 目标对象
function create_object(obj, obj_name){
    // var obj = location;
    // var obj_name = "location";

    let constructor_name = obj.__proto__.constructor.name;
    // 拿到所有属性名
    let prop_names = Object.getOwnPropertyNames(obj);

    let jsCode = `
    // 构造方法的定义
    // 对象的创建
    // symbol处理
    var ${constructor_name} = function ${constructor_name}(){
        throw new Error("Illegal constructor");
    }
    // 处理symbol
    my_env.plugins.re_def_sym(${constructor_name});
    
    // toString 搞定了
    my_env.plugins.set_native(${constructor_name});
    
    // 千万不能new
    var ${obj_name} = Object.create(${constructor_name}.prototype);
    
    `;

    for(let i = 0 ; i < prop_names.length; i++){
        // 拿到每一个属性名
        let prop_name = prop_names[i];
        console.log(prop_name);
        // 有了属性名, 有对象. 可以拿描述符
        let desc_obj = Object.getOwnPropertyDescriptor(obj, prop_name);
        // 拿到每一个属性
        let configurable = desc_obj.configurable;
        let enumerable = desc_obj.enumerable;

        let writable = desc_obj.writable;
        let value = desc_obj.value;
        let get = desc_obj.get;
        let set = desc_obj.set;

        if(value !== undefined && writable !== undefined){
            // 用value和writable的
            // 输出 `定义该属性的` 代码
            jsCode += `
                my_env.plugins.def_obj_prop(${obj_name}, "${prop_name}",${configurable},${enumerable},${writable},
                    ${handle_value(value)},
                );
            `;

        } else {
             // get/set
            let get_code = get ? `function ${prop_name}(){debugger; return ${handle_value(obj[prop_name])}}`: "undefined";
            let set_code = set ? `function ${prop_name}(){debugger;}`: "undefined";
            jsCode += `
                my_env.plugins.def_obj_prop(${obj_name}, "${prop_name}",${configurable},${enumerable},undefined,undefined,
                    ${get_code},
                    ${set_code},
                );
            `;

        }
    }
    console.log(jsCode);
}





