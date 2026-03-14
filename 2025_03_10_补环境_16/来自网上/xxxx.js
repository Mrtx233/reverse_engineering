function get_enviroment(proxy_array) {
    for (var i = 0; i < proxy_array.length; i++) {
        handler = '{\n' +
            '    get: function(target, property, receiver) {\n' +
            '        console.log("方法:", "get  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return target[property];\n' +
            '    },\n' +
            '    set: function(target, property, value, receiver) {\n' +
            '        console.log("方法:", "set  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return Reflect.set(...arguments);\n' +
            '    }\n' +
            '}'
        eval('try{\n' + proxy_array[i] + ';\n'
            + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}catch (e) {\n' + proxy_array[i] + '={};\n'
            + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}')
    }
}

proxy_array = ['window', 'document', 'location', 'navigator', 'history', 'screen']

let log_flag = true

function vlog() {
    if (log_flag) {
        console.log(...arguments)
    }
}

_null = function () {
    vlog(arguments)
}
vlog("补环境开始")

window = global;
window.top = window;
window.addEventListener = function () {
};
window.attachEvent = undefined
window.setInterval = function () {
}
window.setTimeout = function () {
}
window.HTMLFormElement = function () {
}
window.XMLHttpRequest = function () {
}

window.ActiveXObject = undefined;

delete __dirname;
delete __filename;

location = {
    "ancestorOrigins": {},
    "href": "https://www.nmpa.gov.cn/xxgk/kpzhsh/kpzhshyp/index.html",
    "origin": "https://www.nmpa.gov.cn",
    "protocol": "https:",
    "host": "www.nmpa.gov.cn",
    "hostname": "www.nmpa.gov.cn",
    "port": "",
    "pathname": "/xxgk/kpzhsh/kpzhshyp/index.html",
    "search": "",
    "hash": ""
};
navigator = {
    appCodeName: "Mozilla",
    appName: "Netscape",
    appVersion: "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    languages: ["zh-CN", "zh"],
    webdriver: undefined
}
div = {
    getElementsByTagName: function (arg) {
        console.log("getElementsByTagName", arg)
        if (arg === "i") {
            return {length: 0}
        }
    }
}

var content = 'EtuIG3i2oG7aA6HCYccmKy71as2cHq9sc7WMtNdth9dqx7NYHb0YpttDiGHWs1prIAFBldiOZsujzBPW.lWyOSFqE1uxkopxRNstVSwRXDeUgxkWfp2v6iLI3SaEvVfyXoaltopFhZP2S6aIgt_iILuHhwE8TUq7EOIaJn4sXTL0Hphbs1QmsQ0L1Oe_5BZ1LjD2Ya2E2JbF6vfY.RPSGlpWK8mCtS2CvkHq3hAyVg3R.bgIv41PWzkqWoxY70ivewknz5ld8DkavEvgmnDfIR_V9wARNfihwgz8uiMo7R1z364l5nD2Qqq9ik872fIB3h9U.xjW7v6cHSvsBOFWG41BcCyaIZonQUfsqW0AXrGq._u4qFWntiXuI1MahY8qes4HEyqCIMcOKli7Xq3gjLiiwNjZd4HJabytsCgujiKmP1t1lG7.kzuhIxnLQREMCmw5bLh8TG.7SSgUF8ti5KTaq2s3dFoe'

meta = {
    getAttribute: function (arg) {
        if (arg === "r") {
            return "m"
        }
    },
    parentNode: {
        removeChild: function () {

        }
    },
    content: content
}
document = {
    createElement: function (arg) {
        console.log("对象: document   属性: createElement :", arg)
        if (arg === "div") {
            return div
        }
        if (arg === "a") {
            return {}
        }
        if (arg === "form") {
            return {}
        }
    },
    getElementsByTagName: function (arg) {
        console.log("对象: document   属性: getElementsByTagName", arg)
        if (arg === "script") {
            return {
                0: {},
                1: {}
            }
        }
        if (arg === "meta") {
            return [meta, meta]
        }
        if (arg === "base") {
            return {}
        }
    },
    getElementById: function () {
    },
    addEventListener: function () {
    },
    attachEvent: undefined,
    appendChild: function () {
    },
    removeChild: function () {
    },
    documentElement: {},
    body: function () {
    }
}

vlog("补环境结束")
get_enviroment(proxy_array);

var Buffer = undefined
var process = undefined
var clearImmediate = undefined
var setImmediate = undefined
// global = undefined;

$_ts=window['$_ts'];if(!$_ts)$_ts={};$_ts.nsd=30467;$_ts.cd="qozqrrAlmpLkDsZlDG3RHaWcqq9CcrLqDGl9kqGlDrLkDsZlqGqFqpLDqpGcqrLlDGVRDrLckq9lEaEmxGGcqrLkDGqRDrLDxGVcrp9dqGEqcs3tqGqFqG9Ck1LWcGAwqGqFqpLDDpGFrAldqGEqDGWFqr93DGQRHaAcrqaGvAqCWAVlWsDwEOLsRGEEXaEDVmMedNgEfa51XRYOj2IB6xqYTWXWodigqqA0rGQmvc0EATyexssRJ92LYYYLHHN43bxGFbg0_szvJKA9HY4uwCSNtKfnFIlXMvrNFPz._Dy7tKzuFCbSMoYNFY7.x_Sz12ekHCgSjK2K30pXMOhjRC2zUVQ2HZR7wK2Ntb2aZKg7F6rjFnvuwCSNtKfnFIlXMvrNF2LNBumDFuSsJ61zhkYcMUm5sZx_sOREYlqvNT2XQD2jtCBLMbaNF6J.FMm7wK2Ntb2aZKg7F6rjFTPSEkJXs9pSVtpUhvxwwm3aNDzssVA5QVtdimz.QDN.tIJ6MD9NFoxNZ1yXQD2jtCBLMbaNF6J.FQqXEOrlpVyp4Tz1RDREVuHQi2e7ssQ0MXaGi2y.QCzN7KSTFK9jFUkSMPS.QDN.tIJ6MD9NFoxNZYZ7xurkHuMZWlwuFKwTYQeAiDfX30YZSlWPHTyLQbvShbyaFKL.F5fXMc2.QCzN7KSTFK9jFUkSM20NxurVQW2JWOwjJ2TDTmmSQ9NOR2kzQ0QvHTTNQHmXhDzaFb7NZ6w7F12LQbvShbyaFKL.F5fXMmGNxkri4UJ0VUpIWmkvw9pJR095QexbF0AvHmS._Dy7tKzuFCbSMoYNF1NNQHmXhDzaFb7NZ6w7FYGjxs6H8CpAssJXMFzxKlxsICJBel2tUVE9HY4uwCSNtKfnFIlXMvrNFPz._Dy7tKzuFCbSMoYNFY7.x_pfUTYpRmJJ6vmXIur6HC.TQoRXRCQ2HZR7wK2Ntb2aZKg7F6rjFnvuwCSNtKfnFIlXMvrNF2LNB0mDF0S232dAplYiIkwbAj24ssSpsv3vNT2XQD2jtCBLMbaNF6J.FMm7wK2Ntb2aZKg7F6rjFTPSElJfpkwK1BzqY0rT39L.Sop13UTnVD1dimz.QDN.tIJ6MD9NFoxNZ1yXQD2jtCBLMbaNF6J.FQqXE9RBAUq64leYW0qaW2dlRoNrUTYUteaGi2y.QCzN7KSTFK9jFUkSMPS.QDN.tIJ6MD9NFoxNZYZ7x00dRYH8pCz0WYEd1eriMVSXAk3nnDWPHTyLQbvShbyaFKL.F5fXMc2.QCzN7KSTFK9jFUkSM20Nx0y9wHYtwvRsYb2W4KJL3bymHCupiClvHTTNQHmXhDzaFb7NZ6w7F12LQbvShbyaFKL.F5fXMmGNxlge.CSKAKSY3sk2FVzIV2m5FMJqWvAvHmS._Dy7tKzuFCbSMoYNF1NNQHmXhDzaFb7NZ6w7FYGjxVu.1KwlJYg6YI2mFoZesKN9d2LaVDA9HY4uwCSNtKfnFIlXMvrNFPz._Dy7tKzuFCbSMoYNFY7.xZTCJUp.I0e10VeKUkwYsoUiAoRB3bQ2HZR7wK2Ntb2aZKg7F6rjFnvuwCSNtKfnFIlXMvrNF2LNBTJH3vRxFOUshoLZs6S3QWerh2LSJv3vNT2XQD2jtCBLMbaNF6J.FMm7wK2Ntb2aZKg7F6rjFTPSEmxup0YHHFTXWkT6MCRWnVyf3mYkM01dimz.QDN.tIJ6MD9NFoxNZ1yXQD2jtCBLMbaNF6J.FQqXE2RKskyKdlfjtuTTH96Z1s9C1OrcJzaGi2y.QCzN7KSTFK9jFUkSMPS.QDN.tIJ6MD9NFoxNZYZ7xTRL1DdZRVfhYoRCWZzo39xTIuwbeCWPHTyLQbvShbyaFKL.F5fXMc2.QCzN7KSTFK9jFUkSM20NxTedQjfBFlyvsKN1eUwVplT1VDkiwUlvHTTNQHmXhDzaFb7NZ6w7F12LQbvShbyaFKL.F5fXMmGNxDETTvxbHK75RD.jJDJwpkw9pXYfs9AvHmS._Dy7tKzuFCbSMoYNF1NNQHmXhDzaFb7NZ6w7FYGjxKkhpCznWV2HUeSfpmNv12wHCkxOJ0A9HY4uwCSNtKfnFIlXMvrNFPz._Dy7tKzuFCbSMoYNFY7.xdza12piQOpZTUN3sUALQ0.9hkmpVVl2HZR7wK2Ntb2aZKg7F6rjFnvuwCSNtKfnFIlXMvrNF2LNBCYg1kTYWTdup2eXMUY6wMJT1lfsWlqvNT2XQD2jtCBLMbaNF6J.FMm7wK2Ntb2aZKg7F6rjFTPSED2opOqSRzrs1Ve6FOqeZur71oZ6pb1dimz.QDN.tIJ6MD9NFoxNZ1yXQD2jtCBLMbaNF6J.FQqXEbSIHuphysmiJnzEMvHCUVR.s9zqMiaGi2y.QCzN7KSTFK9jFUkSMPS.QDN.tIJ6MD9NFoxNZYZ7xCZ5ICkLMUYGAOQ0WQz7YCyDU2rp70WPHTywUc8nwKYvtbw6wMxOQDajQ6pG40m2F6mOw1.SFCJGF6YPYierMCmGtKJGdvrywUmKRvIZM6WvtUxTQHfIhmgvtUrGdnTfwUVNRvU0hUYC3opl3HJCRUQjFbyb5DSu3cNf3vopFCJGF6YP1IpSwcQNQvYa5mewtKzuFCbSMoYNF1NNQHmXhDzaFb7NZ6w7FYGjxK40FVRfwVYPVBrlY9zN1CaS4kNK3oA9HY4uwCSNtKfnFIlXMvrNFPz._Dy7tKzuFCbSMoYNFY7.xdmw89y9JbSb49zEI0SlJ967YkrcQvQ2HZR7wK2Ntb2aZKg7F6rjFnvuwCSNtKfnFIlXMvrNF2LNBCa6JUrCIbd1Fb70IDNLteNTsuJwU93vNT2XQD2jtCBLMbaNF6J.FMm7wK2Ntb2aZKg7F6rjFTPSEDe0Mmp1UizbRTpxwUx75DeAp0rmMC1dimz.QDN.tIJ6MD9NFoxNZ1yXQD2jtCBLMbaNF6J.FQqXEvxA302kdCGX3CpXW2s91b2n1ueWpdaGi2y.QCzN7KSTFK9jFUkSMPS.QDN.tIJ6MD9NFoxNZYeetKzuFCvqcqlhRbN9J5yhFbW5WYRoTYNhRmZe39vWKvJDIklZ1_Y.pD2asD95y6zKwkJGJD1bsDRop2YXF5gas6SnHKmT4mJn39ES1uHzMszbsvmup72l8lmxVYW55DJhsCwtAOudQCeOtuA5WIyfik3.MoA5.kwpwDm8H2FjMlpqtuA5WIyfik3.MoA5nblaVlxqVD6689wttuA5WIyfik3.MoA502xWW2RtRKtzWT2etCS0HXYhJ9eEJDRG492sQkgTR9O9Vbx6RCm.Q7AyWCeO3vesC9YKUVJNHDt.F9TdwvyBMQyl3P76HuJbdOLutCeTHmu3wVeYMbeXWjNbKc76HuJbdOLutCeTHcXBiupbROg0tdwSqqVmruQmvkQqmDTnQ6KviOlnWOZnWtgCiO0TrGl6NkRORO0DrkijJGqHJk3dJjaTisVTHGQrjsEyWaVKmxN0C2vDkBK1s9Cw2bjjiGQYwi3kSsBYMt13vaEmqqWrqN0PMBVqli46fwfaKDBuRvc7gdEIVwSb4feMK.LU.1bJEaQqkuA0Wu8.iuVCJsZortaccOAnWO3u.u3yJkaDraKwqGlSrAQ6rRaTqOVnIcz9dDl7RDf0tCszF1S9wb7.Riz.hDw9M1zvdo37RCSLtCIaQPSvIuA.R.mf3KQNRKfL7Kmaw122woFS3UJutKxbQMmbMD9N3bfb7KRBRv0j3C.NhbpL3PNPFHlXRKNStbxe5cybFKAj3Kv5hbRNQnNfFBWXRbN.QPzOZv373bm9tChTM1SPMDq.3XQXFD2TtbeT41yLQK3jMbMnhb2.3nNXFdAXFKzCtbyTdcyNwbLjMKsBhbN9QCQ.M5TvRn2BwbqNe6l7M6RNF1vSFCENFK2GtIqC312LR6QNZDz9tKfBFPvaFU3NFD2OtIrzwP2LwOANZoE0tKfCRPvaQbYPtKz63.mBQoVNF6p77KTPMn2NRoCSMKwPtK2.R4mzMDqNFUJO7KTCRc2CRvFSQbJ9w1N63I7XQDxLtvw7dPyaFKajwCv0QUANwKfGt8TnM12TwvAN4Ux0tUYCQ6CSQvJftUR5t8T43n20MClN4oRgtUp2FotBhvx9tUpbFhma3UQNwDxP7Ur2wP20FPvBM6RvtUpu34mawDfTtvpvZ1yu360jwDjSQURPtUYaRhmSwCWNwUyC7URfwn2nRv5SwbwdtUxX34mCFKJOtvJj46r2F6ljQ6o4hvpeQ1NSwB9XwvRCtvmC_PyCIKljQDs.hvwGR63.QBrOhoxLQcznZbpbtUxN3KiBhvwTwPNa3HeBhoTvFnzeZUl7IK2TInv2MCaNIURjt8YSMc2eIczd7UfNwAVDraocxbmtrAx3EIRgqqmFEbxNvARIEKmEra8LWqqoWkVortacqsA";if($_ts.lcd)$_ts.lcd();

require('./tscode')

// 'ts_code'
function get_ck() {
    console.log(document.cookie);
    return document.cookie
}

function jsonMD5ToStr(_0x20954c) {
    var _0x4699d8 = {
        'rlhqt': '%21',
        'AphAs': '%28',
        'MDmYq': function(_0x291a56, _0x5dbbe1) {
            return _0x291a56(_0x5dbbe1);
        },
        'YvYLd': function(_0x40b163, _0x2aa002) {
            return _0x40b163 + _0x2aa002;
        },
        'WCdKH': '%7E'
    };
    _0x20954c = _0x20954c['concat'](_0x4699d8['YvYLd']('&', 'nmpasecret2020'));
    _0x20954c = _0x4699d8['MDmYq'](encodeURIComponent, _0x20954c);
    _0x20954c = _0x20954c['replace'](new RegExp('!','gm'), _0x4699d8['rlhqt']);
    _0x20954c = _0x20954c['replace'](new RegExp('\x5c(','gm'), _0x4699d8['AphAs']);
    _0x20954c = _0x20954c['replace'](new RegExp('\x5c)','gm'), '%29');
    _0x20954c = _0x20954c['replace'](new RegExp('~','gm'), _0x4699d8['WCdKH']);
    return _0x20954c;
}


