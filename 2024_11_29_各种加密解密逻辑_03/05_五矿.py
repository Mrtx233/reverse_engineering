

# 1. 发请求到public, 得到公钥
# 2. 加密
# 3. 发请求
import requests
import execjs

f = open("wukuang.js", mode="r", encoding="utf-8")
js_code = f.read()
f.close()

js = execjs.compile(js_code)

session = requests.session()
session.headers = {
    "accept": "application/json, text/plain, */*",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "connection": "keep-alive",
    # "content-length": "0", # 坑...大坑
    "content-type": "application/json",  # 坑...大坑
    "cookie": "__jsluid_s=76c693f535fc1269906478ab3b2f4e4e; SUNWAY-ESCM-COOKIE=f1bb8ba6-fb5a-4826-beaf-f579d106ac4c; JSESSIONID=7DD80D495F6323CABAC3DF7C4C2E3396",
    "dnt": "1",
    "host": "ec.minmetals.com.cn",
    "origin": "https://ec.minmetals.com.cn",
    "pragma": "no-cache",
    "referer": "https://ec.minmetals.com.cn/open/home/purchase-info?tabIndex=0",
    "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
}

pub_url = "https://ec.minmetals.com.cn/open/homepage/public"
pub_resp = session.post(pub_url)
print(pub_resp.text)  # 公钥

params = {
     "businessClassfication": "",
     "dwmc": "",
     "inviteMethod": "",
     "lx": "ZBGG",
     "mc": "",
     "pageIndex": 4
}
pms = js.call("fn", params, pub_resp.text)

data_url = "https://ec.minmetals.com.cn/open/homepage/zbs/by-lx-page"
resp = session.post(data_url, data=pms)
print(resp.json())
