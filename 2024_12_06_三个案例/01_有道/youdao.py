import requests
import execjs

f = open("youdao.js",mode="r", encoding="utf-8")
js = execjs.compile(f.read())
f.close()

url = "https://dict.youdao.com/webtranslate"

word = "jay"

form_data = js.call("fn", word)
# print(form_data)

my_headers = {
    "accept": "application/json, text/plain, */*",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "connection": "keep-alive",
    "content-length": "330",
    "content-type": "application/x-www-form-urlencoded",
    "cookie": "OUTFOX_SEARCH_USER_ID=-922898077@10.110.96.160; _ga=GA1.2.50793062.1656497331; P_INFO=homexue@126.com|1706240325|0|youdaonote|11&14|gud&1705052371&youdaonote#gud&null#10#0#0|186987&0||homexue@126.com; OUTFOX_SEARCH_USER_ID_NCOO=1300840573.2193646; DICT_DOCTRANS_SESSION_ID=ZTFjZWUxZGQtMGUxMy00MDUyLWE4ZmItNDZmZTFhZmYxNDYy; _uetsid=1ae74620b3bb11efa1889d70823eff28; _uetvid=1dfbc59071ad11ef90b4a171821cdd57",
    "dnt": "1",
    "host": "dict.youdao.com",
    "origin": "https://fanyi.youdao.com",
    "pragma": "no-cache",
    "referer": "https://fanyi.youdao.com/",
    "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
}
resp = requests.post(url=url, data=form_data, headers=my_headers)
# print(resp.text)

ming = js.call("O", resp.text)
print(ming)
