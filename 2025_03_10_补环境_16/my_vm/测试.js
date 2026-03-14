const { createCanvas, Image } = require('canvas')

let img = new Image();
img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAHCAYAAAAvZezQAAAABmJLR0QA/wD/AP+gvaeTAAAAFUlEQVQImWOU1lD5z4AEmBjQAE0EAKVPAXQEUCMLAAAAAElFTkSuQmCC';
img.width = 500;





// const canvas = createCanvas(200, 200)
// const ctx = canvas.getContext('2d')
//
// // Write "Awesome!"
// ctx.font = '30px'
// ctx.rotate(0.1)
// ctx.fillText('Awesome!', 50, 100)
//
// // Draw line under text
// var text = ctx.measureText('Awesome!')
// ctx.strokeStyle = 'rgba(0,0,0,0.5)'
// ctx.beginPath()
// ctx.lineTo(50, 102)
// ctx.lineTo(50 + text.width, 102)
// ctx.stroke()
//
// let d = ctx.getImageData(15,20, 100, 200 );
// console.log(d.data.slice())

//
// // Draw cat with lime helmet
// loadImage('tu.jpg').then((image) => {
//   ctx.drawImage(image, 50, 0, 70, 70)
//   // 输出到文件
//   fs.writeFileSync("index.html", '<img src="' + canvas.toDataURL() + '" />')
// })


// var urllib = require("url");
//
// location_href = "http://localhost:63342/a/b/c.html?_ijt=ttc3cl6aogq38rsul8n4lq3fc8"
//
// function fn(url){
//     let u = urllib.resolve(location_href, url); // python中的urljoin
//     // console.log(u);
//     let obj = urllib.parse(u);
//     // console.log(obj);
//     if(obj.protocol === "http:" && obj.port === '80') u = u.replaceAll(":80", "");
//     if(obj.protocol === "https:" && obj.port === '443') u = u.replaceAll(":443", "");
//
//     obj = urllib.parse(u);
//     let a_href_info = {
//       protocol: obj.protocol === null ? "": obj.protocol,
//       host: obj.host === null ? "": obj.host,
//       port: obj.port === null ? "": obj.port,
//       hostname: obj.hostname === null ? "": obj.hostname,
//       hash: obj.hash === null ? "": obj.hash,
//       search: obj.search === null ? "": obj.search,
//       query: obj.query === null ? "": obj.query,
//       pathname: obj.pathname === null ? "": obj.pathname,
//       path: obj.path === null ? "": obj.path,
//       href: obj.href === null ? "": obj.href,
//     }
//     console.log(a_href_info);
// }
//
//
// url = "/hehe"
// fn(url);
// url = "../hehe"
// fn(url);
// url = "http://www.baidu.com:80"
// fn(url);
// url = "http://www.baidu.com:443"
// fn(url);
// url = "https://www.baidu.com:443"
// fn(url);
// url = "https://www.baidu.com:80"
// fn(url);
//
//
//
//
// let fake_index = require("fake-indexeddb");
//
// fk = fake_index.indexedDB.open("qiao");
// fk.onerror = function(err){
//     console.log("error");
// }
// fk.onsuccess = function(err){
//     console.log("success", err.target.result);
// }
// fk.onupgradeneeded = function(err){
//     console.log("onupgradeneeded", err.target.result);
// }
// // 原型链 => 有问题....



// const cheerio = require("cheerio");
// const fs = require("fs");
//
// const html_code = fs.readFileSync("index.html", {encoding:"utf-8"});
//
// function getCheerioContext(){
//     let $ = cheerio.load(html_code);
//     return $;
// }
//
// $ = getCheerioContext();
//
//
//
// let body = $("body")[0];
// let elem = body.firstChild;
//
// console.log(elem);


// switch(tp){
//     case "text":
//         console.log("现在是文本")
//         break;
//     case "script":
//         console.log("是script")
//         break;
//     case "tag":
//         console.log("是标签", elem.name);
//         switch (elem.name) {
//             case 'div':
//
//
//
//         }
//         break;
// }




