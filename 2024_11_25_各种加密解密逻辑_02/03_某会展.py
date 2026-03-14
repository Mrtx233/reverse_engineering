import json

import requests
import execjs

f = open("binhu.js", mode="r", encoding="utf-8")
js_code = f.read()
f.close()
js = execjs.compile(js_code)

url = "https://www.hfhuizhan.com/prod-api/hfhz-exhibition/back/exhibition/listExhibitionNotPage"

ming_data = {
    "yyyyMM": "2024-11"
}

ret = js.call("sr", ming_data)
# print(ret)
my_headers = {
    "accept": "application/json",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "authorization": "null",
    "cache-control": "no-cache",
    "content-length": "55",
    "content-type": "application/json;charset=UTF-8, application/json;charset=UTF-8",
    "dnt": "1",
    "origin": "https://www.hfhuizhan.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.hfhuizhan.com/schedule",
    "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
}
resp = requests.post(url, data=ret, headers=my_headers)
ming = js.call("mr", resp.text)
print(ming)
