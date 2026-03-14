
var obj = {
    "qiao": "樵夫"
}

var func1 = function (){
    return String.fromCharCode(115)+'trin'+'gify';
}

console.log(func1()); // 非常笨的办法. 可以反推出来. 本来的代码是什么样的
var s = JSON[func1()](obj);
console.log(s);

// console.log(obj.qiao);
// console.log(obj['qiao']);

// 混淆..把代码进行处理. 让我们难以阅读

// var obj = {
//     // 花指令
//     // +
//     "hahdkjfhaskfhadjskfhkadsj": function add(a, b){
//         return a + b;
//     },
//     // func()
//     "fkjdahsjkfhadsjkfhasdjkfh": function fdjasklfjkdalsj(a, t){
//         return a(t);
//     }
// }
//
//
// function func(sth){
//
// }
//
// func(123); // 高兴
// obj['fkjdahsjkfhadsjkfhasdjkfh'](func, 123); // 骂人
// // 13    9
//
//
// var a = 10;
// var b = 20;
//
// var c = obj['hahdkjfhaskfhadjskfhkadsj'](a, b); // a + b
// console.log(c)

// 7 9
