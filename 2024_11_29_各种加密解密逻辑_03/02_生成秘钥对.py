
# Crypto库
# 创建密钥对
import base64

from Crypto.PublicKey import RSA

# 创建rsa秘钥对,
rsa_key = RSA.generate(2048)

# # # 此时, rsa_key里面装着, 公钥, 私钥
# # # 先获取公钥
# pub_key = rsa_key.public_key().export_key()
# # 写入文件
# f = open("public.txt", mode="wb")
# f.write(pub_key)
# f.close()
#
# # 私钥 -> 直接导出就是私钥
# pri_key = rsa_key.export_key()
# f = open("private.txt", mode="wb")
# f.write(pri_key)
# f.close()

pub_key = rsa_key.public_key().export_key(format="DER")
print(base64.b64encode(pub_key).decode())

pub_key = rsa_key.export_key(format="DER")
print(base64.b64encode(pub_key).decode())

