const cheerio = require("cheerio");
const fs = require("fs");

const html_code = fs.readFileSync(__dirname+"/index.html", {encoding:"utf-8"});

function getCheerioContext(){
    $ = cheerio.load(html_code);
    return $;
}

module.exports = {
    getCheerioContext,
    cheerio
}


