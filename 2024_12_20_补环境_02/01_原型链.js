// 对象在查找某个方法|属性的时候.   obj.xxx
// 先查找对象自身是否包含该方法|属性, 有的话, 拿过来使用
// 如果没有呢? 就要去找到该对象的原型对象.
// 查找该属性|方法是否存在, 如果存在, 就拿过来用, 如果不存在
// 继续查找该原型对象的原型对象... object. 如果object中没有该属性活方法
// 程序报错

// // Person => {prototype:{constructor: Person}, __proto__:Function.prototype }
// function Person(){
//     this.name = "樵夫";
// }
//
// // 默认情况下,我们写的每一个函数都会存在一个属性.
// // prototype => 会作为该函数new出来的对象的原型对象
// Person.prototype = {
//     age:18,
//     chi: function(){
//         console.log("我爱吃东西")
//     }
// };
//
// var p = new Person();
//
// // 每一个对象都会有该属性, __proto__ 会指向该对象的原型对象
// console.log(p.__proto__);


function Son(){}

Son.prototype.chi = function(){
    console.log("儿子爱吃东西");
}

function Person(){}

Person.prototype.he = function(){
    console.log("人爱喝东西")
}
// 把a的原型对象设置为b    Object.setPrototypeOf(a, b)
Object.setPrototypeOf(Son.prototype, Person.prototype);

var son = new Son();
son.he(); // 1.对象自身没有该方法, 2. Son.prototype也没有该方法, 3. 原型对象的原型对象上有he



function Window(){}
function WindowProperties(){}
function EventTarget(){}

EventTarget.prototype.addEventListener = function addEventListener(){

}

Object.setPrototypeOf(Window.prototype, WindowProperties.prototype);
Object.setPrototypeOf(WindowProperties.prototype, EventTarget.prototype);

var window = new Window();
window.addEventListener = function(){

}

window.addEventListener !== EventTarget.prototype.addEventListener ? (function(){while(true){
    console.log("死循环")}})():console.log("ok");










