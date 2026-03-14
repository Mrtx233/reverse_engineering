# pip install pycryptodome

from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
import base64

# # 1. 加密逻辑
# s = "我哎樵夫"  # 明文字符串
#
# # 创建一个aes的加密器
# # 16(最常见),     24    or 32 bytes
# # *AES-128*,*AES-192* or *AES-256*.
# # 在M3U8里面会有  method=AES-128,key=xxxxxx
#
# # mode表示加密的模式,
# # 常见的:
# #   ECB: 没有iv
# #   CBC: 有iv的, iv的长度是16bytes
# key = b'8888888888888888'
# iv = b'1234567887654321'
# aes = AES.new(key=key, iv=iv, mode=AES.MODE_CBC)
#
# # 如果你再网页上找到了. key, iv, mode 基本上可以开始撸代码了
#
# # 对明文进行加密, 被加密的内容必须是字节, 计算的密文也是字节
# # 对数据进行填充
# # print(s.encode("utf-8").__len__())
# ming_bs = pad(s.encode("utf-8"), 16)
# # print(ming_bs)
# mi_bs = aes.encrypt(ming_bs)
# # print(mi_bs.decode(""))
# # b'\x94`\x08\x02k6^\xa8j\xdcM\x82\xf3\x96\xb8\xbe'
# # 请注意, 加密结果看起来很乱. 乱就对了.
# # 需要把字节处理成base64的字符串, 然后再进行数据传输
#
# b64str = base64.b64encode(mi_bs).decode()
# print(b64str)  # lGAIAms2Xqhq3E2C85a4vg==


# 2. aes解密
s = "lGAIAms2Xqhq3E2C85a4vg=="
aes = AES.new(key=b'8888888888888888', iv=b'1234567887654321', mode=AES.MODE_CBC)
mi_bs = base64.b64decode(s)
ming_bs = aes.decrypt(mi_bs)
# 解密完成后, 需要去掉填充
ming_bs = unpad(ming_bs, 16)
print(ming_bs.decode("utf-8"))













