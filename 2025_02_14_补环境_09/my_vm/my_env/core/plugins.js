var _map_get = Map.prototype.get;
Map.prototype.get = function(key){
    // 判断key对象是否是代理对象, 如果是代理对象. 获取到原始对象
    // js里面不存在这种东西

    // let tmp = key;
    // // 虚拟的定义某个属性
    //
    // while(true){
    //     let obj = tmp.__tar________get__;
    //     if (!obj){
    //         return _map_get.call(this, tmp);
    //     }
    //     tmp = obj;
    // }

    let obj = key.__tar________get__;
    if(obj){
        return _map_get.call(this, obj);
    } else {
        return _map_get.call(this, key);
    }
}

globalThis.my_env = {
    // 关于函数处理的插件
    // 关于代理的插件
    // 处理toString
    plugins: {},
    basic_info: {
        pgs: [
            {
                name: "Chrome PDF Viewer",
                description: "Portable Document Format",
                filename: "internal-pdf-viewer",
                length: 2
            },
            {
                name: "Chromium PDF Viewer",
                description: "Portable Document Format",
                filename: "internal-pdf-viewer",
                length: 2
            },
            {
                name: "Microsoft Edge PDF Viewer",
                description: "Portable Document Format",
                filename: "internal-pdf-viewer",
                length: 2
            },
            {
                name: "PDF Viewer",
                description: "Portable Document Format",
                filename: "internal-pdf-viewer",
                length: 2
            },
            {
                name: "WebKit built-in PDF",
                description: "Portable Document Format",
                filename: "internal-pdf-viewer",
                length: 2
            },
        ],
        mms: [
            {
                "type": "application/pdf",
                "suffixes": "pdf",
                "description": "description",
            },
            {
                "type": "text/pdf",
                "suffixes": "pdf",
                "description": "description",
            }
        ],
    },

    // memery负责保存整个浏览器中所有的需要存储在内存中的数据
    memory: {
        location: {}, // location中的内容, 随着页面的变化而变化的. 具体的内容放在start.js中
        navigator: {
            "vendorSub": "",
            "productSub": "20030107",
            "vendor": "Google Inc.",
            "maxTouchPoints": 0,
            "scheduling": {},
            "userActivation": {},
            "doNotTrack": "1",
            "geolocation": {},
            "connection": {},
            "plugins": null,
            "mimeTypes": null,
            "pdfViewerEnabled": true,
            "webkitTemporaryStorage": {},
            "webkitPersistentStorage": {},
            "windowControlsOverlay": {},
            "hardwareConcurrency": 20,
            "cookieEnabled": true,
            "appCodeName": "Mozilla",
            "appName": "Netscape",
            "appVersion": "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
            "platform": "Win32",
            "product": "Gecko",
            "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
            "language": "zh-CN",
            "languages": ["zh-CN", "zh", "en"],
            "onLine": true,
            "webdriver": false,
            "deprecatedRunAdAuctionEnforcesKAnonymity": false,
            "protectedAudience": {},
            "bluetooth": {},
            "storageBuckets": {},
            "clipboard": {},
            "credentials": {},
            "keyboard": {},
            "managed": {},
            "mediaDevices": {},
            "storage": {},
            "serviceWorker": {},
            "virtualKeyboard": {},
            "wakeLock": {},
            "deviceMemory": 8,
            "userAgentData": {
                "brands": [{"brand": "Google Chrome", "version": "131"}, {
                    "brand": "Chromium",
                    "version": "131"
                }, {"brand": "Not_A Brand", "version": "24"}], "mobile": false, "platform": "Windows"
            },
            "login": {},
            "ink": {},
            "mediaCapabilities": {},
            "hid": {},
            "locks": {},
            "gpu": {},
            "mediaSession": {},
            "permissions": {},
            "presentation": {},
            "usb": {},
            "xr": {},
            "serial": {}
        },

        // storage的数据已经存储在对象身上了. 这里就不用了.
        // storage: new Map(), // storage的数据已经存储在对象身上了. 这里就不用了.

        pgs: new Map(), // {plugin对象: {基础数据}}
        mms: new Map(), // {mimetype对象: {基础数据}}

        // 事件监听...
        listeners: new Map(),
        // 保存 事件对象: 事件对象的数据
        events: new Map(), // {事件对象: 事件的数据}
        // dom元素...
        nodes: new Map(),
        // 存储cookie信息
        cookies: {},
        wins: new Map(),
        xhr: new Map(), // {xhr: 数据}
    },
    out: globalThis.out,
    qiao_log: console.log,
};
