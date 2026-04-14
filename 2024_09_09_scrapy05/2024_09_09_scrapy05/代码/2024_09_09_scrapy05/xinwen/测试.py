import redis


conn = redis.Redis(host="127.0.0.1", port=6379, password="123456", db=4, decode_responses=True)
r = conn.sadd("haha", "我爱你")
# 1 之前没有该数据, 新增了1个
# 0 之前有这个数据, 新增了0个
print(r)

# 2123+13  2136继续
