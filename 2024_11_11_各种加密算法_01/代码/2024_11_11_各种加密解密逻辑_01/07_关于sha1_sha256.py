from hashlib import sha1, sha256, sha512

s = "123456"
obj = sha1(s.encode("utf-8"))
print(obj.hexdigest())   # 7c4a8d09ca3762af61e59520943dc26494f8941b

s = "123456"
obj = sha256(s.encode("utf-8"))
print(obj.hexdigest())   # 7c4a8d09ca3762af61e59520943dc26494f8941b


s = "123456"
obj = sha512(s.encode("utf-8"))
print(obj.hexdigest())   # 7c4a8d09ca3762af61e59520943dc26494f8941b

# 目前看到的结果都是hex的
