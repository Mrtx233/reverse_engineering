// 构造方法的定义
// 对象的创建
// symbol处理
var CanvasRenderingContext2D = function CanvasRenderingContext2D() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(CanvasRenderingContext2D);

// toString 搞定了
my_env.plugins.set_native(CanvasRenderingContext2D);


// ctx.canvas => canvas对象(符合浏览器原型链的)
my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "canvas", true, true, undefined, undefined,
    function canvas() {
        if (this instanceof CanvasRenderingContext2D) {
            for (let {cvs, ctx} of my_env.memory.dom_cvs_ctx.entries()) {
                if (ctx === this) {
                    return cvs;
                }
            }
            my_env.qiao_log("ctx有, canvas拿不到. 肯定有问题!!!!");
            return null; // 有问题的....
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);


my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "globalAlpha", true, true, undefined, undefined,
    function globalAlpha() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.globalAlpha;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function globalAlpha(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.globalAlpha = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "globalCompositeOperation", true, true, undefined, undefined,
    function globalCompositeOperation() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.globalCompositeOperation;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function globalCompositeOperation(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.globalCompositeOperation = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "filter", true, true, undefined, undefined,
    function filter() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.filter;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function filter(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.filter = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "imageSmoothingEnabled", true, true, undefined, undefined,
    function imageSmoothingEnabled() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.imageSmoothingEnabled;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function imageSmoothingEnabled(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.imageSmoothingEnabled = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "imageSmoothingQuality", true, true, undefined, undefined,
    function imageSmoothingQuality() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.imageSmoothingQuality;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function imageSmoothingQuality(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.imageSmoothingQuality = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "strokeStyle", true, true, undefined, undefined,
    function strokeStyle() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.strokeStyle;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function strokeStyle(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.strokeStyle = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "fillStyle", true, true, undefined, undefined,
    function fillStyle() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.fillStyle;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function fillStyle(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.fillStyle = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "shadowOffsetX", true, true, undefined, undefined,
    function shadowOffsetX() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.shadowOffsetX;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function shadowOffsetX(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.shadowOffsetX = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "shadowOffsetY", true, true, undefined, undefined,
    function shadowOffsetY() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.shadowOffsetY;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function shadowOffsetY(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.shadowOffsetY = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "shadowBlur", true, true, undefined, undefined,
    function shadowBlur() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.shadowBlur;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function shadowBlur(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.shadowBlur = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "shadowColor", true, true, undefined, undefined,
    function shadowColor() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.shadowColor;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function shadowColor(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.shadowColor = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "lineWidth", true, true, undefined, undefined,
    function lineWidth() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.lineWidth;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function lineWidth(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.lineWidth = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "lineCap", true, true, undefined, undefined,
    function lineCap() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.lineCap;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function lineCap(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.lineCap = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "lineJoin", true, true, undefined, undefined,
    function lineJoin() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.lineJoin;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function lineJoin(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.lineJoin = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "miterLimit", true, true, undefined, undefined,
    function miterLimit() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.miterLimit;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function miterLimit(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.miterLimit = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "lineDashOffset", true, true, undefined, undefined,
    function lineDashOffset() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.lineDashOffset;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function lineDashOffset(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.lineDashOffset = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "font", true, true, undefined, undefined,
    function font() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.font;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function font(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.font = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "textAlign", true, true, undefined, undefined,
    function textAlign() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.textAlign;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function textAlign(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.textAlign = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "textBaseline", true, true, undefined, undefined,
    function textBaseline() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.textBaseline;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function textBaseline(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.textBaseline = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "direction", true, true, undefined, undefined,
    function direction() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.direction;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function direction(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.direction = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "fontKerning", true, true, undefined, undefined,
    function fontKerning() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.fontKerning;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function fontKerning(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.fontKerning = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "fontStretch", true, true, undefined, undefined,
    function fontStretch() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.fontStretch;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function fontStretch(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.fontStretch = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "fontVariantCaps", true, true, undefined, undefined,
    function fontVariantCaps() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.fontVariantCaps;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function fontVariantCaps(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.fontVariantCaps = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "letterSpacing", true, true, undefined, undefined,
    function letterSpacing() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.letterSpacing;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function letterSpacing(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.letterSpacing = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "textRendering", true, true, undefined, undefined,
    function textRendering() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.textRendering;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function textRendering(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.textRendering = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "wordSpacing", true, true, undefined, undefined,
    function wordSpacing() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.wordSpacing;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function wordSpacing(value) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            ctx.wordSpacing = value;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);


my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "clip", true, true, true,
    function clip() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.clip.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "createConicGradient", true, true, true,
    function createConicGradient(param0, param0, param0) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.createConicGradient.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "createImageData", true, true, true,
    function createImageData(param0) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.createImageData.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "createLinearGradient", true, true, true,
    function createLinearGradient(param0, param0, param0, param0) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.createLinearGradient.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "createPattern", true, true, true,
    function createPattern(param0, param0) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.createPattern.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "createRadialGradient", true, true, true,
    function createRadialGradient(param0, param0, param0, param0, param0, param0) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.createRadialGradient.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "drawFocusIfNeeded", true, true, true,
    function drawFocusIfNeeded(param0) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.drawFocusIfNeeded.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "drawImage", true, true, true,
    function drawImage(param0, param0, param0) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.drawImage.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "fill", true, true, true,
    function fill() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.fill.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "fillText", true, true, true,
    function fillText(param0, param0, param0) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.fillText.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "getContextAttributes", true, true, true,
    function getContextAttributes() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.getContextAttributes.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "getImageData", true, true, true,
    function getImageData(param0, param0, param0, param0) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.getImageData.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "getLineDash", true, true, true,
    function getLineDash() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.getLineDash.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "getTransform", true, true, true,
    function getTransform() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.getTransform.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "isContextLost", true, true, true,
    function isContextLost() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.isContextLost.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "isPointInPath", true, true, true,
    function isPointInPath(param0, param0) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.isPointInPath.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "isPointInStroke", true, true, true,
    function isPointInStroke(param0, param0) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.isPointInStroke.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "measureText", true, true, true,
    function measureText(param0) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.measureText.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "putImageData", true, true, true,
    function putImageData(param0, param0, param0) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.putImageData.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "reset", true, true, true,
    function reset() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.reset.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "roundRect", true, true, true,
    function roundRect(param0, param0, param0, param0) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.roundRect.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "save", true, true, true,
    function save() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.save.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "scale", true, true, true,
    function scale(param0, param0) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.scale.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "setLineDash", true, true, true,
    function setLineDash(param0) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.setLineDash.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);


my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "setTransform", true, true, true,
    function setTransform() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.setTransform.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "strokeText", true, true, true,
    function strokeText(param0, param0, param0) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.strokeText.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "transform", true, true, true,
    function transform(param0, param0, param0, param0, param0, param0) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.transform.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "translate", true, true, true,
    function translate(param0, param2) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.translate.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "arc", true, true, true,
    function arc(param0, param1, param2, param3, param4) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.arc.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "arcTo", true, true, true,
    function arcTo(param0, param1, param2, param3, param4) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.arcTo.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "beginPath", true, true, true,
    function beginPath() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.beginPath.apply(ctx, arguments);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "bezierCurveTo", true, true, true,
    function bezierCurveTo(param0, param1, param2, param3, param4, param5) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.bezierCurveTo(param0, param1, param2, param3, param4, param5);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "clearRect", true, true, true,
    function clearRect(param0, param1, param2, param3) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.clearRect(param0, param1, param2, param3);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "closePath", true, true, true,
    function closePath() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.closePath();
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "ellipse", true, true, true,
    function ellipse(param0, param1, param2, param3, param4, param5, param6) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.ellipse(param0, param1, param2, param3, param4, param5, param6);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "fillRect", true, true, true,
    function fillRect(param0, param1, param2, param3) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.fillRect(param0, param1, param2, param3);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);
// 我的ctx对象.lineTo()   =>  画图的ctx.lineTo()
my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "lineTo", true, true, true,
    function lineTo(param0, param1) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.lineTo(param0, param1);
            // 77777 9999
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "moveTo", true, true, true,
    function moveTo(param0, param1) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.moveTo(param0, param1);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "quadraticCurveTo", true, true, true,
    function quadraticCurveTo(param0, param1, param2, param3) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.quadraticCurveTo(param0, param1, param2, param3);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "rect", true, true, true,
    function rect(param0, param1, param2, param3) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.rect(param0, param1, param2, param3);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "resetTransform", true, true, true,
    function resetTransform() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.resetTransform();
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "restore", true, true, true,
    function restore() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.restore();
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "rotate", true, true, true,
    function rotate(param0) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.rotate(param0);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "stroke", true, true, true,
    function stroke() {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.stroke();
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(CanvasRenderingContext2D.prototype, "strokeRect", true, true, true,
    function strokeRect(param0, param1, param2, param3) {
        if (this instanceof CanvasRenderingContext2D) {
            let ctx = my_env.memory.my_ctx_ctx.get(this);
            return ctx.strokeRect(param0, param1, param2, param3);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);
