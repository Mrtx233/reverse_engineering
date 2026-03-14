// // 这个是遍历. 和下面要聊的Map没有一毛钱关系
// let result = [11,22,33].map(function(e){
//     console.log(e);
//     return e + 1;
// });
//
// console.log(result);

// let map = new Map(); // 可以进行键值对的数据存储
// map.set(1, "樵夫");
// map.set(2, "樵夫");
// map.set(33, "樵夫");
// map.set(44, "樵夫");
// map.set(55, "樵夫");
// map.set({name: "qiao"}, "樵夫爱我1");
// map.set({name: "qiao"}, "樵夫爱我2");
// map.set({name: "qiao"}, "樵夫爱我3");
// map.set({name: "qiao"}, "樵夫爱我4");
// map.set({name: "qiao"}, "樵夫爱我5");
// map.set({name: "qiao"}, "樵夫爱我6");
//
// console.log(map);


// let k = {age: "18"};
// map.set(k, "我爱樵夫");
// console.log(map);
//
// console.log(map.get(k)); // ???
//
// map.set({age: "18"}, "我爱樵夫");
// console.log(map.get({age: "18"}));
// obj = {};
// obj[{"name": "嘿嘿"}] = "樵夫";
// obj[2] = "樵夫";
// obj[3] = "樵夫";
// obj[4] = "樵夫";
// obj[5] = "樵夫";
// obj[6] = "樵夫";
// obj[{"age": "88"}] = "高兴";
//
// console.log(obj);
//
// console.log({"name": "嘿嘿"}.toString())
// // 这种方案. 无法把对象, 当成key来存储
// // 7777  9999


// let obj1 = {"name": 111};
// let obj2 = {"name": 111};
// console.log(obj1 === obj2); // ???

