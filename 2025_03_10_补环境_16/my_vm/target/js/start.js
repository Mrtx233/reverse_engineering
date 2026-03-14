
// 初始化HTML页面
(function(){
    // 获取所有标签, 进行加载
    for(let item of my_env.out.$("*")){
        let fu_obj = null;
        let id = null;
        let name = item.name;
        switch(name){
            case "body":
                fu_obj = Object.create(HTMLBodyElement.prototype);
                my_env.memory.nodes.set(fu_obj, item);
                break;
            case "head":
                fu_obj = Object.create(HTMLHeadElement.prototype);
                my_env.memory.nodes.set(fu_obj, item);
                break;
            case "div":
                fu_obj = Object.create(HTMLDivElement.prototype);
                my_env.memory.nodes.set(fu_obj, item);
                break;
            case "span":
                fu_obj = Object.create(HTMLSpanElement.prototype);
                my_env.memory.nodes.set(fu_obj, item);
                break;
            case "html":
                fu_obj = Object.create(HTMLHtmlElement.prototype);
                my_env.memory.nodes.set(fu_obj, item);
                break;
            case "meta":
                fu_obj = Object.create(HTMLMetaElement.prototype);
                my_env.memory.nodes.set(fu_obj, item);
                my_env.memory.ids[id] = fu_obj;
                break;
            case "script":
                fu_obj = Object.create(HTMLScriptElement.prototype);
                my_env.memory.nodes.set(fu_obj, item);
                break;
            case "a":
                fu_obj = Object.create(HTMLAnchorElement.prototype);
                my_env.memory.nodes.set(fu_obj, item);
                break;
            default:
                console.log("缺少",name, "请补充==>这里是start, 整个页面加载的时候!")
        }
        (fu_obj !== null) && (id = fu_obj.getAttribute("id"));
        (id !== null) && (my_env.memory.ids[id] = fu_obj);
    }
}());

// 初始化location的内容
my_env.memory.location = {
    "ancestorOrigins": {},
    "href": "https://qikan.cqvip.com/Qikan/Search/Advance?from=index",
    "origin": "https://qikan.cqvip.com",
    "protocol": "https:",
    "host": "qikan.cqvip.com",
    "hostname": "qikan.cqvip.com",
    "port": "",
    "pathname": "/Qikan/Search/Advance",
    "search": "?from=index",
    "hash": ""
}

my_env.memory.navigator['userAgent'] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36";
my_env.memory.navigator['appVersion'] = '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36';
my_env.memory.navigator['userAgentData'] = {
    "brands": [{
        "brand": "Google Chrome",
        "version": "133"
    }, {"brand": "Chromium", "version": "133"}, {"brand": "Not(A:Brand", "version": "99"}],
    "mobile": false,
    "platform": "Windows"
};




// // cookie的初始化
// let brower_cookies_init = 'BD_UPN=12314753; PSTM=1733151411; BIDUPSID=D30AC2F8891EE39AC329B9E66FA37B7F; BAIDUID=4AB5C9B9A8AA685ADD9F99E1064E324A:SL=0:NR=10:FG=1; BAIDUID_BFESS=4AB5C9B9A8AA685ADD9F99E1064E324A:SL=0:NR=10:FG=1; ZFY=xPo2qYHegCSLwSjssoFuwltslekHT:AIRRGu:ALyRGpag:C; BA_HECTOR=000ka0a00g2l2k0g20000k851ao57q1jo9dmp1u; H_WISE_SIDS=61027_60853_61361_61609_61633_61555_61735_61782_61816; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; __bid_n=193ceded9828592261a947; Hm_lvt_aec699bb6442ba076c8981c6dc490771=1734342518,1734423097,1736762557; COOKIE_SESSION=516999_0_8_8_4_20_1_1_6_5_15_2_517111_0_21_0_1736762563_0_1736762542%7C9%231920_22_1734424644%7C9; B64_BOT=1; channel=baidusearch; RT="z=1&dm=baidu.com&si=29ff991c-3532-45f3-9125-fca143e7b334&ss=m5uuw3s6&sl=j&tt=zdh&bcn=https%3A%2F%2Ffclog.baidu.com%2Flog%2Fweirwood%3Ftype%3Dperf&ld=1qcvt&ul=4iqop&hd=4iqpb"; delPer=0; BD_CK_SAM=1; PSINO=1; H_PS_PSSID=61027_60853_61361_61609_61633_61555_61735_61782_61816_61801; sug=3; sugstore=1; ORIGIN=0; bdime=0; H_PS_645EC=13a2%2FBlRRY0OHyqVRKbteEGaXDf4gwMwq13cAb1bS9kUjfVUUJOC9WxDwsw; baikeVisitId=13f58e62-3080-43ca-938a-74a731e879d1; qiao=6666';
// // 放入my_env.memory.cookies中
// let brower_cookies_init_list = brower_cookies_init.split("; ");
// for(let i = 0 ; i < brower_cookies_init_list.length; i++){
//     // 循环出来每一个cookie信息. 直接塞进去就可以了
//     document.cookie = brower_cookies_init_list[i];
// }
