// JSEncrypt 在浏览器上可以正常使用的库
// node-jsencrypt 可以在node环境正常使用
// 这两个库用起来是一模一样的
var JSEncrypt = require("node-jsencrypt");

var enc = new JSEncrypt();
enc.setPublicKey("MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAp9klAzVIHt2MLVdjdtSb2MAeioBPbJtUg6tWHybZtFwb/KK1J+AapWyiBAV2FWs7ruiK0HuXmXH5HijtLI4LqUOUNBMtVH/BoCJkj22+iQJg5+o3uqvRoEXceIUgqdXpcz+1dvJCQvDOMP8U1bhd9u4pzOroNZIic9ifzX1D6pGVPzhNPAHc+105AUkKOysGibQYzz148vO+Gxzx5XFtYUtNjDrvfojtEs4hb9aSTjCGkaiupJu4HhyXP9wQ0JUGvQQlvHYTHA+WOPwijOQSS0dPdxmHwSsMguvRRpXQya4OPXnvc+6ydgMZ1TC/DCGGWlaNQm7t0JfiwY6iuA1ipwIDAQAB");
var mi = enc.encrypt("我爱你");
console.log(mi);


// 没有人会在浏览器的js里解密 -> AES
// 777 999
// 发送包: rsa
// 回来的包: AES, DES, 自主研发
