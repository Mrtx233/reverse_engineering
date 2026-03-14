
// node-encrypt-js
var JSEncrypt = require("node-encrypt-js");
var crypto = require("crypto"); //nodejs自带的库,   我们之前用的是crypto-js

function my_md5(s){
    return crypto.createHash("md5").update(s).digest("hex");
}

function fn(e, r){ // e是明文参数(字典Object), r是公钥
    var t = new JSEncrypt();  // JSEncrypt()
    t.setPublicKey(r);

    //  a = m(m({}, e), {}, {
    //     sign: my_md5(JSON.stringify(e)), // sign -> md5 -> sha1 -> sha256, sha512
    //     timeStamp: new Date().getTime()
    // })

    e.sign = my_md5(JSON.stringify(e));
    e.timeStamp = new Date().getTime()

    var s = t.encryptLong(JSON.stringify(e));
    return JSON.stringify({
        param: s
    });
}

// 测试代码
// console.log(fn({
//     "businessClassfication": "",
//     "dwmc": "",
//     "inviteMethod": "",
//     "lx": "ZBGG",
//     "mc": "",
//     "pageIndex": "3"
// }, "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCVhMWN/BWY7FML1GaYiwHUKLhwqH+4ysAg+lQiwJ2X94rcAXVgFIdWXksB8J+rgMP+hP42yRwdEqZt4hMaDGgCUGIY7g6K/SAdhMHOwxYdt9QhgrHkxzCww/dtSlFfo0GjW93FLhK+CFtfwT0VNlALkYH0SIdUc17xAfbWsBjGYwIDAQAB"))

// x(x({}, x({}, obj)), obj); => 99% 在合并对象

