(function(plugins){
    var def_obj_prop = function def_obj_prop(obj, prop, configurable, enumerable, writable, value, getter, setter){
        let attrs = {
            configurable,
            enumerable
        }

        if (writable!==undefined){
            attrs.writable = writable
        }
        if (value!==undefined){
            if (typeof value === "function"){
                value = my_env.plugins.set_native(value);
            }
            attrs.value = value
        }
        if (getter !== undefined){
            attrs.get = my_env.plugins.safe_get_set_func(getter, "get "+prop, 0);
        }
        if (setter !== undefined){
            attrs.set = my_env.plugins.safe_get_set_func(setter, "set "+prop, 1);
        }
        Object.defineProperty(obj, prop, attrs);
    }

    plugins.def_obj_prop = def_obj_prop;
})(my_env.plugins)