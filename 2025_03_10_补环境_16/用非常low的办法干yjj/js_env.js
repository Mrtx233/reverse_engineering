var qiao_log = console.log;
var content = 'y17bg1Wo6FemcFOApn76SlowJ.Z1BsAtmWmfAnIJdHCvBR9fk2XmNY5GNF1EP1wmx3xmwCvuvcq';
// var content = '$$$qiao_content$$$';
function obj_proxy(obj, name) {
    return obj;
}

delete __filename;
delete __dirname;

// 从这里开始补
window = top = global;

function Window(){}

Object.setPrototypeOf(window, Window.prototype);


document = {
    // addEventListener: function(){},
    getElementById: function(){
        qiao_log("getElementById", arguments);
        // return {};
        return null;
    },
    // visibilityState: "visible",
    cookie: "",
    documentElement: obj_proxy({
        style: {}
    }, "document -> documentElement"),
    createElement: function(tagName){
        qiao_log("createElement", arguments);
        if(tagName === 'div'){
            return obj_proxy(div, "createElement-div");
        }
        if(tagName === 'a'){
            return obj_proxy({}, "createElement-a");
        }
    },
    appendChild: function(){
        qiao_log("appendChild", arguments);
    },
    removeChild: function(){
        qiao_log("removeChild", arguments);
    },
    getElementsByTagName:function(tagName){
        qiao_log("document -> getElementsByTagName", arguments);
        if(tagName === 'script'){
            return obj_proxy([
                obj_proxy({
                    getAttribute:function(){
                        return "m";
                    },
                    parentElement: obj_proxy({
                        removeChild: function(){
                            qiao_log("script ->parentElement->removeChild ->", arguments);
                        }
                    }, "script-> parentElement")
                }, "第一个script标签"),
                obj_proxy({
                    getAttribute:function(){
                        return "m";
                    },
                    parentElement: obj_proxy({
                        removeChild: function(){
                            qiao_log("script ->parentElement->removeChild ->", arguments);
                        }
                    }, "script-> parentElement")
                }, "第二个script标签")
            ], "document -> getElementsByTagName('script')");
        }
        if(tagName === 'meta'){
            return obj_proxy([
                obj_proxy({}, "第一个meta"),
                obj_proxy({
                    getAttribute(){
                        return "m";
                    },
                    parentNode: obj_proxy({
                        removeChild(){
                            qiao_log("meta ->parentElement->removeChild ->", arguments);
                        }
                    }, "第二个meta -> parentNode"),
                    content: content
                }, "第二个meta"),
            ], "metas");
        }
        if(tagName === 'base'){
            return obj_proxy([], "base"); // 直接鲁斯....
        }
    }
};


div = {
    getElementsByTagName:function(){
        return obj_proxy([], "div-getElementsByTagName->i");
    }
};
window.localStorage = {
    removeItem:function(){
        qiao_log("localStorage.removeItem", arguments);
    },
    getItem: function(){
        qiao_log("localStorage.getItem", arguments);
    },
    setItem: function(){
        qiao_log("localStorage.setItem", arguments);
    }
};
window.sessionStorage = {
    removeItem:function(){
        qiao_log("sessionStorage.removeChild", arguments);
    },
    getItem: function(){
        qiao_log("sessionStorage.getItem", arguments);
    },
    setItem: function(){
        qiao_log("localStorage.setItem", arguments);
    }
};

window.ActiveXObject = undefined;
window.CollectGarbage = undefined;

window.DOMParser = function(){
    qiao_log("DOMParser", arguments);
}
navigator = {
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "appVersion": "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "connection": {onchange: null, effectiveType: '4g', rtt: 50, downlink: 10, saveData: false},
    "cookieEnabled": true,
    "credentials": {},
    "deviceMemory": 8,
    "devicePosture": {type: 'continuous', onchange: null},
    "doNotTrack": 1,
    "geolocation": {},
    "hardwareConcurrency": 20,
    "language": "zh-CN",
    "languages": ['zh-CN', 'zh', 'en'],
    "maxTouchPoints": 0,
    "platform": "Win32",
    "product": "Gecko",
    "productSub": "20030107",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
    "vendor": "Google Inc.",
    "vendorSub": "",
    "webdriver": false,
};
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

window.name = "";
window.addEventListener = function(){

};
window.setTimeout = function(){

};
window.setInterval = function(){

};
window.attachEvent = function(){

};
window.XMLHttpRequest = function(){

};
window.Request = function(){

};
window.fetch = function(){

};

window.open = function(){

};

debugger;

// ts代码, 后面换成动态的.
$_ts=window['$_ts'];if(!$_ts)$_ts={};$_ts.nsd=26006;$_ts.cd="qhrqrpAltrLlDsZmDGEbcqEqDGqFqp93DGQOcqEqDGVFqf93qGqFqrLrorGDrAaErr0Fqr9drAEqDGWFrS93qGqFrpLcDpGFqp9_qG3mkq9lopLqDsZmqGqFrSLkDpGFrf9dqaEqDGAFrpa3rGVWcGA2DGARHaVcqq9ucaEqDG3FrS93qGqFrpLcorGcqrLqDGlRDq3mkq7lDrZrDsZcqGqFrSLlDpGcqrLcDGWRhSLqkc1wqsVaqGVnJR0OU6fO5QgIjXFceyeX3bwaSi3PZ8LDUPKl8RJytYokxigkrsWorqDQhqzcKUabWJ961b21YD7g5vNf3Cw.MskNibA03nV5KBJCMCGXFUmzZ1ezQKy.tDdLMCZLMoxLMMmzwbfXKPGO.DSxU9A5MsKNFmYPACezJXNbFbSFpP34SbTCFDg.FvsSMnejwCzLhIJCMCGXFUmzZ1ezQKy.K1CdWlYjiTE0Qt0zJ9JjQoThavzJJ0eYAnivKDTSMb7LM5fBMnf7Qbfz7KTCFDg.FvsSMnejwCzLUhlfWDexpUxVNm3zQTNTYs19F2rWAuenp.ZyKDN6FCGzZ6RBFcyNQK6ShCTSMb7LM5fBMnf7QbfzacZfWVJlsYUBK2m23V2AJea4UDTtJOwj4clyUCSnFDCSMURLMPzjwHmBhCN6FCGzZ6RBFcyNQK6SUPZbJ0EZWBaSpoxXRvRpuTl4FK2PpvOlAPl5KK2SMIlBMUmXFnfB_DeBtDSnFDCSMURLMPzjwHmBUPGGWYw0nVaSJb06U9hVVoxusKx2YiTnpc3gUDN0ZKZBFvw.Fc6uwbeLhb2SMIlBMUmXFnfB_DeBK1g2W0.zQvwAQTguYiw6p0SG1kT60bwLp1qeUCdLMCZLMoxLMMmzwbfXtCN0ZKZBFvw.Fc6uwbeLUn7biQe_RTmtWbTNj0fMATp53DB01l2Qp1V5KBJCMCGXFUmzZ1ezQKy.tDdLMCZLMoxLMMmzwbfXKPGONDrQYmR2Vlv8QDT5J63ZMBYSwKeGRP34SbTCFDg.FvsSMnejwCzLhIJCMCGXFUmzZ1ezQKy.K1CdAlYj1CpfKermp9e4JbYDjUNiHYRHw1ivKDTSMb7LM5fBMnf7Qbfz7KTCFDg.FvsSMnejwCzLUhlfADrkJ2Yi50mVAUxO11dlwYmG8vJs3hZyKDN6FCGzZ6RBFcyNQK6ShCTSMb7LM5fBMnf7QbfzacZfpCfqQuH7s23npulSKZp28Vr3YmAB6clyUCSnFDCSMURLMPzjwHmBhCN6FCGzZ6RBFcyNQK6SUPZb1OybYeyDFoVCVuSH0leXsK2rJsME3Pl5KK2SMIlBMUmXFnfB_DeBtDSnFDCSMURLMPzjwHmBUPGGsCwaeVzTwTpUF9Oz3bzOFVAZFJl_3P3gUDN0ZKZBFvw.Fc6uwbeLhb2SMIlBMUmXFnfB_DeBK1g2ssbBMYYqFTpPJiYL1myYVoTz70lSw1qeUCdLMCZLMoxLMMmzwbfXtCN0ZKZBFvw.Fc6uwbeLUn7b1izERlVnUupp5Vp.IONWFKk5KuJp3nV5KBJCMCGXFUmzZ1ezQKy.tDdLMCZLMoxLMMmzwbfXKPGOuUQCwKS5smMps2YwWmpHQQyrwKy2RP34SbTCFDg.FvsSMnejwCzLhIJCMCGXFUmzZ1ezQKy.K1CdV9SOQVfNWwWz8sTEIYz0u0qzKu36w1ivKDTSMb7LM5fBMnf7Qbfz7KTCFDg.FvsSMnejwCzLUhlfVUxqplay.KZuHorXRVOxsCxfV9x7AhZyKDN6FCGzZ6RBFcyNQK6ShCTSMb7LM5fBMnf7QbfzacZfYTmJHYhZ1K9jivAe1ISEiOwJWVln6clyUCSnFDCSMURLMPzjwHmBhCN6FCGzZ6RBFcyNQK6SUPZbVK2hFdS910Nsw6V6n0RfA6x5JDh63Pl5KK2SMIlBMUmXFnfB_DeBtDSnFDCSMURLMPzjwHmBUPGGUvSCjDy.sCrWFYMTw2wm12JsRWy0QP3gUDN0ZKZBFvw.Fc6uwbeLhb2SMIlBMUmXFnfB_DeBK1g23soKQCVZMkevMXLT3mSkJbwcyKrJp1qeUCdLMCZLMoxLMMmzwbfXtCN0ZKZBFvw.Fc6uwbeLUn7bRWzDFoWC1lSM6DroKCrhYlB3WCqCAnV5KBJCMCGXFUmzZ1ezQKy.tDdLMCZLMoxLMMmzwbfXKPGO56mxYV2uJ6OY8TzWQn2asXAzW2rKAc34SbTCFDg.FvsSMnejwCzLhIJCMCGXFUmzZ1ezQKy.K1CdRozxi2AaKdJoUDejwopS76ph1YASAnivKDTSMb7LM5fBMnf7Qbfz7KTCFDg.FvsSMnejwCzLUhlfF9RrWsxP0mxtsvr.WuvuWKex8kRm3hZyKDN6FCGzZ6RBFcyNQK6ShCTSMb7LM5fBMnf7QbfzacZfMYG5J0d2Wl0Chl2zwdRQpKNx19JL4clyUCSnFDCSMURLMPzjwHmBhCN6FCGzZ6RBFcyNQK6SUPZbFkeZRif7wbmmJOQTnCTVM0mIVTKuAPl5KYSIE4x0Rb3zRvpS7bxuM1TnwCsBADRjwbxChBmj3Dm7wDmA40r73DQL3Ds5QUN0w2w2QdSXQc3XQ6R05mgBUnqLQCsdhDx0QPf2QIA7wvwvwVw9Z6wbwPT.MKhgMUrfhKrfwwmj3Dm7wDmJeor6xPyuwvsgU2gLMoxLMMmzwbfXtCN0ZKZBFvw.Fc6uwbeLUn7bFBpLpKrnpDmKZlYY1bytMuU7iTYfQnV5KBJCMCGXFUmzZ1ezQKy.tDdLMCZLMoxLMMmzwbfXKPGOZYSysCW6MChX19z510VT18SYW0JTwP34SbTCFDg.FvsSMnejwCzLhIJCMCGXFUmzZ1ezQKy.K1CdMsA0w6weFex.FkY4FC7BCvpWW2NIp1ivKDTSMb7LM5fBMnf7Qbfz7KTCFDg.FvsSMnejwCzLUhlfMoY.YYm3_Cw9YVy0QKOgM2JDp0p73hZyKDN6FCGzZ6RBFcyNQK6ShCTSMb7LM5fBMnf7QbfzacZfQTwP19IdF1TP3CZSViphFvJWH9ekdclyUCSnFDCSMURLMPzjwHmBhCN6FCGzZ6RBFcyNQK6SUvgLMoxLMQqxqGNfFCQu49NN3O9aYVHYK0f2KkSfsQSMQlw4WkeHNKNoFowJFO.v82YTJDl63tRJRVRrYDTB4OmWIUVZ3vo7VvmOpsrEJ5T7iDwxQorcnVY4AlyAVk.g39fi3lzriHenMDE7Js0Tdbq4JnSzwuj7J2xTR2ZeVjNzp0l7Js0Tdbq4JnSzwu.t3kJppVmsFIw4pl77Js0Tdbq4JnSzwu.1V0ZuVVzbRj0nKva7MUQ_yVLTs9ZTRKsX1mrSisp2sips3URG3DfCSkGaMbpOImIFpmYQpDGdRjz.svySICSNu9YftOq5WDh5iuqjFoAdKJf0smpNMb0CjbwMtOq5WDh5iuqjFoAdh_Z_JCwfHuQBe6qkrqEDJqDQWqWYFvJaQFQ4WOWTHOl0.OQyHsEoqOi9JCrviGQoJ_L6qaguJuan.kA_Jk36rqKNWuLnqfQUvvsMK7QxexmtsRnYF_04rroXDXweY5AAHxn8qqQDrAWmv1JJHX4ODGPgaqXmsk__xBTNtVLXDXybUa3d5yvBveLl8qWiWkW6WtGCWka0JaAq.qWxJsVuJs8BWO30iaQB1WYvY9ZuRmyJeD30QmRAsmoQsb2tACWCR5y210RGs0wK_oz7QcSLAmiuMaWlqG3aqRauqaVTrsACynePRKl.RKuBhCx0F1z2QBqB3vx.tCRGePefRU3.RbOuhCmNQPzb8_ZB3cffRb3zdbSXtDm6wc65QoqL3UpnhI2PwnfbFCGz5KSGtDRLR6bSRCSahbJNR.mbMbGX3bzT7KR431yfFDcSRKevhbmLw4m2MDLX3KzB_1e2F63.3CUdhCp7M1zOFH7BRogXMCfS7KzuwcyBQDtSFbr.hbyjR4mjMK0XMbNn7KNuR1yXwC_SFKxChbT2wdaBFUpv3cf.4KABMvl.MvhnM1eLFCVLMIx9hC9CRPf7doWBFKzOtDu0MPeNFUlLMHxvhC2zQ1f74sqBFUEutDuz3PeNQbxOhIruRcfBw6AzZorjtDT2MP6n3o7LMKrOhIxB31fzFClzZvw2tDTSR16z3vqLQbp2QMmuRCEXwCJ77UJjRny6FDPSQCezQUWLQIJ9h6pnFPfS4UqBwoxutoozw67LQvpGh8T_h6p4RcfaeDVBwURdtok5MoAChvY2h8ePMPfaRv3z4CR9torPwn6BMPeCM6mbh8e6R1faQC2S7UrfFcy03vbSQDaLQUmOh8y03PfSQDEz4vNatoRbwP6N3v9Lwbr5h82jR1fCMbxv7Uw7wvrPFvKSw6wPhvJZwMmTQDqXQUwn7UYaQnySIDKSwDxnhvrf350BwD2Ot6J7_ne0FCpftoMnRKVChvr0Q.m0RbRBt6SOZce4Fol.ID6X8neZMC7L88TXh6SSFnfyyneytofXwqDwqawMxbJjqR2Qxnr1rar8XKNlrqR3EDUyqalSJGQDWj7kqOVcrOV";if($_ts.lcd)$_ts.lcd();
require("./js_file");

function get_ck(){
    return document.cookie;
}
