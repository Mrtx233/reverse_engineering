function C(e, t) {
    // axios.post(url, 参数, xxxx)
    return n.H("https://dict.youdao.com/webtranslate", o.A(o.A({}, e), k(t)), {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
}


// 7777  9999

// var fn = (a, b) => a + b;
//
// var ret = fn(1, 2);
// console.log(ret);


var name = "樵夫";
var age = 18;

// 模板字符串
var s = `我叫${name}, 我今年${age}岁了`;
console.log(s);

var crypto = require("crypto");
function S(e, t) {
    return _(`client=fanyideskweb&mysticTime=${e}&product=webfanyi&key=${t}`);
}

function _(e) {
    return crypto.createHash("md5").update(e.toString()).digest("hex")
}
function k(word) {
    const e = 'fsdsogkndfokasodnaso';
    const a = (new Date).getTime();
    return {
        "sign": S(a, e),
        "client": "fanyideskweb",
        "product": "webfanyi",
        "appVersion": "1.0.0",
        "vendor": "web",
        "pointParam": "client,mysticTime,product",
        "mysticTime": a,
        "keyfrom": "fanyi.web",
        "mid": 1,
        "screen": 1,
        "model": 1,
        "network": "wifi",
        "abtest": 0,
        "yduuid": "abcdefg",
        "i": word,
        "from": "en",
        "to": "zh-CHS",
        "useTerm": false,
        "domain": "0",
        "dictResult": true,
        "keyid": "webfanyi"
    }
}