// 构造方法的定义
// 对象的创建
// symbol处理
var CharacterData = function CharacterData() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(CharacterData);

// toString 搞定了
my_env.plugins.set_native(CharacterData);


my_env.plugins.def_obj_prop(CharacterData.prototype, "data", true, true, undefined, undefined,
    function data() {
        if (this instanceof CharacterData) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function data(value) {
        if (this instanceof CharacterData) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CharacterData.prototype, "length", true, true, undefined, undefined,
    function length() {
        if (this instanceof CharacterData) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(CharacterData.prototype, "previousElementSibling", true, true, undefined, undefined,
    function previousElementSibling() {
        if (this instanceof CharacterData) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(CharacterData.prototype, "nextElementSibling", true, true, undefined, undefined,
    function nextElementSibling() {
        if (this instanceof CharacterData) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(CharacterData.prototype, "after", true, true, true,
    function after() {
        if (this instanceof CharacterData) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CharacterData.prototype, "appendData", true, true, true,
    function appendData(param0) {
        if (this instanceof CharacterData) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CharacterData.prototype, "before", true, true, true,
    function before() {
        if (this instanceof CharacterData) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CharacterData.prototype, "deleteData", true, true, true,
    function deleteData(param0, param1) {
        if (this instanceof CharacterData) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CharacterData.prototype, "insertData", true, true, true,
    function insertData(param0, param1) {
        if (this instanceof CharacterData) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CharacterData.prototype, "remove", true, true, true,
    function remove() {
        if (this instanceof CharacterData) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CharacterData.prototype, "replaceData", true, true, true,
    function replaceData(param0, param1, param2) {
        if (this instanceof CharacterData) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CharacterData.prototype, "replaceWith", true, true, true,
    function replaceWith() {
        if (this instanceof CharacterData) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CharacterData.prototype, "substringData", true, true, true,
    function substringData(param0, param1) {
        if (this instanceof CharacterData) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);
Object.setPrototypeOf(CharacterData.prototype, Node.prototype);