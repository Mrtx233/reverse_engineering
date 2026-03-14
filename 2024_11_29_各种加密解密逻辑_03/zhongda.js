
var JSEncrypt = require("node-jsencrypt");

var encryptFn = function(e) {
    var o = new JSEncrypt;
    return o.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDA5Zq6ZdH/RMSvC8WKhp5gj6Ue4Lqjo0Q2PnyGbSkTlYku0HtVzbh3S9F9oHbxeO55E8tEEQ5wj/+52VMLavcuwkDypG66N6c1z0Fo2HgxV3e0tqt1wyNtmbwg7ruIYmFM+dErIpTiLRDvOy+0vgPcBVDfSUHwUSgUtIkyC47UNQIDAQAB"),
    o.encrypt(e)
}


// zdAjax(发请求, 回来干什么)
// function zdAjax(e, o){
//     $.ajax({
//         url:e.url,
//         data:e.data,
//         success: function(e){
//             o(e)
//         }
//     });
//
// }
// //  getTime -> 成功后, 执行(ress) => {}
// let paramss = {
//   url: '/common/getTime',
// }
// zdAjax(paramss, (ress) => {
//   var param = {
//     url: '/login/passwordLogin',
//     data: {
//       userName: username,
//       password: encryptFn(pwd + '' + ress.data),
//       imageCaptchaCode: imgCode,
//     },
//   }
//   //去请求接口
//   zdAjax(param, (res) => {
//     if (res.code == 0) {
//       if ($('#auto-login').is(':checked')) {
//         //自动登录
//         keepOurCookie12('autoLogin', true, 30)
//         keepOurCookie12('userInfo', JSON.stringify(res.data), expiresDay)
//         keepOurCookie12('token', res.data.token, expiresDay)
//         syncLogin(res.data, expiresDay)
//       } else {
//         keepOurCookie12('autoLogin', null)
//         keepOurCookie12('userInfo', JSON.stringify(res.data))
//         keepOurCookie12('token', res.data.token)
//         syncLogin(res.data)
//       }
//
//       login.jump(res.data.isBindingMobile)
//     } else if (res.code == '9') {
//       //密码错误达到了两次
//       login.getImgCode($('#nimg-code .img-code-click'))
//       $('#nimg-code').addClass('show')
//       layer.msg(res.msg)
//     } else {
//       layer.msg(res.msg)
//     }
//   })
// })


