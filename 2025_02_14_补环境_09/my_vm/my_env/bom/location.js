// 完全脚本生成的代码
// 构造方法的定义
// 对象的创建
// symbol处理
// 构造方法的定义
// 对象的创建
// symbol处理
var Location = function Location(){
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(Location);

// toString 搞定了
my_env.plugins.set_native(Location);

// 千万不能new
var location = Object.create(Location.prototype);

my_env.plugins.def_obj_prop(location, "valueOf",false,false,false,
    function valueOf(){debugger;},
);

my_env.plugins.def_obj_prop(location, "ancestorOrigins",false,true,undefined,undefined,
    function ancestorOrigins(){debugger; return my_env.memory.location.ancestorOrigins;},
    undefined,
);

my_env.plugins.def_obj_prop(location, "href",false,true,undefined,undefined,
    function href(){debugger; return my_env.memory.location.href;},
    function href(){debugger;},
);

my_env.plugins.def_obj_prop(location, "origin",false,true,undefined,undefined,
    function origin(){debugger; return my_env.memory.location.origin;},
    undefined,
);

my_env.plugins.def_obj_prop(location, "protocol",false,true,undefined,undefined,
    function protocol(){debugger; return my_env.memory.location.protocol;},
    function protocol(){debugger;},
);

my_env.plugins.def_obj_prop(location, "host",false,true,undefined,undefined,
    function host(){debugger; return my_env.memory.location.host;},
    function host(){debugger;},
);

my_env.plugins.def_obj_prop(location, "hostname",false,true,undefined,undefined,
    function hostname(){debugger; return my_env.memory.location.hostname;},
    function hostname(){debugger;},
);

my_env.plugins.def_obj_prop(location, "port",false,true,undefined,undefined,
    function port(){debugger; return my_env.memory.location.port;},
    function port(){debugger;},
);

my_env.plugins.def_obj_prop(location, "pathname",false,true,undefined,undefined,
    function pathname(){debugger; return my_env.memory.location.pathname;},
    function pathname(){debugger;},
);

my_env.plugins.def_obj_prop(location, "search",false,true,undefined,undefined,
    function search(){debugger; return my_env.memory.location.search;},
    function search(){debugger;},
);

my_env.plugins.def_obj_prop(location, "hash",false,true,undefined,undefined,
    function hash(){debugger; return my_env.memory.location.hash;},
    function hash(){debugger;},
);

my_env.plugins.def_obj_prop(location, "assign",false,true,false,
    function assign(){debugger;},
);

my_env.plugins.def_obj_prop(location, "reload",false,true,false,
    function reload(){debugger;},
);

my_env.plugins.def_obj_prop(location, "replace",false,true,false,
    function replace(){debugger;},
);

my_env.plugins.def_obj_prop(location, "toString",false,true,false,
    function toString(){
        return this.href;
    },
);
