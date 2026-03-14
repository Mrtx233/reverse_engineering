var CryptoJS = require("crypto-js");

function encrypt(s){
    var key = CryptoJS.enc.Utf8.parse("1234567887654321");
    var iv = CryptoJS.enc.Utf8.parse("0000000000000000");
    var cif = CryptoJS.enc.Utf8.parse(s);
    return CryptoJS.AES.encrypt(cif, key, {
        iv: iv,
        mode:CryptoJS.mode.CBC,
        packing: CryptoJS.pad.Pkcs7
    }).toString();
}

module.exports = {
    encrypt
}

// name = "qiao"
// age = 18
//
// obj = {
//     name,
//     age
// }
// // 13
// console.log(obj)
