# 1. 先发第一个请求.
import requests
from lxml import etree
from urllib.parse import urljoin
import subprocess


url = "https://qikan.cqvip.com/Qikan/Search/Advance?from=index"

session = requests.session()
session.headers = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "dnt": "1",
    "pragma": "no-cache",
    "priority": "u=0, i",
    "sec-ch-ua": "\"Not(A:Brand\";v=\"99\", \"Google Chrome\";v=\"133\", \"Chromium\";v=\"133\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36"
}

resp = session.get(url)
print(resp.status_code)
# print(resp.text)

with open("./target/html/index.html", mode="w", encoding="utf-8") as f:
    f.write(resp.text)

# 提取所有js代码
tree = etree.HTML(resp.text)
scripts = tree.xpath("//script")

with open("./target/js/target.js", mode="w", encoding="utf-8") as f:
    for script in scripts[:2]:
        txt = script.xpath("./text()")
        if txt:
            txt = txt[0]
            f.write(txt)
            f.write("\n")
        else:
            src = script.xpath("./@src")[0]
            src = urljoin(url, src)

            js_code = session.get(src).text  # ???
            f.write(js_code)
            f.write("\n")

# 执行js代码: node main.js

ret = subprocess.getoutput("node main.js")
print(ret)
k,v = ret.split("=")

session.cookies[k] = v

resp = session.get(url)
print(resp.text)
print(resp)
