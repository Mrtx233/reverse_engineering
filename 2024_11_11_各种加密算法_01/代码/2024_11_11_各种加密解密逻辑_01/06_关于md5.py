from hashlib import md5


s = "123456"

# 必须是字节
obj = md5(s.encode("utf-8"))
print(obj.hexdigest())
# e10adc3949ba59abbe56e057f20f883e

# 123456  =标准MD5算法=> e10adc3949ba59abbe56e057f20f883e
# 首先, 该计算过程是不可逆的.
#
# 撞库的原理(了解)
# 后台, 跑一个程序, 疯狂的跑所有的能排列组合出来的所有文字符号的md5
# 把计算出来的结果, 保存到数据库.
# 当有人来查询的时候. 去数据库查询一下即可, 能查询到, 就是有结果
# 查询不到, 提示查询不到..
# 通过穷举字符组合的方式

# 应对的办法就是加盐.

# # 源字符串
# s = "123456"
#
# # 加入一个非常非常大的其他字符串(固定的, 不能改)
# salt = 'flkasjdlkfjaskdlfjklajlkjhfklasdjklfjkl23j3klj4kl23j4kl23uoi7o7sda98fu23uru9023~~!@~@!#@!$#^%*%^^T$W#%$#%$#%#$%$@#$@!$%#@%$#^#$'
#
# s += salt
#
# obj = md5(s.encode("utf-8"))
# print(obj.hexdigest())

# # 验签:
# sign = "fa5f6cab9d669f7f5fcc65ddd5b78eea"
# s = "123456"
# salt = 'flkasjdlkfjaskdlfjklajlkjhfklasdjklfjkl23j3klj4kl23j4kl23uoi7o7sda98fu23uru9023~~!@~@!#@!$#^%*%^^T$W#%$#%$#%#$%$@#$@!$%#@%$#^#$'
# s += salt
# obj = md5(s.encode("utf-8"))
# val2 = obj.hexdigest()
# if sign == val2:
#     print("通过")
# else:
#     print("不通过")

