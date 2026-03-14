import requests

import execjs
import json

f = open("shuwei.js", mode="r", encoding="utf-8")
js_code = f.read()
f.close()
js = execjs.compile(js_code)

url = "https://app.swguancha.com/client/v1/cPublic/consumer/baseInfo"

data = {"size": 16,
        "current": 2,
        "propertyCode": [
            "DISTRICT_PROP_GJ025_RJDQSCZZ",
            "DISTRICT_PROP_GJ117_NMSYGGQDCYYCLS",
            "DISTRICT_PROP_GJ001_NMHJRK"],
        "dimensionTime": "2019",
        "levelType": 2
        }

my_headers = {
    "accept": "application/json, text/plain, */*",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "connection": "keep-alive",
    "content-length": "174",
    "content-type": "application/json;charset=UTF-8",
    "devicetype": "1",
    "dnt": "1",
    "host": "app.swguancha.com",
    "origin": "https://www.swguancha.com",
    "pragma": "no-cache",
    "referer": "https://www.swguancha.com/",
    "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
}
resp = requests.post(url, data=json.dumps(data, separators=(',', ':')), headers=my_headers)
# print(resp.text)

print(js.call("fn", resp.text))
