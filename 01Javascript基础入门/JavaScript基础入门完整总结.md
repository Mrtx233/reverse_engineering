# JavaScript基础入门完整总结

> 来源整理：
>
> - `2024_09_27_JavaScript基础语法_01/课件/16_Javascript入门.md`
> - `2024_10_21_javascript_语法_03/课件/17_Javascript高级.md`

官方语法参考：<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference>

本文把两份课件内容整理成一份连续的学习笔记，重点覆盖 JavaScript 基础语法、函数、对象、原型、闭包、浏览器环境、DOM 交互，以及逆向工程中常见的 `eval`、`hook`、无限 `debugger` 等知识点。

## 目录

1. JavaScript简介和HTML引入方式
2. 基本数据类型与变量
3. 运算符与类型转换
4. 字符串常用操作
5. 条件分支
6. 循环语句
7. 数组和对象
8. 函数基础与函数表达式
9. 变量提升与let
10. 闭包函数
11. 定时器与时间对象
12. eval函数
13. prototype、原型对象与原型链
14. window对象
15. call和apply
16. 箭头函数与Promise
17. 逗号运算符与三元运算符
18. JS Hook
19. localStorage、sessionStorage和cookie
20. JS和HTML交互
21. 逆向常用速查

## 1. JavaScript简介和HTML引入方式

JavaScript 是一门主要运行在浏览器中的脚本语言，简称 JS。它和 Java 没有直接关系，只是名字比较像。

浏览器执行 HTML 时，可以通过两种方式引入 JavaScript。

### 1.1 直接写在script标签中

```html
<script>
    console.log("hello JavaScript");
</script>
```

### 1.2 写在独立js文件中

```html
<script src="./main.js"></script>
```

### 1.3 script位置的影响

HTML 页面是从上到下解析和渲染的。如果 JS 代码写在元素之前，代码执行时可能还拿不到后面的 HTML 元素。

常见处理方式：

```html
<!-- 方式一：把script放在body底部 -->
<body>
    <button id="btn">按钮</button>

    <script>
        document.getElementById("btn").onclick = function(){
            console.log("点击了按钮");
        };
    </script>
</body>
```

```html
<!-- 方式二：等页面加载完成后再执行 -->
<script>
    window.onload = function(){
        document.getElementById("btn").onclick = function(){
            console.log("点击了按钮");
        };
    };
</script>
```

## 2. 基本数据类型与变量

课件中重点讲到的 JS 基本类型如下：

```javascript
number      // 数字，整数和小数都属于number
string      // 字符串
boolean     // 布尔值：true、false
object      // 对象，数组、普通对象、new出来的实例等
function    // 函数类型
undefined   // 未定义
```

补充理解：

- `null` 表示空对象。
- `undefined` 表示变量已经声明但没有赋值，或者访问了不存在的值。
- `null` 和 `undefined` 都可以在条件判断中当作 `false` 使用。

### 2.1 使用var声明变量

```js
var a;
var b = 10;
var c = 1, d = 2, e = 3;
var x, y, z = 100;
```

### 2.2 注释

```js
// 单行注释

/*
 多行注释
*/
```

### 2.3 建议

早期 JS 使用 `var` 声明变量，但 `var` 有变量提升和重复声明等问题。现代写法更推荐：

```js
let name = "alex";      // 变量
const PI = 3.1415926;   // 常量
```

课件重点强调：`let` 可以避免很多由 `var` 变量提升带来的问题。

## 3. 运算符与类型转换

### 3.1 逻辑运算符

Python 中的 `and`、`or`、`not`，在 JS 中对应：

```js
&&   // 与
||   // 或
!    // 非
```

示例：

```js
var a = 10, b = 20, c = 30;

console.log(a > b && b > c);  // false
console.log(!(a > b));        // true
```

### 3.2 == 和 ===

```js
var a = "123";
var b = 123;

console.log(a == b);   // true，只比较值，会尝试类型转换
console.log(a === b);  // false，值和类型都必须一致
```

实际开发和逆向分析中，建议优先看 `===`，因为它更严格，不会偷偷做类型转换。

### 3.3 类型转换

字符串转数字：

```js
var a = "10086";
a = parseInt(a);
console.log(a + 10);  // 10096
```

数字转字符串：

```js
var a = 100;

var b = a.toString();
var c = a + "";
```

进制转换：

```js
var n = 122;
console.log(n.toString(16));      // 7a

console.log(parseInt("AB", 16));  // 171
```

### 3.4 自增和自减

```js
a++;
++a;
a--;
--a;
```

核心规则：

- `a++` 和 `++a` 都会让 `a` 自增 1。
- `a++` 这个表达式的结果是自增之前的值。
- `++a` 这个表达式的结果是自增之后的值。

示例：

```js
var a = 10;
var b = a++;

console.log(b);  // 10
console.log(a);  // 11

a = 10;
b = ++a;

console.log(b);  // 11
console.log(a);  // 11
```

绕一点的例子：

```js
var a = 10;
a = a++;
console.log(a);  // 10

a = 10;
a = ++a;
console.log(a);  // 11
```

## 4. 字符串常用操作

```js
var s = "hello JavaScript";

s.length;               // 字符串长度
s.split(" ");           // 按指定分隔符切割
s.substr(0, 5);         // 从索引0开始，取5个字符
s.substring(0, 5);      // 从索引0切到索引5，不包含5
s.charAt(1);            // 取索引1位置的字符
s[1];                   // 也可以这样取字符
s.indexOf("Java");      // 查找第一次出现的位置，找不到返回-1
s.lastIndexOf("a");     // 查找最后一次出现的位置
s.toUpperCase();        // 转大写
s.startsWith("hello");  // 判断是否以指定内容开头
s.charCodeAt(0);        // 获取指定位置字符的编码
String.fromCharCode(65);// 根据编码还原字符
```

逆向中经常会遇到：

```js
charCodeAt()
String.fromCharCode()
```

它们常用于字符编码、异或、混淆还原、简单加密解密逻辑。

## 5. 条件分支

### 5.1 if

```js
if(条件){
    // 条件成立时执行
}
```

### 5.2 if else

```js
if(条件){
    // 条件成立
} else {
    // 条件不成立
}
```

### 5.3 if else if else

```js
if(条件1){
    // 条件1成立
} else if(条件2){
    // 条件2成立
} else if(条件3){
    // 条件3成立
} else {
    // 以上都不成立
}
```

### 5.4 switch

```js
switch(value){
    case 1:
        console.log("value是1");
        break;
    case 2:
        console.log("value是2");
        break;
    default:
        console.log("其他情况");
}
```

注意：如果 `case` 中不写 `break`，会发生 `case穿透`，程序会继续执行后面的 `case` 代码。

```js
var n = 1;

switch(n){
    case 1:
        console.log("一");
    case 2:
        console.log("二");
        break;
}

// 输出：
// 一
// 二
```

## 6. 循环语句

### 6.1 while循环

```js
while(条件){
    // 循环体
}
```

示例：

```js
var i = 0;

while(i < 5){
    console.log(i);
    i++;
}
```

### 6.2 do while循环

```js
do{
    // 循环体
} while(条件);
```

特点：不管条件是否成立，循环体至少执行一次。

```js
var i = 10;

do{
    console.log(i);
    i++;
} while(i < 5);
```

### 6.3 for循环

```js
for(变量声明; 条件判断; 改变变量){
    // 循环体
}
```

示例：

```js
for(var i = 1; i < 100; i++){
    console.log(i);
}
```

执行顺序：

1. 执行变量声明。
2. 判断条件是否成立。
3. 成立则执行循环体。
4. 执行改变变量的表达式。
5. 再次判断条件。
6. 条件不成立时跳出循环。

### 6.4 for in

遍历数组时，`for in` 拿到的是索引：

```js
var arr = [11, 22, 33, 44];

for(let i in arr){
    console.log(i, arr[i]);
}
```

遍历对象时，`for in` 拿到的是属性名：

```js
var p = {name: "alex", age: 18};

for(let key in p){
    console.log(key, p[key]);
}
```

## 7. 数组和对象

### 7.1 创建数组

```js
var arr1 = [11, 22, 33];
var arr2 = new Array(11, 22, 33);
```

### 7.2 数组常用操作

```js
arr.length;        // 数组长度
arr.push(data);    // 从尾部添加
arr.pop();         // 从尾部删除，并返回被删除的元素
arr.shift();       // 从头部删除，并返回被删除的元素
arr.join("-");     // 使用指定连接符拼接成字符串
```

遍历数组：

```js
var arr = ["a", "b", "c"];

arr.forEach(function(e, i){
    console.log(i, e);
});
```

### 7.3 创建对象

JS 对象和 Python 字典很像，使用 `{}` 创建。

```js
var p = {
    name: "汪峰",
    age: 18,
    wife: "章子怡",
    chi: function(){
        console.log("吃饭");
    }
};
```

### 7.4 使用对象

```js
p.name;
p.age;
p["wife"];
p.chi();
p["chi"]();
```

遍历对象中的普通属性：

```js
for(var key in p){
    if(typeof(p[key]) !== "function"){
        console.log(key, p[key]);
    }
}
```

## 8. 函数基础与函数表达式

### 8.1 声明函数

```js
function add(a, b){
    return a + b;
}

var ret = add(1, 2);
console.log(ret);  // 3
```

### 8.2 函数表达式

函数可以作为一个值赋给变量。

```js
var add = function(a, b){
    return a + b;
};

console.log(add(1, 2));
```

只要一个变量指向函数，就可以使用 `变量名()` 调用。

```js
var $ = function(a, b){
    return a + b;
};

console.log($(1, 2));
```

### 8.3 立即执行函数IIFE

立即执行函数的形式：

```js
(function(a, b){
    console.log(a + b);
})(1, 2);
```

含义：

- 第一个括号里放一个函数。
- 第二个括号表示立即调用这个函数。

IIFE 经常用于创建局部作用域，避免污染全局变量。

### 8.4 函数返回对象

```js
var tools = (function(){
    var obj = {
        name: "alex",
        age: 18,
        say: function(){
            console.log("hello");
        }
    };

    return obj;
})();

tools.say();
```

### 8.5 return和逗号

JS 中逗号表达式会从左到右执行，最终取最后一个表达式的结果。

```js
var fn = function(){
    return console.log("第一句"), console.log("第二句"), "最终返回值";
};

var ret = fn();
console.log(ret);  // 最终返回值
```

逆向里经常会看到这种写法，因为它可以把多步逻辑压缩到一行里。

## 9. 变量提升与let

### 9.1 var变量提升

使用 `var` 声明变量时，声明会被提升到当前作用域顶部，但赋值不会提升。

原代码：

```js
function fn(){
    console.log(name);
    var name = "大马猴";
}

fn();
```

实际可以理解为：

```js
function fn(){
    var name;
    console.log(name);  // undefined
    name = "大马猴";
}

fn();
```

所以代码不会因为先访问后声明而直接报错，而是输出 `undefined`。

### 9.2 let不会这样使用

```js
function fn(){
    console.log(name);
    let name = "大马猴";
}

fn();
```

这段代码会直接报错，因为 `let` 声明的变量不能在声明前使用。

### 9.3 let不能在同一作用域重复声明

```js
function fn(){
    let name = "周杰伦";
    let name = "王力宏";  // 报错
}
```

结论：

- `var` 有变量提升。
- `let` 更安全，不能在声明前使用。
- `let` 在同一作用域中不能重复声明。

## 10. 闭包函数

### 10.1 为什么需要闭包

多个 JS 文件在同一个页面中运行时，默认共享全局作用域。

```html
<script src="js01.js"></script>
<script src="js02.js"></script>
```

如果两个文件都写：

```js
var name = "alex";
```

就可能互相覆盖，造成变量污染。

### 10.2 使用IIFE创建局部空间

```js
(function(){
    var name = "alex";

    setTimeout(function(){
        console.log("一号模块：" + name);
    }, 5000);
})();
```

这样 `name` 就只存在于函数内部，外界无法直接访问。

### 10.3 对外暴露功能

如果内部功能需要被外界调用，可以把函数或对象返回出去。

```js
let jiami = (function(){
    let key = "10086";

    let rsa = function(data){
        console.log("秘钥：" + key);
        console.log("数据：" + data);
        return "密文";
    };

    return rsa;
})();

jiami("hello");
```

### 10.4 返回多个功能

```js
let jiami = (function(){
    let key = "10086";

    let innerTool = {
        log: function(){
            console.log("内部工具");
        }
    };

    return {
        rsa_jiami: function(data){
            innerTool.log();
            console.log("RSA加密：" + data);
            console.log("秘钥：" + key);
            return "rsa密文";
        },
        aes_jiami: function(data){
            innerTool.log();
            console.log("AES加密：" + data);
            console.log("秘钥：" + key);
            return "aes密文";
        }
    };
})();

jiami.rsa_jiami("hello");
```

### 10.5 闭包的特点

闭包可以理解为：内部函数使用了外部函数的变量，并且这个变量在外部函数执行结束后仍然被保留。

特点：

- 内层函数可以访问外层函数的变量。
- 外层变量会因为被内层函数引用而常驻内存。
- 可以隔离作用域，避免变量冲突。
- 可以隐藏内部实现，只暴露需要给外部使用的接口。

## 11. 定时器与时间对象

### 11.1 setTimeout

`setTimeout` 表示延迟执行一次。

```js
var t = setTimeout(function(){
    console.log("5秒后执行");
}, 5000);
```

停止定时器：

```js
clearTimeout(t);
```

### 11.2 setInterval

`setInterval` 表示每隔一段时间执行一次。

```js
var t = setInterval(function(){
    console.log("每5秒执行一次");
}, 5000);
```

停止定时器：

```js
clearInterval(t);
```

清理一批定时器的粗暴方式：

```js
for(let i = 0; i <= 9999; i++){
    clearInterval(i);
}
```

### 11.3 Date时间对象

```js
var d = new Date();
var d2 = new Date("2018-12-01 15:32:48");
```

常用方法：

```js
var year = d.getFullYear();
var month = d.getMonth() + 1;  // 月份从0开始
var date = d.getDate();
var hour = d.getHours();
var minute = d.getMinutes();
var second = d.getSeconds();

var formatDate = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
```

时间戳：

```js
d.getTime();  // 从1970-01-01 00:00:00到当前时间的毫秒数
```

逆向中常见参数：

```text
_t=1640090719637
timestamp=1640090719637
```

这类参数通常和时间戳有关。

## 12. eval函数

`eval` 可以把字符串当成 JS 代码执行。

```js
var s = "console.log('我爱你')";
eval(s);
```

关键理解：

- `eval()` 里面最终一定是 JS 代码字符串。
- 很多网站会利用 `eval` 做代码混淆或反爬。
- 看到复杂的 `eval(function(...){...}(...))` 时，目标通常是先还原出里面真正要执行的字符串。

示例：

```js
eval(function(p,a,c,k,e,d){
    // 复杂还原逻辑
    return p;
}("console.log('hello')", 62, 2, "console|log".split("|"), 0, {}));
```

分析思路：

1. 不要急着执行 `eval`。
2. 把 `eval(...)` 中的内容单独拿出来运行。
3. 看它最终返回的字符串是什么。
4. 再分析字符串中的真实代码。

## 13. prototype、原型对象与原型链

### 13.1 构造函数

```js
function People(name, age){
    this.name = name;
    this.age = age;
    this.run = function(){
        console.log(this.name + "在跑");
    };
}

var p1 = new People("张三", 18);
var p2 = new People("李四", 19);

p1.run();
p2.run();
```

`People` 是构造函数，用来创建对象。

### 13.2 prototype扩展功能

如果想给构造函数创建出来的对象增加公共方法，可以挂到 `prototype` 上。

```js
People.prototype.eat = function(){
    console.log(this.name + "在吃饭");
};

p1.eat();
p2.eat();
```

### 13.3 原型对象

每个 JS 对象都有一个隐藏属性 `__proto__`，指向它的原型对象。

```js
function Friend(){
    this.chi = function(){
        console.log("对象自己的chi");
    };
}

Friend.prototype.chi = function(){
    console.log("原型上的chi");
};

var f = new Friend();
f.chi();  // 优先执行对象自己的chi
```

查找属性或方法时：

1. 先找对象自己身上有没有。
2. 如果没有，再找对象的原型对象。
3. 还没有，就继续沿着原型往上找。

### 13.4 prototype和__proto__的关系

```js
f.__proto__ === Friend.prototype;  // true
```

构造函数的 `prototype` 和实例对象的 `__proto__` 指向同一个原型对象。

### 13.5 原型链

原型对象本身也是对象，所以原型对象也有自己的 `__proto__`。

```js
f.__proto__.__proto__ === Object.prototype;  // true
```

当调用：

```js
f.toString();
```

JS 会按下面路径查找：

```text
f对象自身
-> f.__proto__
-> f.__proto__.__proto__
-> Object.prototype
-> null
```

如果一路找不到，就会报错。

结论：原型链就是 JS 属性和方法查找的路径。

### 13.6 Function构造器和debugger

函数也是对象，并且函数对象由 `Function` 创建。

```js
function fn(){}
console.log(fn.__proto__.constructor);  // Function
```

因此下面两种写法都可以触发断点：

```js
(function(){debugger})();
```

```js
new Function("debugger")();
```

逆向中如果遇到无限 `debugger`，经常会和 `Function`、`Function.prototype.constructor`、定时器有关。

## 14. window对象

在浏览器中，`window` 可以理解为全局对象。

```js
eval === window.eval;                  // true
setInterval === window.setInterval;    // true

var a = 10;
console.log(a === window.a);           // true

function fn(){}
console.log(fn === window.fn);         // true
```

给 `window` 添加属性后，可以直接访问：

```js
window.mm = "爱你";
console.log(mm);
```

### 14.1 使用window暴露模块能力

```js
(function(w){
    let tools = {
        b64: function(){
            console.log("计算B64");
            return "b64";
        },
        md5: function(){
            console.log("计算MD5");
            return "md5";
        }
    };

    w.jiami = {
        AES: function(msg){
            tools.b64();
            tools.md5();
            return "加密结果";
        },
        RSA: function(msg){
            return "RSA结果";
        }
    };
})(window);

jiami.AES("hello");
```

这种写法很常见：

- 内部变量和工具函数不暴露。
- 只把外界需要调用的方法挂到 `window` 上。

## 15. call和apply

`call` 和 `apply` 都可以改变函数执行时的 `this` 指向。

### 15.1 普通调用

```js
function People(name, age){
    this.name = name;
    this.age = age;
    this.chi = function(what1, what2){
        console.log(this.name, "在吃", what1, what2);
    };
}

var p1 = new People("alex", 18);
p1.chi("馒头", "大饼");
```

### 15.2 call

```js
function eat(what1, what2){
    console.log(this.name, "在吃", what1, what2);
}

var p = {name: "alex"};

eat.call(p, "查克拉", "元宇宙");
```

语法：

```js
函数.call(对象, 参数1, 参数2, 参数3);
```

含义：

- 执行函数。
- 把第一个参数对象传给函数内部的 `this`。
- 后面的参数正常传给函数。

### 15.3 apply

```js
eat.apply(p, ["苞米茬子", "大饼子"]);
```

`apply` 和 `call` 的区别：

- `call` 后面的参数是一个个传。
- `apply` 后面的参数用数组传。

## 16. 箭头函数与Promise

### 16.1 箭头函数

箭头函数是 ES6 中简化函数写法的语法。

```js
var fn1 = function(){};
var fn2 = () => {};

var fn3 = function(name){};
var fn4 = name => {};
var fn5 = (name) => {};

var fn6 = function(name, age){};
var fn7 = (name, age) => {};
```

注意：箭头函数的 `this` 和普通函数不同。课件没有展开，但逆向时看到箭头函数要留心它不会创建自己的 `this`。

### 16.2 Promise基础

`Promise` 用于处理异步任务，例如 AJAX、定时器、网络请求等。

```js
function send(url){
    return new Promise(function(resolve, reject){
        console.log("我要发送ajax了", url);

        setTimeout(function(){
            console.log("ajax回来了");
            resolve("数据");
        }, 3000);
    });
}

send("www.baidu.com").then(function(data){
    console.log("处理第一次数据", data);
    return send("www.google.com");
}).then(function(data){
    console.log("处理第二次数据", data);
});
```

核心理解：

- `new Promise()` 创建一个异步任务。
- `resolve()` 表示成功，后续进入 `.then()`。
- `.then()` 可以链式调用。
- 前一个 `.then()` 返回新的 Promise，后一个 `.then()` 会等待它完成。

## 17. 逗号运算符与三元运算符

### 17.1 逗号运算符

逗号表达式会从左到右执行，整体结果取最后一个值。

```js
let x = (1, 2, 3);
console.log(x);  // 3
```

示例：

```js
function s(){
    console.log(1), console.log(2), console.log(3);

    var a;

    return a = 10,
        a++,
        a += 100,
        {name: "alex", a: a};
}

let r = s();
console.log(r);  // {name: "alex", a: 111}
```

### 17.2 三元运算符

语法：

```js
条件 ? 条件成立时的值 : 条件不成立时的值
```

示例：

```js
let a = 10;
let b = 20;

let max = a > b ? a : b;
console.log(max);  // 20
```

复杂混淆代码中，三元运算符可能会和逗号运算符、自增自减混在一起：

```js
e = (
    e = a > 3 ? b : c,
    m = e < b++ ? c-- : a = 3 > b % d ? 27 : 37,
    m++
);
```

分析这种代码时，不要急，按优先级和执行顺序拆开看。

## 18. JS Hook

Hook 可以理解为“钩子”：在原函数执行前后插入自己的逻辑。

逆向中经常用 Hook 来：

- 观察某个函数传入了什么参数。
- 找到加密入口。
- 阻止无限 `debugger`。
- 监控 cookie、localStorage、JSON 等关键数据。

### 18.1 hook eval

```js
var eval_ = eval;

eval = function(s){
    console.log("eval参数：", s);
    debugger;
    return eval_(s);
};

eval.toString = function(){
    return "function eval() { [native code] }";
};
```

思路：

1. 先保存原始函数。
2. 重写同名函数。
3. 在重写函数中打印参数、打断点。
4. 再调用原始函数，保证原逻辑继续运行。

### 18.2 hook Function

用于处理 `new Function("debugger")()` 这类无限断点。

```js
var Function_ = Function;

Function = function(){
    var lastArg = arguments[arguments.length - 1];
    lastArg = lastArg.replaceAll("debugger", "");

    var arr = [];
    for(var i = 0; i < arguments.length - 1; i++){
        arr.push(arguments[i]);
    }
    arr.push(lastArg);

    return Function_.apply(this, arr);
};
```

有些代码不直接调用 `Function`，而是通过 `constructor` 调用：

```js
Function.prototype.constructor_ = Function.prototype.constructor;

Function.prototype.constructor = function(){
    var lastArg = arguments[arguments.length - 1];
    lastArg = lastArg.replaceAll("debugger", "");

    var arr = [];
    for(var i = 0; i < arguments.length - 1; i++){
        arr.push(arguments[i]);
    }
    arr.push(lastArg);

    return Function.prototype.constructor_.apply(this, arr);
};
```

### 18.3 hook属性

有时要监控的不是函数，而是属性，比如 `document.cookie`。

```js
(function(){
    var v;

    Object.defineProperty(document, "cookie", {
        set: function(val){
            console.log("有人设置cookie：", val);
            v = val;

            if(val.indexOf("uuid") !== -1){
                debugger;
            }

            return val;
        },
        get: function(){
            console.log("有人读取cookie");
            debugger;
            return v;
        }
    });
})();
```

常见 Hook 目标：

```text
eval
Function
JSON.stringify
JSON.parse
setTimeout
setInterval
document.cookie
localStorage.setItem
localStorage.getItem
XMLHttpRequest
fetch
```

## 19. localStorage、sessionStorage和cookie

### 19.1 localStorage

`localStorage` 是浏览器本地永久存储。只要不主动删除，关闭浏览器后数据还在。

```js
localStorage.setItem("name", "alex");
localStorage.getItem("name");
localStorage.removeItem("name");
```

### 19.2 sessionStorage

`sessionStorage` 是会话级存储。页面会话结束后，数据通常就没了。

```js
sessionStorage.setItem("token", "abc");
sessionStorage.getItem("token");
sessionStorage.removeItem("token");
```

### 19.3 Storage常用方法

```js
setItem(key, value);     // 设置值
getItem(key);            // 获取值
removeItem(key);         // 删除值
```

### 19.4 cookie

`document.cookie` 也是浏览器端存储，本质上是一大串字符串，通常带有过期时间、作用域等属性。

逆向中要重点关注：

- 登录态 cookie。
- 设备指纹 cookie。
- 风控 cookie。
- `uuid`、`token`、`sessionid`、`sign` 等字段。

## 20. JS和HTML交互

### 20.1 HTML标签中绑定事件

```html
<input type="button" value="点我" onclick="fn()" />

<script>
    function fn(){
        alert("点击了按钮");
    }
</script>
```

这种写法直接在 HTML 标签上写 `onclick`，简单直观，但不适合复杂项目。

### 20.2 常见事件

```text
click       点击
focus       获取焦点
blur        失去焦点
submit      提交表单
change      选项变化
scroll      滚动条滚动
mouseover   鼠标滑过
mouseout    鼠标滑出
mousemove   鼠标移动
```

### 20.3 addEventListener绑定事件

```html
<input type="button" id="btn" value="别点我了">

<script>
    document.querySelector("#btn").addEventListener("click", function(){
        console.log("你点我干什么？");
    });
</script>
```

注意：必须保证 JS 执行时，页面元素已经加载出来。可以把 `<script>` 放到元素后面，或者使用 `window.onload`。

### 20.4 获取页面元素

```js
document.querySelector("#btn");          // 使用CSS选择器获取第一个匹配元素
document.getElementById("btn");          // 根据id获取元素
document.getElementsByClassName("item"); // 根据class获取元素集合
```

表单也可以通过 name 获取：

```html
<form name="myform">
    <input name="username" />
</form>
```

```js
document.myform.username;
```

### 20.5 表单验证示例

```html
<form action="服务器地址" id="login_form">
    <label for="username">用户名:</label>
    <input type="text" name="username" id="username">
    <span id="username_info"></span>
    <br>

    <label for="password">密码:</label>
    <input type="text" name="password" id="password">
    <span id="password_info"></span>
    <br>

    <input type="button" id="btn" value="点我登录">
</form>
```

```html
<script>
    window.onload = function(){
        document.getElementById("btn").addEventListener("click", function(){
            document.getElementById("username_info").innerText = "";
            document.getElementById("password_info").innerText = "";

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            let flag = true;

            if(!username){
                document.getElementById("username_info").innerText = "用户名不能为空";
                flag = false;
            }

            if(!password){
                document.getElementById("password_info").innerText = "密码不能为空";
                flag = false;
            }

            if(flag){
                document.getElementById("login_form").submit();
            }
        });
    };
</script>
```

这个例子体现了 JS 和 HTML 交互的核心能力：

- 获取 HTML 元素。
- 读取输入框内容。
- 修改页面文本。
- 绑定事件。
- 控制表单提交。

## 21. 逆向常用速查

### 21.1 看到eval怎么办

重点：`eval` 最终执行的是字符串。

处理思路：

```text
eval(复杂表达式)
-> 单独执行复杂表达式
-> 拿到返回字符串
-> 分析真实代码
```

可以临时 Hook：

```js
var eval_ = eval;
eval = function(code){
    console.log(code);
    debugger;
    return eval_(code);
};
```

### 21.2 看到无限debugger怎么办

可能来源：

```js
debugger;
new Function("debugger")();
setInterval(function(){debugger}, 100);
Function.prototype.constructor("debugger")();
```

处理方向：

- DevTools 中右键断点位置，选择 never pause here。
- Hook `Function`。
- Hook `Function.prototype.constructor`。
- 清理定时器。

### 21.3 找全局函数或全局变量

浏览器中全局变量通常挂在 `window` 上。

```js
window.xxx;
```

如果代码中有：

```js
(function(w){
    w.jiami = {
        AES: function(){}
    };
})(window);
```

那么外部可以直接调用：

```js
jiami.AES();
window.jiami.AES();
```

### 21.4 找加密函数

常见关键词：

```text
sign
token
encrypt
decrypt
AES
DES
RSA
MD5
SHA
Base64
btoa
atob
CryptoJS
```

常见入口：

```text
点击事件
表单提交
AJAX请求
fetch
XMLHttpRequest
JSON.stringify
localStorage
cookie
```

### 21.5 分析复杂表达式

遇到下面内容要拆开看：

```text
a++
++a
逗号表达式
三元表达式
匿名函数
立即执行函数
call/apply
prototype
constructor
```

不要整坨硬看。建议按下面步骤：

1. 先格式化代码。
2. 找函数入口。
3. 找关键参数来源。
4. 找返回值。
5. 对复杂表达式拆分成多行。
6. 必要时打断点或插入 `console.log`。

## 总结

这两份课件的主线可以概括为：

```text
JS基础语法
-> 函数和对象
-> 作用域和闭包
-> 原型与原型链
-> 浏览器全局对象window
-> DOM事件和HTML交互
-> eval、hook、debugger等逆向常见技巧
```

学习时建议先把基础语法跑通，再重点理解下面几个逆向高频点：

- 函数可以被赋值、传递、立即执行。
- `var` 有变量提升，`let` 更安全。
- 闭包可以隐藏变量，也能保留变量。
- 原型链决定属性和方法怎么查找。
- `window` 是浏览器全局对象。
- `call` 和 `apply` 会改变 `this`。
- `eval` 的核心是执行字符串。
- Hook 的核心是保存原函数、重写函数、插入调试逻辑、再调用原函数。
- JS 能读取和修改 HTML 页面，也能影响请求参数、cookie、本地存储。

