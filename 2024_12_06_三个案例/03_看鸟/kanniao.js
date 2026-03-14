//
// Date.prototype.getTime = function(){
//     return 1733498813000;
// };
//
// Date.parse = function(){
//     return 1733498813000;
// }
//
// Math.random = function(){
//     return 0.123456;
// };


var JSEncrypt = require("node-encrypt-js"); // 该库依赖于 node-jsencrypt , 安装即可
var crypto = require("crypto");
var CryptoJS = require("crypto-js");

function getUuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 32; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 16), 1)
    }
    s[14] = "4";
    s[19] = hexDigits.substr(s[19] & 3 | 8, 1);
    s[8] = s[13] = s[18] = s[23];
    var uuid = s.join("");
    return uuid
}
function sort_ASCII(obj) {
    var arr = new Array;
    var num = 0;
    for (var i in obj) {
        arr[num] = i;
        num++
    }
    var sortArr = arr.sort();
    var sortObj = {};
    for (var i in sortArr) {
        sortObj[sortArr[i]] = obj[sortArr[i]]
    }
    return sortObj
}

function dataTojson(data) {
    var arr = [];
    var res = {};
    arr = data.split("&");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].indexOf("=") != -1) {
            var str = arr[i].split("=");
            if (str.length == 2) {
                res[str[0]] = str[1]
            } else {
                res[str[0]] = ""
            }
        } else {
            res[arr[i]] = ""
        }
    }
    return res
}

var paramPublicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvxXa98E1uWXnBzXkS2yHUfnBM6n3PCwLdfIox03T91joBvjtoDqiQ5x3tTOfpHs3LtiqMMEafls6b0YWtgB1dse1W5m+FpeusVkCOkQxB4SZDH6tuerIknnmB/Hsq5wgEkIvO5Pff9biig6AyoAkdWpSek/1/B7zYIepYY0lxKQIDAQAB";
var encrypt = new JSEncrypt;
encrypt.setPublicKey(paramPublicKey);
function MD5(s){
    return crypto.createHash("md5").update(s).digest("hex");
}

function fn(d) {
    var timestamp = Date.parse(new Date);
    var requestId = getUuid();
    // console.log(sort_ASCII(dataTojson(d || "{}")));
    var data = JSON.stringify(sort_ASCII(dataTojson(d || "{}")));
    var final_data = encrypt.encryptLong(data);
    var sign = MD5(data + requestId + timestamp);
    return {
        headers:{
            "timestamp": timestamp+"",
            requestId,
            sign
        },
        data: final_data
    }
}
// console.log(fn('page=1&limit=20&taxonid=&startTime=&endTime=&province=%E9%9D%92%E6%B5%B7%E7%9C%81&city=&district=&pointname=&username=&serial_id=&ctime=&taxonname=&state=&mode=0&outside_type=0'))
// console.log(MD5("ml5S4Fo1ZTRpptlo2ai2/2ay5Hr+Vz7e7fLjmONv+SZabqgWvqVwQIx1O7MjfrhXz40eNeTBulV2OSls1Mrd8fajfVImmkJ+cs3a69vIfDXQnixTdEPY8g1ixooakNe3GIbxMT1VJWap63BEw5Dztks8eqEKnn3EluVEoQ5Mh/ga+cwMjS/iOwFuBMZv4+UtuimJ6XWc9pRObEhXdRVwTyYJpx8XIwf4yG5ZUKqTPX18YBg+gBEKpogmKefUVHrIA2/AwKw9b6WctHQucyQON0kmGF/W6grlYNk+j440EfmvoogyHn4wRKGch5NwHT+VkuWMjs2yZnQlNDcb3CivKTlOACs85ssc9y9uBm4+diCMOuCxyZER07SeV/MqWFQ4Y0+wslgyK3U7CyV9/k/Y7r62KTjcCb2/LQlkY2qnpKjyHix0kOmyOh1Lc+CzPO3nlwTSvAav9hmgtKTVPtqZbyRSphcT/IKmu0m8sYYWh5xXdzSGqdWFW6ssrvZ0BH/b"+"874079615c1b85449b5bda0587d3b6a0"+1733500358000))

function decrypt(_0x291626) {
    var _0x3c6fa1 = CryptoJS['enc']['Utf8']['parse']('C8EB5514AF5ADDB94B2207B08C66601C')
      , _0x3ec027 = CryptoJS['enc']['Utf8']['parse']('55DD79C6F04E1A67');
    return CryptoJS['AES']['decrypt'](_0x291626, _0x3c6fa1, {
        'iv': _0x3ec027,
        'mode': CryptoJS['mode']['CBC'],
        'padding': CryptoJS['pad']['Pkcs7']
    })['toString'](CryptoJS['enc']['Utf8']);
}