import binascii


# s = "主业"
# bs = s.encode("utf-8")
# # bytes to ascii 保存成hex的形式
# result = binascii.b2a_hex(bs)
# print(result)
# # b'e4b8bbe4b89a'
# #   e4b8bbe4b89a

# 认定一个事情,
# 字节 => hex的形式
# hex => 字节


# s = 'e4b8bbe4b89a'
# # ascii to bytes , ascii是hex形式的
# bs = binascii.a2b_hex(s)
# print(bs.decode("utf-8"))
# # 主业

s = "主业"
bs = s.encode("utf-8")
print(str(bs).strip("b'").replace("\\x", ""))
