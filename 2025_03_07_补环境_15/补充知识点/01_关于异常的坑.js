
// function eval(code){
//     try{
//         code;
//     } catch (e) {
//         e.stack = "xxxx";
//         e.message = "";
//     }
//
// }
//
// // 以下问题, 樵夫目前束手无策....
// function fn(){ // C
//     try{
//
//     } catch (e) {
//         xxxx(e) // ??
//         xxxx(e)
//         正确的逻辑(e);
//     }
// }
//
// try {
//     Date.prototype.toString.call(fn);// A -> 报错.
// } catch (e) {
//     // B
//     console.log(e.message.replaceAll("Method Date.prototype.toString called on incompatible receiver", ""));
// }
//
