# 对称加密:
# 加密和解密的秘钥相同的, 流程, 对称的
# pip install pycryptodome
from Crypto.Cipher import AES, DES, DES3
from Crypto.Util.Padding import pad, unpad
import base64

# # 加密
# s = "我爱你"
#
# # CBC模式下是有iv的. ECB是没有iv的
# aes = AES.new(key=b'6666666666666666', mode=AES.MODE_CBC, IV=b'1234567887654321')
# bs = aes.encrypt(pad(s.encode("utf-8"), 16))
# print(base64.b64encode(bs).decode())

# # 解密
# s = 'S3WGYGwaJ8CuofITEdLeew=='
# aes = AES.new(key=b'6666666666666666', mode=AES.MODE_CBC, IV=b'1234567887654321')
# ming_bs = aes.decrypt(base64.b64decode(s))
# print(unpad(ming_bs, 16).decode('utf-8'))


# # DES
# s = "我爱你"
# aes = DES.new(key=b'66666666', mode=DES.MODE_CBC, IV=b'12345678')
# bs = aes.encrypt(pad(s.encode("utf-8"), 8))
# print(base64.b64encode(bs).decode())
#
# #
# s = 'LUzy6zY00CWGOgOibOgeeg=='
# aes = DES.new(key=b'66666666', mode=DES.MODE_CBC, IV=b'12345678')
# ming_bs = aes.decrypt(base64.b64decode(s))
# print(unpad(ming_bs, 8).decode('utf-8'))


# # 3DES  -> 内部是des
# s = "我爱你"
# aes = DES3.new(key=b'1234567866666666', mode=DES3.MODE_CBC, IV=b'12345678')
# bs = aes.encrypt(pad(s.encode("utf-8"), 8))
# print(base64.b64encode(bs).decode())

# s = "notMeCd38C2UeZ88szrkbA=="
# aes = DES3.new(key=b'1234567866666666', mode=DES3.MODE_CBC, IV=b'12345678')
# ming_bs = aes.decrypt(base64.b64decode(s))
# print(unpad(ming_bs, 8).decode('utf-8'))
