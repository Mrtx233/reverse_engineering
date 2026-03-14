const cheerio = require("cheerio");
const fs = require("fs");

// 获取html代码
let html_code = fs.readFileSync(__dirname+"/02_jquery.html", {encoding: "utf-8"})
// console.log(f);

let $ = cheerio.load(html_code);
let btn = $("#btn");
console.log(btn)


/**
 *
 * 对照关系
 * cheerio              ->  jquery   -> 可以解析dom
 * Element             可以直接拿到dom  -> 我们要补充的就是这个
 * 拥有所有dom中的数据
 */
function HTMLDivElement(){

}

Object.defineProperty(HTMLDivElement.prototype, "tagName", {
    get(){
        // 从map中获取到当前对象的数据
        return mm.get(this).tagName;
    }
})
// memory
mm = new Map(); // 存储的是: html对象 -> 数据
var document = {
    getElementById(id){

        let el = $("#"+id); // 用cheerio拿到页面数据
        let nd = el[0] ;    // 把标签的数据拿出来

        // 返回了div的对象. 是空的. 没有任何数据
        let obj = Object.create(HTMLDivElement.prototype);
        mm.set(obj, nd); // 当前创建的这个标签对象和标签的数据.形成一一对应的关系
        return obj
    }
}

let div = document.getElementById("btn"); // 777 999
console.log(div.tagName);
