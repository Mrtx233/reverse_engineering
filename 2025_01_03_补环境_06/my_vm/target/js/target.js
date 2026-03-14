
// // 真正要补的目标网站的代码
// window.xxx = function(){
//
// }

//
// let ddd = document.getElementById("ddd");
// ddd.setAttribute("qiao", "hello");
// console.log(ddd.getAttribute("qiao"));

// 目标代码中
try {
    var span = document.createElement("span");
    span.setAttribute('hello', "hi");
    document.body.append(span); // 把span加到body中去
    span.getAttribute('hello');

    console.log("不报错的");
    // 没报错
    // 当前是浏览器环境
    function encrypt(){

    }

} catch (e) {
    // 当前环境不是浏览器.
    // while(true){}
}

console.log("最后验证", encrypt);
