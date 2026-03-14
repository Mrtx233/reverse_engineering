import requests
import execjs  # pyexecjs2

url = "https://data-server.cbaleague.com/api/teams/29136/seasons/2018/players"

headers = {
    "accept": "application/json, text/plain, */*",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "dnt": "1",
    "isencrypt": "encrypt",
    "origin": "https://www.cbaleague.com",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.cbaleague.com/",
    "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"
}

resp = requests.get(url, headers=headers)
print(resp.text)

f = open('cba.js', mode="r", encoding="utf-8")
js_code = f.read()
f.close()

js = execjs.compile(js_code)
ret = js.call("a5e", resp.text.strip('"'))
print(ret)

# 注意, 很多网站返回的内容是多了双引号或者单引号的
# s = 'xlkjfdlskajflkadsj'
# s = "'xlkjfdlskajflkadsj'"
