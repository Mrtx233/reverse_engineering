(function(){
    let _tmp = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function _$xx(){
        let method = arguments[0];
        let url = arguments[1];
        let miwen = 加密(method, url); // 签名
        url = url + "?OWNRL2Cu=" +miwen;

        arguments[1] = url;
        _tmp.apply(this, arguments);
    }
})();

var xhr = new XMLHttpRequest()
xhr.open('get', "url")