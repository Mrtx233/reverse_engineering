import requests

url = "http://127.0.0.1:12581/ajax_01"
resp = requests.get(url)
# 默认的ua: python-requests/2.31.0
print(resp.text)
print(resp.request.headers)
