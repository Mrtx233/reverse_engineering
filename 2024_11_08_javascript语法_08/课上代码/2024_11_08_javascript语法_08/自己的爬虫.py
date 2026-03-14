import requests
import json
import re
#
# url = "http://127.0.0.1:12581/get_ajax_jquery_post"
#
# data = {"username":"qiao","age":18}
# headers = {
#     "Content-Type": "application/json"
# }
#
# resp = requests.post(url, data=json.dumps(data), headers=headers)
# print(resp.text)


# jsonp的处理逻辑
def jsonp_handle(source):
    obj = re.compile(r"\((?P<code>.*)\)", re.S)
    code = obj.search(source).group("code")
    return json.loads(code)


resp = requests.get("https://apiv6.geetest.com/gettype.php?gt=e52c06c937981b90b275d0aff1d40076&callback=geetest_1731073456768")
print(jsonp_handle(resp.text))

