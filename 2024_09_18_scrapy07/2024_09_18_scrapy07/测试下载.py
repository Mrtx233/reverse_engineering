import requests

url = "http://mtiku.wangxiao.cn/ueditor/net/upload/image/20220718/6379376414485811968587745.png"

resp = requests.get(url, headers={
})
print(resp.status_code)
with open('tu.png', mode="wb") as f:
    f.write(resp.content)
