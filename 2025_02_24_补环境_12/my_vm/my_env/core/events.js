(function(plugins){
    plugins.init_mouse_event = function(ops){
        // 写各种随机
        ops['screenX'] = 18;
        return ops;
    }
    plugins.init_event = function(ops){
        // 各种属性数据填写
        return ops;
    }
    plugins.init_pointer_event = function(ops){
        // 写各种随机
        ops['screenX'] = 18;
        return ops;
    }
    plugins.init_ui_event = function(ops){
        // 写各种随机
        return ops;
    }

})(my_env.plugins);
