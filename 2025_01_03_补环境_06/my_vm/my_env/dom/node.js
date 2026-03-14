// 构造方法的定义
// 对象的创建
// symbol处理
var Node = function Node() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(Node);

// toString 搞定了
my_env.plugins.set_native(Node);


my_env.plugins.def_obj_prop(Node.prototype, "nodeType", true, true, undefined, undefined,
    function nodeType() {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Node.prototype, "nodeName", true, true, undefined, undefined,
    function nodeName() {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Node.prototype, "baseURI", true, true, undefined, undefined,
    function baseURI() {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Node.prototype, "isConnected", true, true, undefined, undefined,
    function isConnected() {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Node.prototype, "ownerDocument", true, true, undefined, undefined,
    function ownerDocument() {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Node.prototype, "parentNode", true, true, undefined, undefined,
    function parentNode() {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Node.prototype, "parentElement", true, true, undefined, undefined,
    function parentElement() {
        if (this instanceof Node) {
            let fu_elem = my_env.memory.nodes.get(this).parent;
            let fu_obj;
            switch(fu_elem.name){
                case "body":
                    fu_obj = Object.create(HTMLBodyElement.prototype);
                    my_env.memory.nodes.set(fu_obj, fu_elem);
                    return fu_obj;
                case "div":
                    fu_obj = Object.create(HTMLDivElement.prototype);
                    my_env.memory.nodes.set(fu_obj, fu_elem);
                    return fu_obj;
                case "span":
                    fu_obj = Object.create(HTMLSpanElement.prototype);
                    my_env.memory.nodes.set(fu_obj, fu_elem);
                    return fu_obj;
            }
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Node.prototype, "childNodes", true, true, undefined, undefined,
    function childNodes() {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Node.prototype, "firstChild", true, true, undefined, undefined,
    function firstChild() {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Node.prototype, "lastChild", true, true, undefined, undefined,
    function lastChild() {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Node.prototype, "previousSibling", true, true, undefined, undefined,
    function previousSibling() {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Node.prototype, "nextSibling", true, true, undefined, undefined,
    function nextSibling() {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Node.prototype, "nodeValue", true, true, undefined, undefined,
    function nodeValue() {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function nodeValue(value) {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Node.prototype, "textContent", true, true, undefined, undefined,
    function textContent() {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function textContent(value) {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(Node.prototype, "ELEMENT_NODE", false, true, false,
    1,
);

my_env.plugins.def_obj_prop(Node.prototype, "ATTRIBUTE_NODE", false, true, false,
    2,
);

my_env.plugins.def_obj_prop(Node.prototype, "TEXT_NODE", false, true, false,
    3,
);

my_env.plugins.def_obj_prop(Node.prototype, "CDATA_SECTION_NODE", false, true, false,
    4,
);

my_env.plugins.def_obj_prop(Node.prototype, "ENTITY_REFERENCE_NODE", false, true, false,
    5,
);

my_env.plugins.def_obj_prop(Node.prototype, "ENTITY_NODE", false, true, false,
    6,
);

my_env.plugins.def_obj_prop(Node.prototype, "PROCESSING_INSTRUCTION_NODE", false, true, false,
    7,
);

my_env.plugins.def_obj_prop(Node.prototype, "COMMENT_NODE", false, true, false,
    8,
);

my_env.plugins.def_obj_prop(Node.prototype, "DOCUMENT_NODE", false, true, false,
    9,
);

my_env.plugins.def_obj_prop(Node.prototype, "DOCUMENT_TYPE_NODE", false, true, false,
    10,
);

my_env.plugins.def_obj_prop(Node.prototype, "DOCUMENT_FRAGMENT_NODE", false, true, false,
    11,
);

my_env.plugins.def_obj_prop(Node.prototype, "NOTATION_NODE", false, true, false,
    12,
);

my_env.plugins.def_obj_prop(Node.prototype, "DOCUMENT_POSITION_DISCONNECTED", false, true, false,
    1,
);

my_env.plugins.def_obj_prop(Node.prototype, "DOCUMENT_POSITION_PRECEDING", false, true, false,
    2,
);

my_env.plugins.def_obj_prop(Node.prototype, "DOCUMENT_POSITION_FOLLOWING", false, true, false,
    4,
);

my_env.plugins.def_obj_prop(Node.prototype, "DOCUMENT_POSITION_CONTAINS", false, true, false,
    8,
);

my_env.plugins.def_obj_prop(Node.prototype, "DOCUMENT_POSITION_CONTAINED_BY", false, true, false,
    16,
);

my_env.plugins.def_obj_prop(Node.prototype, "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", false, true, false,
    32,
);

my_env.plugins.def_obj_prop(Node.prototype, "appendChild", true, true, true,
    function appendChild(param0) {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Node.prototype, "cloneNode", true, true, true,
    function cloneNode() {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Node.prototype, "compareDocumentPosition", true, true, true,
    function compareDocumentPosition(param0) {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Node.prototype, "contains", true, true, true,
    function contains(param0) {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Node.prototype, "getRootNode", true, true, true,
    function getRootNode() {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Node.prototype, "hasChildNodes", true, true, true,
    function hasChildNodes() {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Node.prototype, "insertBefore", true, true, true,
    function insertBefore(param0, param0) {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Node.prototype, "isDefaultNamespace", true, true, true,
    function isDefaultNamespace(param0) {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Node.prototype, "isEqualNode", true, true, true,
    function isEqualNode(param0) {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Node.prototype, "isSameNode", true, true, true,
    function isSameNode(param0) {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Node.prototype, "lookupNamespaceURI", true, true, true,
    function lookupNamespaceURI(param0) {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Node.prototype, "lookupPrefix", true, true, true,
    function lookupPrefix(param0) {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Node.prototype, "normalize", true, true, true,
    function normalize() {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Node.prototype, "removeChild", true, true, true,
    function removeChild(param0) {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Node.prototype, "replaceChild", true, true, true,
    function replaceChild(param0, param0) {
        if (this instanceof Node) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);
Object.setPrototypeOf(Node.prototype, EventTarget.prototype);