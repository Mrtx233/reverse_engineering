import requests
import execjs
from urllib.parse import urlencode
f = open("kanniao.js",mode="r", encoding="utf-8")
js = execjs.compile(f.read())
f.close()

url = "https://api.birdreport.cn/front/record/activity/search"

data = {
    "page": 1,
    "limit": 20,
    "taxonid": "",
    "startTime": "",
    "endTime": "",
    "province": "青海省",
    "city": "",
    "district": "",
    "pointname": "",
    "username": "",
    "serial_id": "",
    "ctime": "",
    "taxonname": "",
    "state": "",
    "mode": "0",
    "outside_type": 0
}

params = urlencode(data)
print(params)

ret = js.call("fn", params)

ret_header = ret['headers']

ret_data = ret['data']

my_headers = {
    "accept": "application/json, text/javascript, */*; q=0.01",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "connection": "keep-alive",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "dnt": "1",
    "host": "api.birdreport.cn",
    "origin": "https://www.birdreport.cn",
    "pragma": "no-cache",
    "referer": "https://www.birdreport.cn/",
    "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
}
# 合并头
my_headers.update(ret_header)

# 为了让charles能抓到包. 可以挂上charles的代理
my_proxies = {
    "http": "http://127.0.0.1:10086",
    "https": "http://127.0.0.1:10086"
}

# print(my_headers)  # 头没问题
# print(ret_data)
#                                              挂代理              略过证书的验证
resp = requests.post(url=url, data=ret_data, proxies=my_proxies, verify=False, headers=my_headers)
print(resp.text)

mi = resp.json()['data']


# 可以去charles抓包.
# 对比. 你发出去的包和浏览器发出去的包是否一样..是否有偏差...
ming = js.call("decrypt", mi)
print(ming)
