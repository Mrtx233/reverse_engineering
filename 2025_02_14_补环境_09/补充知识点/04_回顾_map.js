// let m = {};
//
// let k1 = {};
// m[k1] = 888; // 普通对象当成key来存储的时候都会处理成字符串
// // {'[object Object]': 888}
//
// let k2 = {};
// m[k2] = 999
// // {'[object Object]': 999}
// // {k1:888,k2:999}
//
// console.log(m[k1])
// console.log(m)
//
// {key: value, key:value}
let map = new Map();
let k1 = {}
let k2 = {}

map.set(k1, "樵夫");
map.set(k2, "18");
console.log(map);
console.log(map.get(k1));
console.log(map.get(k2));

/***
map:
    entries: [
        key, value,
        key, value
    ]
    get(k){
        for(key in entries){
            if  k===key:
                return value
        }
    }
*/

// console.log(map.get("name"));
