import redis


# 1. 连接
red = redis.Redis(
    host="localhost",
    port=6379,  # redis默认端口号6379
    db=0,   # 0-15  16个库
    password="123456",
    decode_responses=True  # 是否需要解码
)

# # 2.尝试着完成一些操作
# # python程序操纵redis:
# # 逻辑, 把redis的所有命令. 用python的函数封装了一遍
# # set key value
# # red.set(key, value)
# # red.set("dae", "铁锅炖大额")
# ret = red.get("dae")
# print(ret)

# 数组
# red.lpush("qipei", "我爱你", "你爱我", "蜜雪冰城甜蜜蜜")
# result = red.lrange("qipei", 0, -1)
# print(result)

# 后面的其他操作. 完全一样...
# 注意, zset数据的存储有一点点的不一样
# zadd key score value score value
# red.zadd("ggxx", {"红塔山": 18, "红河": 6})
# zadd是会覆盖分值的...
# red.zadd("ggxx", {"红塔山": 66})

# 其他操作. 我们就不介绍了.


