
// // 真正要补的目标网站的代码
// window.xxx = function(){
//
// }

//
// let ddd = document.getElementById("ddd");
// ddd.setAttribute("qiao", "hello");
// console.log(ddd.getAttribute("qiao"));

// // 目标代码中
// try {
//     var span = document.createElement("span");
//     span.setAttribute('hello', "hi");
//     document.body.append(span); // 把span加到body中去
//     span.getAttribute('hello');
//
//     console.log("不报错的");
//     // 没报错
//     // 当前是浏览器环境
//     function encrypt(){
//
//     }
//
// } catch (e) {
//     // 当前环境不是浏览器.
//     // while(true){}
// }
//
// console.log("最后验证", encrypt);


// var divs = document.getElementsByTagName("div");
// console.log(divs);


// var evt1 = new Event("click") // false
// var evt2 = new Event("click", {isSys:true}) // false
// console.log(evt1);
// console.log(evt2);
//
// var div1 = document.getElementById("ddd");
// div1.addEventListener("click", function(){
//     console.log("我爱你你你你你1");
// });
// div1.addEventListener("click", function(){
//     console.log("我爱你你你你你2");
// })
// let mmmm = function(){
//     console.log("我爱你你你你你3");
// }
// div1.addEventListener("click", mmmm);
//
// div1.addEventListener("click", function(){
//     console.log("我爱你你你你你4");
// });
// //
// // div1.addEventListener("blur", function(){
// //     console.log("呵呵呵1");
// // });
// // div1.addEventListener("blur", function(){
// //     console.log("呵呵呵2");
// // });
// //
// //
// //
// //
// // window.addEventListener("load", function(){
// //     console.log("我是伟大的window")
// // });
// // window.addEventListener("load", function(){
// //     console.log("我是伟大的window")
// // });
//
// div1.dispatchEvent(new PointerEvent("click"));
// console.log('==========');
// div1.removeEventListener("click", mmmm);
// console.log('==========');
// div1.dispatchEvent(new PointerEvent("click"));



// var div1 = document.getElementById("ddd");
// div1.addEventListener("click", function(){
//     console.log("我爱你你你你你1");
// });
// div1.addEventListener("click", function(){
//     console.log("我爱你你你你你2");
// });
//
// div1.onclick = function(){
//     console.log("我的天, 我是onclick1");
// }
//
// div1.addEventListener("click", function(){
//     console.log("我爱你你你你你3");
// });
// div1.onclick = function(){
//     console.log("我的天, 我是onclick2");
// }
// div1.addEventListener("click", function(){
//     console.log("我爱你你你你你4");
// });
//
//
//
//
//
// var div2 = document.getElementById("ddd");
// div2.addEventListener("click", function(){
//     console.log("我是div2")
// });
//
// div1.click();
//
// window.onload = function(){
//
// }


// let ifm = document.createElement('iframe');
// debugger;

// xhr请求
var xhr = new XMLHttpRequest(); // readyState = 0

xhr.open("get", "http://127.0.0.1:8000/get"); // readyState = 1
// 返回第一个数据包. 状态变成3.
// 返回的所有内容结束. 状态变成4
xhr.onreadystatechange = function(arg){ // 接收到的参数是一个事件
    console.log("onreadystatechange -> ", arg);
    if(xhr.readyState === 4){
        // if(xhr.status === 200){
            console.log(xhr.responseText);
        // }
    }
}

// 剁手
// xhr.setRequestHeader("content-type", "application/json")

xhr.send("xxxxxxxxxx"); // 这里才是真正的发送请求  // readyState = 2
