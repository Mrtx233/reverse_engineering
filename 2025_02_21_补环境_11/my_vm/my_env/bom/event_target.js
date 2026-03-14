// 构造方法的定义
// 对象的创建
// symbol处理
var EventTarget = function EventTarget() {
    throw new Error("Illegal constructor"); // 777
}
// 处理symbol
my_env.plugins.re_def_sym(EventTarget);

// toString 搞定了
my_env.plugins.set_native(EventTarget);

my_env.plugins.def_obj_prop(EventTarget.prototype, "addEventListener", true, true, true,
    function addEventListener(type, func) {
        if (this instanceof EventTarget) {
            // btn.addEventListener("click", func)
            // 监听的事件源: btn
            // 什么事件:  click
            // 事件触发之后干什么: func
            // 事件的信息保存到内存中
            // my_env.memory.listeners
            let obj_listners = my_env.memory.listeners.get(this);
            if(obj_listners){ // 如果有. 就修改obj_listners就可以了
                // 获取该对象身上, 被绑定的该类型的回调列表
                let callbacks = obj_listners[type];
                // 判断该回调列表是否存在
                if (callbacks){ // 有该事件的回调
                    callbacks.push(func); // 回调列表增加新的回调函数
                } else { // 从来没有记录过该事件的回调
                    obj_listners[type] = [func]; // 增加新的回调列表
                }
            } else { // 如果没有, 要创建新的
                let obj_listeners = {};
                obj_listeners[type] = [func];
                my_env.memory.listeners.set(this, obj_listeners);
            }
            /**
             * B:
             * div.add("blur", func)
             * listeners: { // 想象成map
             *             btn: {
             *                 "click": [func1, func2, func3],
             *                 "blur": [func]
             *
             *             },
             *             window: {
             *                 "click": [func1, func2, fun3]
             *             },
             *             div: {
             *                 "click": [func1, func2, fun3],
             *                 "blur": []
             *             }
             *         },
             *         ...
             */

        } else {
            throw new TypeError("Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(EventTarget.prototype, "dispatchEvent", true, true, true,
    function dispatchEvent(event) {
        if (this instanceof EventTarget) {
            // 获取到被绑定到该对象上的所有的事件监听
            let obj_listeners = my_env.memory.listeners.get(this);
            if(!obj_listeners){
                return true;
            }
            // 暂时认为event里面有type, 一会单独去处理.  7777 999
            let tp = event.type;
            // 从该对象的所有事件监听中获取到当前类型的回调列表
            let callbacks = obj_listeners[tp];
            if(!callbacks){
                return true;
            }
            // 下面这些数据, 只有在事件派发的时候. 才有
            let event_data = my_env.memory.events.get(event);
            event_data['target'] = this;
            event_data['srcElement'] = this;
            event_data['currentTarget'] = this;

            // 执行绑定在该对象下的, 该类型的 回调列表中的每一个回调函数
            for(let i = 0; i < callbacks.length; i++){
                let func = callbacks[i];
                // 执行回调函数
                func.call(this, event);
            }
            return true;
        } else {
            throw new TypeError("Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(EventTarget.prototype, "removeEventListener", true, true, true,
    function removeEventListener(type, func) {
        if (this instanceof EventTarget) {
            // 对象, 类型, 函数都得能对得上才能删
            let obj_listeners = my_env.memory.listeners.get(this);
            if(!obj_listeners){
                return;
            }
            let callbacks = obj_listeners[type];
            if(!callbacks){
                return;
            }
            for (let i = 0 ; i < callbacks.length; i++){
                let callback = callbacks[i];
                if(callback === func){
                    callbacks.splice(i, 1); // 从当前i位置, 截取1个出来, 相当于删除第i个
                    return;
                }
            }
        } else {
            throw new TypeError("Illegal invocation");
        }
    },
);
