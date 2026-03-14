// 构造方法的定义
// 对象的创建
// symbol处理


var HTMLAnchorElement = function HTMLAnchorElement() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor");
}
// 处理symbol
my_env.plugins.re_def_sym(HTMLAnchorElement);

// toString 搞定了
my_env.plugins.set_native(HTMLAnchorElement);


my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "target", true, true, undefined, undefined,
    function target() {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function target(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "download", true, true, undefined, undefined,
    function download() {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function download(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "ping", true, true, undefined, undefined,
    function ping() {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function ping(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "rel", true, true, undefined, undefined,
    function rel() {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function rel(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "relList", true, true, undefined, undefined,
    function relList() {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function relList(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "hreflang", true, true, undefined, undefined,
    function hreflang() {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function hreflang(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "type", true, true, undefined, undefined,
    function type() {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function type(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "referrerPolicy", true, true, undefined, undefined,
    function referrerPolicy() {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function referrerPolicy(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "text", true, true, undefined, undefined,
    function text() {
        if (this instanceof HTMLAnchorElement) {
            let obj_elem = my_env.memory.nodes.get(this);
            return my_env.out.$(obj_elem).text();
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function text(value) {
        if (this instanceof HTMLAnchorElement) {
            let obj_elem = my_env.memory.nodes.get(this);
            my_env.out.$(obj_elem).text(value);
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "coords", true, true, undefined, undefined,
    function coords() {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function coords(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "charset", true, true, undefined, undefined,
    function charset() {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function charset(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "name", true, true, undefined, undefined,
    function name() {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function name(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "rev", true, true, undefined, undefined,
    function rev() {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function rev(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "shape", true, true, undefined, undefined,
    function shape() {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function shape(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "origin", true, true, undefined, undefined,
    function origin() {
        if (this instanceof HTMLAnchorElement) {
            let href = this.href;
            return this.protocol +'//'+ this.host;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "protocol", true, true, undefined, undefined,
    function protocol() {
        if (this instanceof HTMLAnchorElement) {
            let href = this.href;
            return this.a_href_info.protocol;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function protocol(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "username", true, true, undefined, undefined,
    function username() {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function username(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "password", true, true, undefined, undefined,
    function password() {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function password(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "host", true, true, undefined, undefined,
    function host() {
        if (this instanceof HTMLAnchorElement) {
            let href = this.href;
            return this.a_href_info.host;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function host(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "hostname", true, true, undefined, undefined,
    function hostname() {
        if (this instanceof HTMLAnchorElement) {
           let href = this.href;
            return this.a_href_info.hostname;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function hostname(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "port", true, true, undefined, undefined,
    function port() {
        if (this instanceof HTMLAnchorElement) {
            let href = this.href;
            return this.a_href_info.port;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function port(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "pathname", true, true, undefined, undefined,
    function pathname() {
        if (this instanceof HTMLAnchorElement) {
            let href = this.href;
            return this.a_href_info.pathname;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function pathname(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "search", true, true, undefined, undefined,
    function search() {
        if (this instanceof HTMLAnchorElement) {
           let href = this.href;
            return this.a_href_info.search;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function search(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "hash", true, true, undefined, undefined,
    function hash() {
        if (this instanceof HTMLAnchorElement) {
            let href = this.href;
            return this.a_href_info.hash;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function hash(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "href", true, true, undefined, undefined,
    function href() {
        if (this instanceof HTMLAnchorElement) {
            // 处理拿到的href值
            let url = this.getAttribute("href");
            // 做处理...
            let u = my_env.out.urllib.resolve(location.href, url); // python中的urljoin
            let obj = my_env.out.urllib.parse(u);
            if(obj.protocol === "http:" && obj.port === '80') u = u.replaceAll(":80", "");
            if(obj.protocol === "https:" && obj.port === '443') u = u.replaceAll(":443", "");

            obj = my_env.out.urllib.parse(u);
            let a_href_info = {
              protocol: obj.protocol === null ? "": obj.protocol,
              host: obj.host === null ? "": obj.host,
              port: obj.port === null ? "": obj.port,
              hostname: obj.hostname === null ? "": obj.hostname,
              hash: obj.hash === null ? "": obj.hash,
              search: obj.search === null ? "": obj.search,
              query: obj.query === null ? "": obj.query,
              pathname: obj.pathname === null ? "": obj.pathname,
              path: obj.path === null ? "": obj.path,
              href: obj.href === null ? "": obj.href,
            };
            this.a_href_info = a_href_info; // 保存该数据到当前对象
            return a_href_info['href'];
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function href(value) {
        if (this instanceof HTMLAnchorElement) {
           this.setAttribute("href", value); // 直接丢进去 -> 符合浏览器逻辑的
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "toString", true, true, true,
    function toString() {
        if (this instanceof HTMLAnchorElement) {
            return this.href;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "hrefTranslate", true, true, undefined, undefined,
    function hrefTranslate() {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function hrefTranslate(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);

my_env.plugins.def_obj_prop(HTMLAnchorElement.prototype, "attributionSrc", true, true, undefined, undefined,
    function attributionSrc() {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    },
    function attributionSrc(value) {
        if (this instanceof HTMLAnchorElement) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError, "Illegal invocation");
        }
    }
);
Object.setPrototypeOf(HTMLAnchorElement.prototype, HTMLElement.prototype);