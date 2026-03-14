// 构造方法的定义
// 对象的创建
// symbol处理
var Navigator = function Navigator() {
    my_env.plugins.throw_error(TypeError, "Illegal constructor"); // 777
}
// 处理symbol
my_env.plugins.re_def_sym(Navigator);

// toString 搞定了
my_env.plugins.set_native(Navigator);

var navigator = Object.create(Navigator.prototype);


my_env.plugins.def_obj_prop(Navigator.prototype, "vendorSub", true, true, undefined, undefined,
    function vendorSub() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.vendorSub;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "productSub", true, true, undefined, undefined,
    function productSub() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.productSub;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "vendor", true, true, undefined, undefined,
    function vendor() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.vendor;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "maxTouchPoints", true, true, undefined, undefined,
    function maxTouchPoints() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.maxTouchPoints;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "scheduling", true, true, undefined, undefined,
    function scheduling() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.scheduling;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "userActivation", true, true, undefined, undefined,
    function userActivation() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.userActivation;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "doNotTrack", true, true, undefined, undefined,
    function doNotTrack() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.doNotTrack;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "geolocation", true, true, undefined, undefined,
    function geolocation() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.geolocation;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "connection", true, true, undefined, undefined,
    function connection() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.connection;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "plugins", true, true, undefined, undefined,
    function plugins() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.plugins;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "mimeTypes", true, true, undefined, undefined,
    function mimeTypes() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.mimeTypes;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "pdfViewerEnabled", true, true, undefined, undefined,
    function pdfViewerEnabled() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.pdfViewerEnabled;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "webkitTemporaryStorage", true, true, undefined, undefined,
    function webkitTemporaryStorage() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.webkitTemporaryStorage;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "webkitPersistentStorage", true, true, undefined, undefined,
    function webkitPersistentStorage() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.webkitPersistentStorage;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "windowControlsOverlay", true, true, undefined, undefined,
    function windowControlsOverlay() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.windowControlsOverlay;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "hardwareConcurrency", true, true, undefined, undefined,
    function hardwareConcurrency() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.hardwareConcurrency;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "cookieEnabled", true, true, undefined, undefined,
    function cookieEnabled() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.cookieEnabled;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "appCodeName", true, true, undefined, undefined,
    function appCodeName() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.appCodeName;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "appName", true, true, undefined, undefined,
    function appName() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.appName;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "appVersion", true, true, undefined, undefined,
    function appVersion() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.appVersion;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "platform", true, true, undefined, undefined,
    function platform() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.platform;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "product", true, true, undefined, undefined,
    function product() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.product;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "userAgent", true, true, undefined, undefined,
    function userAgent() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.userAgent;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "language", true, true, undefined, undefined,
    function language() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.language;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "languages", true, true, undefined, undefined,
    function languages() {
        if (this instanceof Navigator) {
            return my_env.memory.navigator.languages;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "onLine", true, true, undefined, undefined,
    function onLine() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.onLine;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "webdriver", true, true, undefined, undefined,
    function webdriver() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.webdriver;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "getGamepads", true, true, true,
    function getGamepads() {
        if (this instanceof Navigator) {
            debugger;
            return [null, null, null, null]; // [null, null, null, null]  => ,,,
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "javaEnabled", true, true, true,
    function javaEnabled() {
        if (this instanceof Navigator) {
            debugger;
            return false;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "sendBeacon", true, true, true,
    function sendBeacon(param0) {
        if (this instanceof Navigator) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "vibrate", true, true, true,
    function vibrate(param0) {
        if (this instanceof Navigator) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "deprecatedRunAdAuctionEnforcesKAnonymity", true, true, undefined, undefined,
    function deprecatedRunAdAuctionEnforcesKAnonymity() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.deprecatedRunAdAuctionEnforcesKAnonymity;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "protectedAudience", true, true, undefined, undefined,
    function protectedAudience() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.protectedAudience;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "bluetooth", true, true, undefined, undefined,
    function bluetooth() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.bluetooth;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "storageBuckets", true, true, undefined, undefined,
    function storageBuckets() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.storageBuckets;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "clipboard", true, true, undefined, undefined,
    function clipboard() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.clipboard;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "credentials", true, true, undefined, undefined,
    function credentials() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.credentials;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "keyboard", true, true, undefined, undefined,
    function keyboard() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.keyboard;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "managed", true, true, undefined, undefined,
    function managed() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.managed;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "mediaDevices", true, true, undefined, undefined,
    function mediaDevices() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.mediaDevices;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "storage", true, true, undefined, undefined,
    function storage() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.storage;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "serviceWorker", true, true, undefined, undefined,
    function serviceWorker() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.serviceWorker;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "virtualKeyboard", true, true, undefined, undefined,
    function virtualKeyboard() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.virtualKeyboard;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "wakeLock", true, true, undefined, undefined,
    function wakeLock() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.wakeLock;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "deviceMemory", true, true, undefined, undefined,
    function deviceMemory() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.deviceMemory;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "userAgentData", true, true, undefined, undefined,
    function userAgentData() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.userAgentData;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "login", true, true, undefined, undefined,
    function login() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.login;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "ink", true, true, undefined, undefined,
    function ink() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.ink;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "mediaCapabilities", true, true, undefined, undefined,
    function mediaCapabilities() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.mediaCapabilities;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "hid", true, true, undefined, undefined,
    function hid() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.hid;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "locks", true, true, undefined, undefined,
    function locks() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.locks;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "gpu", true, true, undefined, undefined,
    function gpu() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.gpu;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "mediaSession", true, true, undefined, undefined,
    function mediaSession() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.mediaSession;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "permissions", true, true, undefined, undefined,
    function permissions() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.permissions;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "presentation", true, true, undefined, undefined,
    function presentation() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.presentation;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "usb", true, true, undefined, undefined,
    function usb() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.usb;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "xr", true, true, undefined, undefined,
    function xr() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.xr;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "serial", true, true, undefined, undefined,
    function serial() {
        if (this instanceof Navigator) {

            return my_env.memory.navigator.serial;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
    undefined
);

my_env.plugins.def_obj_prop(Navigator.prototype, "adAuctionComponents", true, true, true,
    function adAuctionComponents(param0) {
        if (this instanceof Navigator) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "runAdAuction", true, true, true,
    function runAdAuction(param0) {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "canLoadAdAuctionFencedFrame", true, true, true,
    function canLoadAdAuctionFencedFrame() {
        if (this instanceof Navigator) {
            debugger;
            return false;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "canShare", true, true, true,
    function canShare() {
        if (this instanceof Navigator) {
            debugger;
            return false;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "share", true, true, true,
    function share() {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "clearAppBadge", true, true, true,
    function clearAppBadge() {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "getBattery", true, true, true,
    function getBattery() {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "getUserMedia", true, true, true,
    function getUserMedia(param0, param0, param0) {
        if (this instanceof Navigator) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "requestMIDIAccess", true, true, true,
    function requestMIDIAccess() {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "requestMediaKeySystemAccess", true, true, true,
    function requestMediaKeySystemAccess(param0, param0) {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "setAppBadge", true, true, true,
    function setAppBadge() {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "webkitGetUserMedia", true, true, true,
    function webkitGetUserMedia(param0, param0, param0) {
        if (this instanceof Navigator) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "clearOriginJoinedAdInterestGroups", true, true, true,
    function clearOriginJoinedAdInterestGroups(param0) {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "createAuctionNonce", true, true, true,
    function createAuctionNonce() {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "joinAdInterestGroup", true, true, true,
    function joinAdInterestGroup(param0) {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "leaveAdInterestGroup", true, true, true,
    function leaveAdInterestGroup() {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "updateAdInterestGroups", true, true, true,
    function updateAdInterestGroups() {
        if (this instanceof Navigator) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "deprecatedReplaceInURN", true, true, true,
    function deprecatedReplaceInURN(param0, param0) {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "deprecatedURNToURL", true, true, true,
    function deprecatedURNToURL(param0) {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "getInstalledRelatedApps", true, true, true,
    function getInstalledRelatedApps() {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "getInterestGroupAdAuctionData", true, true, true,
    function getInterestGroupAdAuctionData(param0) {
        debugger;
        return {};
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "registerProtocolHandler", true, true, true,
    function registerProtocolHandler(param0, param0) {
        if (this instanceof Navigator) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
);

my_env.plugins.def_obj_prop(Navigator.prototype, "unregisterProtocolHandler", true, true, true,
    function unregisterProtocolHandler(param0, param0) {
        if (this instanceof Navigator) {
            debugger;
            return undefined;
        } else {
            my_env.plugins.throw_error(TypeError,"Illegal invocation");
        }
    },
);
