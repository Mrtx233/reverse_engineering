// // // location
// // // 我们补充的环境尽可能的和浏览器一致
// // // 1. 对象本身
// // // 2. 原型链
// // // 3. 一些细枝末节, toString, 属性描述
// //
//
// var Location = function Location(){
//     throw new Error("Illegal constructor"); // 不让正常执行该函数
// };
// // 处理symbol
// my_env.plugins.re_def_sym(Location);
//
// // toString 搞定了
// my_env.plugins.set_native(Location);
//
// // 千万不能new
// var location = Object.create(Location.prototype);
// // 单独的去处理每一个属性, 更好维护...
// Object.defineProperty(location, "href", {
//     configurable: false,
//     enumerable: true,
//     get: my_env.plugins.safe_get_set_func(function href(){
//         return "url"
//     }, "get href", 0),
//     set: my_env.plugins.safe_get_set_func(function href(){
//         return "url"
//     }, "set href", 1)
// });
//
// //
// // // 属性描述和浏览器,可能是不一致的
// // console.log(Object.getOwnPropertyDescriptor(location, "href").get.name);
// // //
// // //
// // function qiao(){
// //
// // }
// // Object.defineProperty(qiao, "name", {
// //     configurable: true,
// //     enumerable: false,
// //     writable: false,
// //     value: "get href"
// // });
// // console.log(qiao.name);



// 完全脚本生成的代码
// 构造方法的定义
// 对象的创建
// symbol处理
// 构造方法的定义
// 对象的创建
// symbol处理
var Location = function Location(){
    throw new Error("Illegal constructor");
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
    function ancestorOrigins(){debugger; return {}},
    undefined,
);

my_env.plugins.def_obj_prop(location, "href",false,true,undefined,undefined,
    function href(){debugger; return 'chrome://new-tab-page/'},
    function href(){debugger;},
);

my_env.plugins.def_obj_prop(location, "origin",false,true,undefined,undefined,
    function origin(){debugger; return 'chrome://new-tab-page'},
    undefined,
);

my_env.plugins.def_obj_prop(location, "protocol",false,true,undefined,undefined,
    function protocol(){debugger; return 'chrome:'},
    function protocol(){debugger;},
);

my_env.plugins.def_obj_prop(location, "host",false,true,undefined,undefined,
    function host(){debugger; return 'new-tab-page'},
    function host(){debugger;},
);

my_env.plugins.def_obj_prop(location, "hostname",false,true,undefined,undefined,
    function hostname(){debugger; return 'new-tab-page'},
    function hostname(){debugger;},
);

my_env.plugins.def_obj_prop(location, "port",false,true,undefined,undefined,
    function port(){debugger; return ''},
    function port(){debugger;},
);

my_env.plugins.def_obj_prop(location, "pathname",false,true,undefined,undefined,
    function pathname(){debugger; return '/'},
    function pathname(){debugger;},
);

my_env.plugins.def_obj_prop(location, "search",false,true,undefined,undefined,
    function search(){debugger; return ''},
    function search(){debugger;},
);

my_env.plugins.def_obj_prop(location, "hash",false,true,undefined,undefined,
    function hash(){debugger; return ''},
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
    function toString(){debugger;},
);