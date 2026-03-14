import requests
import execjs
import json

f = open("问财_02.js", mode="r", encoding="utf-8")
js = execjs.compile(f.read())
f.close()

url = "http://iwencai.com/customized/chart/get-robot-data"

payload = {"source":"Ths_iwencai_Xuangu","version":"2.0","query_area":"","block_list":"","add_info":"{\"urp\":{\"scene\":1,\"company\":1,\"business\":1},\"contentType\":\"json\",\"searchInfo\":true}","question":"2024-12-12股票","perpage":50,"page":1,"secondary_intent":"stock","log_info":"{\"input_type\":\"click\"}","rsh":"Ths_iwencai_Xuangu_eq803i0gpd6hd6ckox4a304qj22fs32z"}

headers = {
    "accept": "application/json, text/plain, */*",
    "accept-encoding": "gzip, deflate",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "content-length": "369",
    "content-type": "application/json",
    "cookie": "ta_random_userid=4oct3pn2ap; cid=dae6a9b13bd015946e14599c842e31951734338470; other_uid=Ths_iwencai_Xuangu_eq803i0gpd6hd6ckox4a304qj22fs32z; ",
    "dnt": "1",

    "host": "iwencai.com",
    "origin": "http://iwencai.com",
    "pragma": "no-cache",
    "proxy-connection": "keep-alive",
    "referer": "http://iwencai.com/unifiedwap/result?w=2024-12-12%E8%82%A1%E7%A5%A8&querytype=stock&addSign=1734356485569",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
}

v = js.call("fn").split(";")[0].split("=")[1]
headers['hexin-v'] = v
headers['cookie'] += "v="+v

resp = requests.post(url, data=json.dumps(payload, separators=(',', ':')), headers=headers)
print(resp.text)
