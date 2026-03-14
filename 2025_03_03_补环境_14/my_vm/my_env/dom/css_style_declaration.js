// 构造方法的定义
// 对象的创建
// symbol处理
var CSSStyleDeclaration = function CSSStyleDeclaration() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(CSSStyleDeclaration);

// toString 搞定了
my_env.plugins.set_native(CSSStyleDeclaration);


my_env.plugins.def_obj_prop(CSSStyleDeclaration.prototype, "cssText", true, true, undefined, undefined,
    function cssText() {
        if (this instanceof CSSStyleDeclaration) {
            return this.__qiao__element__.getAttribute("style");
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function cssText(value) {
        if (this instanceof CSSStyleDeclaration) {
            this.__qiao__element__.style = value; ///????????
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CSSStyleDeclaration.prototype, "length", true, true, undefined, undefined,
    function length() {
        if (this instanceof CSSStyleDeclaration) {
            return Object.keys(this).length;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(CSSStyleDeclaration.prototype, "parentRule", true, true, undefined, undefined,
    function parentRule() {
        if (this instanceof CSSStyleDeclaration) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(CSSStyleDeclaration.prototype, "cssFloat", true, true, undefined, undefined,
    function cssFloat() {
        if (this instanceof CSSStyleDeclaration) {
            debugger;
            return '';
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function cssFloat(value) {
        if (this instanceof CSSStyleDeclaration) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CSSStyleDeclaration.prototype, "getPropertyPriority", true, true, true,
    function getPropertyPriority(param0) {
        if (this instanceof CSSStyleDeclaration) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CSSStyleDeclaration.prototype, "getPropertyValue", true, true, true,
    function getPropertyValue(param0) {
        if (this instanceof CSSStyleDeclaration) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CSSStyleDeclaration.prototype, "item", true, true, true,
    function item(param0) {
        if (this instanceof CSSStyleDeclaration) {
            return this[param0];
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CSSStyleDeclaration.prototype, "removeProperty", true, true, true,
    function removeProperty(param0) {
        if (this instanceof CSSStyleDeclaration) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CSSStyleDeclaration.prototype, "setProperty", true, true, true,
    function setProperty(param0, param0) {
        if (this instanceof CSSStyleDeclaration) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);