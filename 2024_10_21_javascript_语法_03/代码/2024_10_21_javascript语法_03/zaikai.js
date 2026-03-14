// banner页的数据加密工作

(function () {
    // 全局
    var key = "10010";

    // 全局
    function jiami(s) { // 简单的完成了数据加密工作
        console.log('再凯用秘钥', key, "进行加密", "原文是", s);
    }
    window.jiami_zaikai = jiami;
})();
