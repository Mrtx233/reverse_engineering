// 构造方法的定义
// 对象的创建
// symbol处理
var HTMLCanvasElement = function HTMLCanvasElement() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(HTMLCanvasElement);

// toString 搞定了
my_env.plugins.set_native(HTMLCanvasElement);


my_env.plugins.def_obj_prop(HTMLCanvasElement.prototype, "width", true, true, undefined, undefined,
    function width() {
        if (this instanceof HTMLCanvasElement) {
            return this.getAttribute("width");
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function width(value) {
        if (this instanceof HTMLCanvasElement) {
            let cvs = my_env.memory.dom_cvs.get(this);
            cvs.width = value;
            this.setAttribute("width", value);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLCanvasElement.prototype, "height", true, true, undefined, undefined,
    function height() {
        if (this instanceof HTMLCanvasElement) {
            return this.getAttribute("height");
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function height(value) {
        if (this instanceof HTMLCanvasElement) {
            let cvs = my_env.memory.dom_cvs.get(this);
            cvs.height = value;
            this.setAttribute("height", value);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLCanvasElement.prototype, "captureStream", true, true, true,
    function captureStream() {
        if (this instanceof HTMLCanvasElement) {
            let cvs = my_env.memory.dom_cvs.get(this);
            return cvs.captureStream();
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(HTMLCanvasElement.prototype, "getContext", true, true, true,
    function getContext(param0) {
        if (this instanceof HTMLCanvasElement) {
            // 这里最后整. 这里超麻烦.....
            // 得拿到真正画图的那个cvs对象
            if(param0 === '2d' || param0 === "2D"){
                let cvs = my_env.memory.dom_cvs.get(this);

                // 如果获取了两次context, 是否是同一个?
                let ctx_obj = my_env.memory.dom_cvs_ctx.get(this);
                if(ctx_obj){
                    return ctx_obj;
                }

                // 构建一个ctx对象(符合浏览器标准的)
                ctx_obj = Object.create(CanvasRenderingContext2D.prototype);
                my_env.memory.dom_cvs_ctx.set(this, ctx_obj);
                //  canvas -> context的关系
                // 一个canvas, 就一个ctx就可以了
                let ctx = cvs.getContext("2d");
                my_env.memory.my_ctx_ctx.set(ctx_obj, ctx);

                // 我的canvas: 我的ctx
                // 我的ctx: 画图的ctx

                return ctx_obj;
            } else {
                return null;
            }

            // let ctx = cvs.getContext(param0);
            // ctx.画图


        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(HTMLCanvasElement.prototype, "toBlob", true, true, true,
    function toBlob(param0) {
        if (this instanceof HTMLCanvasElement) {
            let cvs = my_env.memory.dom_cvs.get(this);
            return cvs.toBlob(param0);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(HTMLCanvasElement.prototype, "toDataURL", true, true, true,
    function toDataURL() {
        if (this instanceof HTMLCanvasElement) {
            let cvs = my_env.memory.dom_cvs.get(this);
            return cvs.toDataURL();
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(HTMLCanvasElement.prototype, "transferControlToOffscreen", true, true, true,
    function transferControlToOffscreen() {
        if (this instanceof HTMLCanvasElement) {
            let cvs = my_env.memory.dom_cvs.get(this);
            return cvs.transferControlToOffscreen();
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);
Object.setPrototypeOf(HTMLCanvasElement.prototype, HTMLElement.prototype);