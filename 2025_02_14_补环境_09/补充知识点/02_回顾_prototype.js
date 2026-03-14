// 原型是js设计的底层逻辑
// js中所有的对象都会有一个原型对象

// let obj = {};
// // 获取对象的原型对象
// console.log(obj.__proto__);

// 在js中想要查找某一个方法的执行的时候.
// 首先, 去找该对象本身. 如果对象本身有该属性或者方法, 直接拿过来用
// 如果没有, 会自动的找到该对象的原型对象. 找到了, 就直接拿过来用
// 如果还是找不到, 会继续查找该原型对象的原型对象
// 直到找到object, 依然没有找到. object是一个特殊的对象
// 该对象的原型是null. 至此, 还是没有找到的话, 程序报错

// obj
// obj.__proto__
// obj.__proto__.__proto__
// obj.__proto__.__proto__.__proto__

// js -> mro  method resolution order

// function Person(){
//
// }
// // js中每一个函数都可以作为构建一个新对象的构造器 -> new
// // Person.prototype
//
// // js中每一个函数都可以作为普通函数进行访问和调用
// Person()
//
// // 此时, Person就会作为一个普通函数的对象来看待
// // Function的对象
// console.log(Person.__proto__.constructor.name); // Function

// 原型链是整个js的核心逻辑. 没有它, js体系是不完整的.
