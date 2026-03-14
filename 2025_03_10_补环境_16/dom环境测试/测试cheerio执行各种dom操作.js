const cheerio = require("cheerio");
const fs = require("fs");

// 获取html代码
let html_code = fs.readFileSync("index.html", {encoding: "utf-8"})
// console.log(f);

let $ = cheerio.load(html_code);

let sc = $("script")[2];
console.log($(sc.parentNode).find(sc).remove())


console.log($.html());




