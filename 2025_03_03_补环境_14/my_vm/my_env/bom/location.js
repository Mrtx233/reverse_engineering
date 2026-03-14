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
location = my_env.plugins.obj_proxy(location, "navigator");

my_env.plugins.def_obj_prop(location, "valueOf",false,false,false,
    function valueOf(){debugger;},
);

my_env.plugins.def_obj_prop(location, "ancestorOrigins",false,true,undefined,undefined,
    function ancestorOrigins(){
        debugger;
        return my_env.memory.location.ancestorOrigins;
    },
    undefined,
);

my_env.plugins.def_obj_prop(location, "href",false,true,undefined,undefined,
    function href(){return my_env.memory.location.href;},
    function href(value){debugger;},
);

my_env.plugins.def_obj_prop(location, "origin",false,true,undefined,undefined,
    function origin(){
        return my_env.memory.location.origin;
    },
    undefined,
);

my_env.plugins.def_obj_prop(location, "protocol",false,true,undefined,undefined,
    function protocol(){return my_env.memory.location.protocol;},
    function protocol(value){debugger;},
);

my_env.plugins.def_obj_prop(location, "host",false,true,undefined,undefined,
    function host(){return my_env.memory.location.host;},
    function host(value){debugger;},
);

my_env.plugins.def_obj_prop(location, "hostname",false,true,undefined,undefined,
    function hostname(){return my_env.memory.location.hostname;},
    function hostname(value){debugger;},
);

my_env.plugins.def_obj_prop(location, "port",false,true,undefined,undefined,
    function port(){return my_env.memory.location.port;},
    function port(value){debugger;},
);

my_env.plugins.def_obj_prop(location, "pathname",false,true,undefined,undefined,
    function pathname(){return my_env.memory.location.pathname;},
    function pathname(value){debugger;},
);

my_env.plugins.def_obj_prop(location, "search",false,true,undefined,undefined,
    function search(){return my_env.memory.location.search;},
    function search(value){debugger;},
);

my_env.plugins.def_obj_prop(location, "hash",false,true,undefined,undefined,
    function hash(){return my_env.memory.location.hash;},
    function hash(value){debugger;},
);

my_env.plugins.def_obj_prop(location, "assign",false,true,false,
    function assign(param0){debugger;},
);

my_env.plugins.def_obj_prop(location, "reload",false,true,false,
    function reload(){debugger;},
);

my_env.plugins.def_obj_prop(location, "replace",false,true,false,
    function replace(url){debugger;},
);

my_env.plugins.def_obj_prop(location, "toString",false,true,false,
    function toString(){
        return this.href;
    },
);
