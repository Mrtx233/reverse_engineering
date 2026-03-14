globalThis.my_env = {
    // 关于函数处理的插件
    // 关于代理的插件
    // 处理toString
    plugins: {},

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
            "plugins": {
                "0": {"0": {}, "1": {}},
                "1": {"0": {}, "1": {}},
                "2": {"0": {}, "1": {}},
                "3": {"0": {}, "1": {}},
                "4": {"0": {}, "1": {}}
            },
            "mimeTypes": {"0": {}, "1": {}},
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

        // 事件监听...
        // dom元素
    }
}