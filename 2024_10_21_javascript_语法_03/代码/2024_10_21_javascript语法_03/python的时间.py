import time

# 时间戳, 以秒为单位
# 1729519556.4246457
# 1729520086850
print(time.time())
# 处理成js的时间戳
# 1729520180517
print(int(time.time() * 1000))

