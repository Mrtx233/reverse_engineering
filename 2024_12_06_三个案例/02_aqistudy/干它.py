import requests
import execjs

f = open("干它.js",mode="r", encoding="utf-8")
js = execjs.compile(f.read())
f.close()

url = "https://www.aqistudy.cn/apinew/aqistudyapi.php"

data = {
    "city": "丽水"
}
mi = js.call("fn", data)

form_data = {
    "hXhY1B2Kd": mi
}

headers = {
    "accept": "*/*",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "connection": "keep-alive",
    "content-length": "358",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "cookie": "Hm_lvt_6088e7f72f5a363447d4bafe03026db8=1732798738,1733118770,1733477828,1733493486; HMACCOUNT=9D37B2A4074C04A6; Hm_lpvt_6088e7f72f5a363447d4bafe03026db8=1733496121",
    "dnt": "1",
    "host": "www.aqistudy.cn",
    "origin": "https://www.aqistudy.cn",
    "pragma": "no-cache",
    "referer": "https://www.aqistudy.cn/html/city_realtime.php?v=2.3",
    "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    "x-requested-with": "XMLHttpRequest"
}

resp = requests.post(url, data=form_data, headers=headers)
# print(resp.text)
# 打开charles会报错, 提示ssl证书不通过
ming = js.call("gn", resp.text)
print(ming)