/**
 * 这个js, 专门用来检测环境的. 当前的执行环境是node还是浏览器
 */

function check_env(){
    //  检测window对象, 是否存在.  node里面没有window, 但是浏览器下是有的
    return (typeof window) === "undefined" ? "fuck_env" : "ok_env";
}

// 定制导出的内容
// module.exports = check_env
// 你这边导出的东西. 是那边导入的东西

module.exports = {
    chenv : check_env,
}
