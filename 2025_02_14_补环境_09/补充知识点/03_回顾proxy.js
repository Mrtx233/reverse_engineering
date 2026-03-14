let obj = { // 已经有了的各种对象  -> 想象成潘金莲
    name: "樵夫",
    age:18
};
// 植入一些逻辑. 可以对所有的操作进行hook/代理  -> 王婆
function create_proxy(tag, name){
    return new Proxy(tag, { // 该对象被各种方式访问的时候, 可以进行拦截
        // 从这个对象上拿属性
        get(target, p, receiver) {
            // tag[p] // 从这个对象上拿属性
            // 用反射来获取数据
            let value = Reflect.get(target, p, receiver);
            console.log(name, "获取了", p, "获取到的值", value)
            return value;
        },
        set(target, p, value, receiver) {
            console.log(name, "设置了", p, "设置的值是", value);
            Reflect.set(target, p, value, receiver);
        }
    });
}
obj = create_proxy(obj, "obj");
//从这里开始, 以后用的obj就不是原来的obj, 而是创建的代理对象

// 西门大官人
// 目标网站的代码
console.log(obj.name);
obj.name = "哈哈";
console.log(obj.name);
// 植入一些东西. 提前预设, 在调用该对象的各种属性(某些属性). 可以做到拦截

// ???? 我们无法知道对方网站上用了那个功能/方法/属性
// div = document.createElement("div");
// document.getElementsByClassName();
// document.getElementById();





