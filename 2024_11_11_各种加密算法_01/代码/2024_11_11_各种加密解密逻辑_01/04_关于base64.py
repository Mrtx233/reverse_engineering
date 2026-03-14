

# ls = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
#
# result = ls[24] + ls[22] + ls[9] + ls[35]
# print(result)


import base64
# s = "abc"
# # 按照base64的逻辑, 把字节处理成b64的组成
# bs = base64.b64encode(s.encode("utf-8")).decode()
# print(bs)

# s = "YWJj"
# # 把b64的东西, 按照b64的逻辑解码回字节
# bs = base64.b64decode(s).decode()
# print(bs)

# 使用场景, 几乎都是把字节要进行传输的时候. 处理成b64的字符串, 传输
# 接收到之后, 还原回字节.

# print(base64.b64encode("我爱你, 周杰伦, 你也得爱我".encode("utf-8")).decode().replace("+", "-"))
#
# s = "5oiR54ix5L2gLCDlkajmnbDkvKYsIOS9oOS5n-W-l-eIseaIkQ=="
# s.replace("-", "+")

# print("5oiR54ix5L2gLCDlkajmnbDkvKYsIOS9oOS5n-W-l-eIseaIkQ==".__len__()/4)
