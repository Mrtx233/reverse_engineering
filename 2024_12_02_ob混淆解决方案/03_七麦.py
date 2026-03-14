import requests
import execjs

f = open('qimai.js', mode="r", encoding="utf-8")
js_code = f.read()
f.close()
js = execjs.compile(js_code)

url = "https://api.qimai.cn/indexV2/getIndexRank"

params = {
    "setting": "0",
    "genre": "36"
}

jiami_ming = {
    "baseURL": "https://api.qimai.cn",
    "url": "/indexV2/getIndexRank",
    "params": params
}

mi = js.call("fn", jiami_ming)
params['analysis'] = mi

headers = {
    "accept": "application/json, text/plain, */*",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "connection": "keep-alive",
    "cookie": "PHPSESSID=a9dsshk2hsubsnp57ht6eb1q8o; qm_check=A1sdRUIQChtxen8pI0dANi8zcX5zHBl+YnEhLyZIPxw8WkVRVRliYGBFVVdfSFlSBU8CAAkABgxdUk5IPBAIUFRGA30BBRgTFThdJ0laRURtBWYAGBghVSNZSVBYGRVRWFxTXxpfRFdESFVKGQceABtN; gr_user_id=fd2b21db-71f3-4353-ab3d-1a5f8a63929c; ada35577182650f1_gr_session_id=3ae9f75b-123e-4e1f-b4f4-93f7fbe307f7; ada35577182650f1_gr_session_id_sent_vst=3ae9f75b-123e-4e1f-b4f4-93f7fbe307f7; synct=1733149570.563; syncd=-1086",
    "dnt": "1",
    "host": "api.qimai.cn",
    "origin": "https://www.qimai.cn",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
}

resp = requests.post(url, params=params, headers=headers)
print(resp.json())
