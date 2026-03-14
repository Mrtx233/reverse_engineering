var CryptoJS = require("crypto-js");


// 该库有两种逻辑
// 1. 简单加密(全是坑)
// var ret = CryptoJS.AES.encrypt("樵夫我爱你", "gaoxing");

// console.log(ret.toString()); // 直接看base64密文
//
// console.log(ret.toString());  // U2FsdGVkX19tt2p5c7zGkBOmBS/IXD1n3i/Y/K+KFb0=
// // CryptoJS.AES.encrypt简单加密中, key和iv都是随机的


/**
 * {
 *    words: [ -1453107407, -204822748, -698894314, 635420691 ],
 *    sigBytes: 16
 * }
 * 你看到这个东西. 就几乎可以确定使用的是CryptoJS模块了
 */

// 上面这个东西. 你可以理解成是CryptoJS自己封装的字节...
// console.log(CryptoJS.enc.Base64.stringify(ret.ciphertext));

// 这个库的处理逻辑:
// 1. CryptoJS.enc.Hex.stringify(字节) 可以把字节处理成字符串
// 2. CryptoJS.enc.Hex.parse(字符串) 可以把字符串处理成字节

// ret = CryptoJS.AES.decrypt(ret.toString(), "gaoxing")
// console.log(ret.toString(CryptoJS.enc.Utf8));

// 2. 高级加密(见到的最多的, 要记住这个逻辑, 格式)

var key = '8888888888888888';
var iv = '1234567887654321';
var ming = "樵夫我不爱你了";

// 加密的过程
// 全部处理成字节的形式
var key_bs = CryptoJS.enc.Utf8.parse(key);
var iv_bs = CryptoJS.enc.Utf8.parse(iv);
var ming_bs = CryptoJS.enc.Utf8.parse(ming);

var mi_bs = CryptoJS.AES.encrypt(ming_bs, key_bs, {
    iv:iv_bs,
    mode:CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
});
console.log(CryptoJS.enc.Base64.stringify(mi_bs.ciphertext));
console.log(mi_bs.toString());
//
//
// var mi_s = "wGZgsMhXpyp1Th8aS7F31kNICAIvcCoVqn9WO11B2pk=";
// var key = '8888888888888888';
// var iv = '1234567887654321';
//
// var key_bs = CryptoJS.enc.Utf8.parse(key);
// var iv_bs = CryptoJS.enc.Utf8.parse(iv);
// var result = CryptoJS.AES.decrypt(mi_s, key_bs, {
//     iv:iv_bs,
//     mode:CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7
// });
// console.log(result.toString(CryptoJS.enc.Utf8));
// console.log(CryptoJS.enc.Utf8.stringify(result));
