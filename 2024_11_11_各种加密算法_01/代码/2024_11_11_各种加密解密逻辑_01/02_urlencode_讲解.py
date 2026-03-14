
#  urllib  url library
from urllib.parse import urljoin, urlencode, unquote, quote, quote_plus


# # 超级不推荐. 最愚蠢的办法
# s = "主业"
# # b'\xe4\xb8\xbb\xe4\xb8\x9a'
# print(str(s.encode("utf-8")).strip("b'").replace("\\x", "%").upper())

# my_params = {
#     "username": "樵夫",
#     "password": "123456"
# }
#
# # username=%E6%A8%B5%E5%A4%AB&password=123456
# print(urlencode(my_params))
# # urlencode可以把字典类型的参数, 直接处理成字符串(处理urlencode以及参数的拼接一次搞定)

# 我们很少用这个东西. 因为requests模块自动就能帮你完成这个动作
# import requests
#
# url = "http://www.baidu.com"
# my_params = {
#     "username": "樵夫",
#     "password": "123456"
# }
# # http://www.baidu.com/?username=%E6%A8%B5%E5%A4%AB&password=123456
# resp = requests.get(url, params=my_params)
# print(resp.request.url)

# 如果该网站的参数经过加密的. 并且,. 有的网站会在urlencode之后. 进行加密.
# 密文 = 加密(被urlencode之后的参数)
# 发请求(密文)

# 有一些特殊的网站, cookie的值, 需要urlencode
# 这种cookie的一部分值需要urlencode的时候. 此时,我们希望能不能只处理一小部分字符串
# s = "http://www.baidu.com"
# print(quote(s))
#
# # http%3A//www.baidu.com
# # http%3A%2F%2Fwww.baidu.com
# print(quote_plus(s))

# 使用概率不高.很低..
# resp_text = "http%3A%2F%2Fwww.baidu.com"
# # urldecode 解码
# print(unquote(resp_text))  # http://www.baidu.com
# 上述这个逻辑, 只有在程序中真的要用的时候.
# 如果你只是想知道这个值到底原文是什么, 只是想看一眼...此时去找工具. 不要写代码
# https://ctool.dev/tool.html

# 77 99

# # 当前页面的url
# url1 = "http://www.baidu.com/a/b"
#
# # xpath提取的
# url2 = "/haha/hehe"  # >  "http://www.baidu.com/haha/hehe"
# url3 = "haha/hehe"  # > "http://www.baidu.com/a/haha/hehe"
#
# # url1 + url2
# print(urljoin(url1, url2))
# # url1 + url3
# print(urljoin(url1, url3))

# print("主业".encode("utf-8"))

