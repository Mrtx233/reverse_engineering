// let obj = {};
// console.log(obj.__proto__);
//
// function Person(){
//     throw new TypeError("Illegal constructor");
//
// }

// let p = new Person();
// console.log(p.__proto__ === Person.prototype);

// let p2 = Object.create(Person.prototype);
// console.log(p2);
// let p3 = {};
// Object.setPrototypeOf(p3, Person.prototype);


// // 属性描述
let obj = {
    name: "樵夫",
    birthday: "1998-01-02",
    get_age(){
        return this.birthday - new Date().getTime()
    }
}
// obj.get_age()

// { value: '樵夫', writable: true, enumerable: true, configurable: true }
// console.log(Object.getOwnPropertyDescriptor(obj, "name"))


let tmp = "";
// // 目标代码
Object.defineProperty(obj, "age", {
    configurable: true,   // js中可以通过该属性, 如果设置为false, 通常是用来反hook的
    enumerable: false, // Object.keys(), 影响你的for循环, for-in
    get(){
        // 进一步的控制....
        // this.birthday => 和当前时间进行计算. 实时的计算年龄
        return tmp
    },
    set(age){

    }
});
//
// console.log(Object.getOwnPropertyDescriptor(obj, "age").get.name)


// Object.defineProperty(Object.getOwnPropertyDescriptor(obj, "age").get, "name", {
//     value: "get age"
// });
//
// console.log(Object.getOwnPropertyDescriptor(obj, "age").get.name === 'get age')

// Object.defineProperty(对象, 属性名, {属性描述})
// Object.getOwnPropertyDescriptor(对象, 属性)


// // console.log(Object.keys(obj));
// for(let v in obj){ // for-in用的就是Object.keys()  for-of用的是迭代器
//     console.log(v);
// }
// 获取到某个对象上所有的属性名
// Object.getOwnPropertyNames()
// // 把该对象上所有属性提取出来
// console.log(Object.getOwnPropertyNames(obj))

// 给某个对象设置原型
// Object.setPrototypeOf(对象, 原型)
