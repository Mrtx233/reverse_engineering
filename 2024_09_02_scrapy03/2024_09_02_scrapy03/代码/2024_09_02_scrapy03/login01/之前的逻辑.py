import requests

url ="http://www.woaidu.cc/bookcase.php"

resp = requests.get(url, headers={
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-encoding": "gzip, deflate",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "connection": "keep-alive",
    "cookie": "Hm_lvt_155d53bb19b3d8127ebcd71ae20d55b1=1725279007; HMACCOUNT=BF2A5C3C6885D21B; username=User; t=727276623566d5ab65cfc10; Hm_lpvt_155d53bb19b3d8127ebcd71ae20d55b1=1725279190",
    "dnt": "1",
    "host": "www.woaidu.cc",
    "pragma": "no-cache",
    "referer": "http://www.woaidu.cc/book/315393/",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
})
print(resp.text)
