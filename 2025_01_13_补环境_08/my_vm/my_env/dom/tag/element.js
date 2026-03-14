// 构造方法的定义
// 对象的创建
// symbol处理
var Element = function Element() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(Element);

// toString 搞定了
my_env.plugins.set_native(Element);


my_env.plugins.def_obj_prop(Element.prototype, "namespaceURI", true, true, undefined, undefined,
    function namespaceURI() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Element.prototype, "prefix", true, true, undefined, undefined,
    function prefix() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Element.prototype, "localName", true, true, undefined, undefined,
    function localName() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Element.prototype, "tagName", true, true, undefined, undefined,
    function tagName() {
        if (this instanceof Element) {
            return my_env.memory.nodes.get(this).tagName;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Element.prototype, "id", true, true, undefined, undefined,
    function id() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function id(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "className", true, true, undefined, undefined,
    function className() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function className(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "classList", true, true, undefined, undefined,
    function classList() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function classList(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "slot", true, true, undefined, undefined,
    function slot() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function slot(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "attributes", true, true, undefined, undefined,
    function attributes() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Element.prototype, "shadowRoot", true, true, undefined, undefined,
    function shadowRoot() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Element.prototype, "part", true, true, undefined, undefined,
    function part() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function part(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "assignedSlot", true, true, undefined, undefined,
    function assignedSlot() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Element.prototype, "innerHTML", true, true, undefined, undefined,
    function innerHTML() {
        if (this instanceof Element) {
            let elem = my_env.memory.nodes.get(this);
            return my_env.out.$(elem).html();
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function innerHTML(value) {
        if (this instanceof Element) {
            let elem = my_env.memory.nodes.get(this);
            return my_env.out.$(elem).html(value);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "outerHTML", true, true, undefined, undefined,
    function outerHTML() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function outerHTML(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "scrollTop", true, true, undefined, undefined,
    function scrollTop() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function scrollTop(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "scrollLeft", true, true, undefined, undefined,
    function scrollLeft() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function scrollLeft(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "scrollWidth", true, true, undefined, undefined,
    function scrollWidth() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Element.prototype, "scrollHeight", true, true, undefined, undefined,
    function scrollHeight() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Element.prototype, "clientTop", true, true, undefined, undefined,
    function clientTop() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Element.prototype, "clientLeft", true, true, undefined, undefined,
    function clientLeft() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Element.prototype, "clientWidth", true, true, undefined, undefined,
    function clientWidth() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Element.prototype, "clientHeight", true, true, undefined, undefined,
    function clientHeight() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Element.prototype, "onbeforecopy", true, true, undefined, undefined,
    function onbeforecopy() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onbeforecopy(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "onbeforecut", true, true, undefined, undefined,
    function onbeforecut() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onbeforecut(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "onbeforepaste", true, true, undefined, undefined,
    function onbeforepaste() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onbeforepaste(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "onsearch", true, true, undefined, undefined,
    function onsearch() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onsearch(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "elementTiming", true, true, undefined, undefined,
    function elementTiming() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function elementTiming(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "onfullscreenchange", true, true, undefined, undefined,
    function onfullscreenchange() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onfullscreenchange(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "onfullscreenerror", true, true, undefined, undefined,
    function onfullscreenerror() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onfullscreenerror(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "onwebkitfullscreenchange", true, true, undefined, undefined,
    function onwebkitfullscreenchange() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onwebkitfullscreenchange(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "onwebkitfullscreenerror", true, true, undefined, undefined,
    function onwebkitfullscreenerror() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function onwebkitfullscreenerror(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "role", true, true, undefined, undefined,
    function role() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function role(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaAtomic", true, true, undefined, undefined,
    function ariaAtomic() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaAtomic(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaAutoComplete", true, true, undefined, undefined,
    function ariaAutoComplete() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaAutoComplete(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaBusy", true, true, undefined, undefined,
    function ariaBusy() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaBusy(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaBrailleLabel", true, true, undefined, undefined,
    function ariaBrailleLabel() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaBrailleLabel(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaBrailleRoleDescription", true, true, undefined, undefined,
    function ariaBrailleRoleDescription() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaBrailleRoleDescription(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaChecked", true, true, undefined, undefined,
    function ariaChecked() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaChecked(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaColCount", true, true, undefined, undefined,
    function ariaColCount() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaColCount(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaColIndex", true, true, undefined, undefined,
    function ariaColIndex() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaColIndex(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaColSpan", true, true, undefined, undefined,
    function ariaColSpan() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaColSpan(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaCurrent", true, true, undefined, undefined,
    function ariaCurrent() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaCurrent(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaDescription", true, true, undefined, undefined,
    function ariaDescription() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaDescription(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaDisabled", true, true, undefined, undefined,
    function ariaDisabled() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaDisabled(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaExpanded", true, true, undefined, undefined,
    function ariaExpanded() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaExpanded(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaHasPopup", true, true, undefined, undefined,
    function ariaHasPopup() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaHasPopup(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaHidden", true, true, undefined, undefined,
    function ariaHidden() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaHidden(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaInvalid", true, true, undefined, undefined,
    function ariaInvalid() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaInvalid(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaKeyShortcuts", true, true, undefined, undefined,
    function ariaKeyShortcuts() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaKeyShortcuts(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaLabel", true, true, undefined, undefined,
    function ariaLabel() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaLabel(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaLevel", true, true, undefined, undefined,
    function ariaLevel() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaLevel(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaLive", true, true, undefined, undefined,
    function ariaLive() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaLive(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaModal", true, true, undefined, undefined,
    function ariaModal() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaModal(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaMultiLine", true, true, undefined, undefined,
    function ariaMultiLine() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaMultiLine(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaMultiSelectable", true, true, undefined, undefined,
    function ariaMultiSelectable() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaMultiSelectable(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaOrientation", true, true, undefined, undefined,
    function ariaOrientation() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaOrientation(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaPlaceholder", true, true, undefined, undefined,
    function ariaPlaceholder() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaPlaceholder(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaPosInSet", true, true, undefined, undefined,
    function ariaPosInSet() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaPosInSet(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaPressed", true, true, undefined, undefined,
    function ariaPressed() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaPressed(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaReadOnly", true, true, undefined, undefined,
    function ariaReadOnly() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaReadOnly(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaRelevant", true, true, undefined, undefined,
    function ariaRelevant() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaRelevant(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaRequired", true, true, undefined, undefined,
    function ariaRequired() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaRequired(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaRoleDescription", true, true, undefined, undefined,
    function ariaRoleDescription() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaRoleDescription(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaRowCount", true, true, undefined, undefined,
    function ariaRowCount() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaRowCount(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaRowIndex", true, true, undefined, undefined,
    function ariaRowIndex() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaRowIndex(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaRowSpan", true, true, undefined, undefined,
    function ariaRowSpan() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaRowSpan(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaSelected", true, true, undefined, undefined,
    function ariaSelected() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaSelected(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaSetSize", true, true, undefined, undefined,
    function ariaSetSize() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaSetSize(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaSort", true, true, undefined, undefined,
    function ariaSort() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaSort(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaValueMax", true, true, undefined, undefined,
    function ariaValueMax() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaValueMax(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaValueMin", true, true, undefined, undefined,
    function ariaValueMin() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaValueMin(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaValueNow", true, true, undefined, undefined,
    function ariaValueNow() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaValueNow(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaValueText", true, true, undefined, undefined,
    function ariaValueText() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaValueText(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "children", true, true, undefined, undefined,
    function children() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Element.prototype, "firstElementChild", true, true, undefined, undefined,
    function firstElementChild() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Element.prototype, "lastElementChild", true, true, undefined, undefined,
    function lastElementChild() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Element.prototype, "childElementCount", true, true, undefined, undefined,
    function childElementCount() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Element.prototype, "previousElementSibling", true, true, undefined, undefined,
    function previousElementSibling() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Element.prototype, "nextElementSibling", true, true, undefined, undefined,
    function nextElementSibling() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Element.prototype, "after", true, true, true,
    function after() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "animate", true, true, true,
    function animate(param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "append", true, true, true,
    function append(node1) {
        if (this instanceof Element) {
            let c_elem = my_env.memory.nodes.get(this);
            let node_elem = my_env.memory.nodes.get(node1);
            my_env.out.$(c_elem).append(node_elem); // 直接插入进去. 看看效果
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "attachShadow", true, true, true,
    function attachShadow(param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "before", true, true, true,
    function before() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "checkVisibility", true, true, true,
    function checkVisibility() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "closest", true, true, true,
    function closest(param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "computedStyleMap", true, true, true,
    function computedStyleMap() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "getAnimations", true, true, true,
    function getAnimations() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "getAttribute", true, true, true,
    function getAttribute(key) {
        if (this instanceof Element) {
            let c_elem = my_env.memory.nodes.get(this);
            let val = my_env.out.$(c_elem).attr(key);
            return val === undefined ? null: val;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "getAttributeNS", true, true, true,
    function getAttributeNS(param0, param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "getAttributeNames", true, true, true,
    function getAttributeNames() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "getAttributeNode", true, true, true,
    function getAttributeNode(param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "getAttributeNodeNS", true, true, true,
    function getAttributeNodeNS(param0, param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "getBoundingClientRect", true, true, true,
    function getBoundingClientRect() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "getClientRects", true, true, true,
    function getClientRects() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "getElementsByClassName", true, true, true,
    function getElementsByClassName(param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "getElementsByTagName", true, true, true,
    function getElementsByTagName(param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "getElementsByTagNameNS", true, true, true,
    function getElementsByTagNameNS(param0, param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "getHTML", true, true, true,
    function getHTML() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "hasAttribute", true, true, true,
    function hasAttribute(param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "hasAttributeNS", true, true, true,
    function hasAttributeNS(param0, param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "hasAttributes", true, true, true,
    function hasAttributes() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "hasPointerCapture", true, true, true,
    function hasPointerCapture(param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "insertAdjacentElement", true, true, true,
    function insertAdjacentElement(param0, param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "insertAdjacentHTML", true, true, true,
    function insertAdjacentHTML(param0, param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "insertAdjacentText", true, true, true,
    function insertAdjacentText(param0, param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "matches", true, true, true,
    function matches(param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "prepend", true, true, true,
    function prepend() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "querySelector", true, true, true,
    function querySelector(param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "querySelectorAll", true, true, true,
    function querySelectorAll(param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "releasePointerCapture", true, true, true,
    function releasePointerCapture(param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "remove", true, true, true,
    function remove() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "removeAttribute", true, true, true,
    function removeAttribute(param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "removeAttributeNS", true, true, true,
    function removeAttributeNS(param0, param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "removeAttributeNode", true, true, true,
    function removeAttributeNode(param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "replaceChildren", true, true, true,
    function replaceChildren() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "replaceWith", true, true, true,
    function replaceWith() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "requestFullscreen", true, true, true,
    function requestFullscreen() {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "requestPointerLock", true, true, true,
    function requestPointerLock() {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "scroll", true, true, true,
    function scroll() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "scrollBy", true, true, true,
    function scrollBy() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "scrollIntoView", true, true, true,
    function scrollIntoView() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "scrollIntoViewIfNeeded", true, true, true,
    function scrollIntoViewIfNeeded() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "scrollTo", true, true, true,
    function scrollTo() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "setAttribute", true, true, true,
    function setAttribute(key, value) {
        if (this instanceof Element) {
            // 把数据保存在当前节点的数据中
            let c_elem = my_env.memory.nodes.get(this);
            my_env.out.$(c_elem).attr(key, value);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "setAttributeNS", true, true, true,
    function setAttributeNS(param0, param0, param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "setAttributeNode", true, true, true,
    function setAttributeNode(param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "setAttributeNodeNS", true, true, true,
    function setAttributeNodeNS(param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "setHTMLUnsafe", true, true, true,
    function setHTMLUnsafe(param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "setPointerCapture", true, true, true,
    function setPointerCapture(param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "toggleAttribute", true, true, true,
    function toggleAttribute(param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "webkitMatchesSelector", true, true, true,
    function webkitMatchesSelector(param0) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "webkitRequestFullScreen", true, true, true,
    function webkitRequestFullScreen() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "webkitRequestFullscreen", true, true, true,
    function webkitRequestFullscreen() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Element.prototype, "currentCSSZoom", true, true, undefined, undefined,
    function currentCSSZoom() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaColIndexText", true, true, undefined, undefined,
    function ariaColIndexText() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaColIndexText(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Element.prototype, "ariaRowIndexText", true, true, undefined, undefined,
    function ariaRowIndexText() {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ariaRowIndexText(value) {
        if (this instanceof Element) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);
Object.setPrototypeOf(Element.prototype, Node.prototype);