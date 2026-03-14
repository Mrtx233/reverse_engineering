
// // ajax完整的流程
// var xhr = new XMLHttpRequest();
//
// xhr.open(method, url);
// // xhr.open("get", url?xxx=xxxx&xxx=xxx); // get请求的请求体是空的
//
// xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4){
//         if(xhr.status == 200){
//             xhr.responseText; // 响应的内容
//         }
//     }
// }

// 发请求
// xhr.send(请求体..);
// post请求
// xhr.send("post的参数")


// function asraea(ming_s, gu_a, gu_b, gu_c){
//
//     return 密文
// }
// var g1 = '010001';
// var g2 = '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7';
// var g3 = '0CoJUm6Qyw8W8jud'
//
// 密文 = asraea("铭文字符串", g1, g2, g3 );

// console.log("我爱樵夫");
// node xxxx.js
// python xxxx.py