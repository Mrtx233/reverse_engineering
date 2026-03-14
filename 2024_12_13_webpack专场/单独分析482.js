/***
 *
 *
 o = e[482] = {
       exports: 函数_o
 }

function fn_482(t => 大对象,e => 小对象,r => 函数r){
    // var i = r(191)
    //   , n = r(106);
    function o() {
        var t = i.chenv()
          , e = n.encrypt(t);
        console.log("我发请求了.", e)
    }
    // window.send_req = o, // 对外
    t.exports = o //  大对象t的exports => o
}

fn_482.call(o.exports, o, o.exports, r);


 **/