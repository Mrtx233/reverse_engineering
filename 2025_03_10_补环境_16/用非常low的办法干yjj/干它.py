"""
瑞数6过无限debugger
如果是关键字debugger, 右键never pause here -> 很多位置. 不是一个位置. 一定要做本地替换
hook eval 替换掉debugger
hook Function.prototype.constructor  替换掉debugger
"""


# 1. 先发第一个请求.
import requests
from lxml import etree
from urllib.parse import urljoin
import subprocess
import re
import execjs

obj1 = re.compile(r'<meta content="(?P<content>.*?)" r', re.S)
obj2 = re.compile(r"r='m'>(?P<ts_code>\$_ts=.*?)</script>", re.S)


url = "https://www.nmpa.gov.cn/xxgk/kpzhsh/kpzhshyp/index.html"

session = requests.session()
session.headers = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "dnt": "1",
    "pragma": "no-cache",
    "priority": "u=0, i",
    "sec-ch-ua": "Not(A:Brand;v=99, Google Chrome;v=133, Chromium;v=133",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "Windows",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36"
}

resp = session.get(url)
# print(resp.status_code)
# print(resp.text)  # meta-> content , r=m   ts内容   js文件内容

content = obj1.search(resp.text).group("content")
# print(content)

ts_code = obj2.search(resp.text).group("ts_code")
# print(ts_code)

# 读取所有js代码
f = open("js_env.js", mode="r", encoding="utf-8")
js_code = f.read().replace("$$$qiao_content$$$", content).replace("$$$qiao_ts_code$$$", ts_code)

js_obj = execjs.compile(js_code)

cookie = js_obj.call("get_ck")

k, v = cookie.split("; path=/")[0].split("=")


session.cookies[k] = v

print(session.cookies)
resp = session.get(url)
print(resp.text)
print(resp.status_code)
