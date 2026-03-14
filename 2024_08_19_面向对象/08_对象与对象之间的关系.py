# 植物大战僵尸
# 植物
import requests


class Plant:
    def __init__(self, gongjili, xue, name):
        self.gongjili = gongjili
        self.xue = xue
        self.name = name
        # self.session = requests.Session()  # 组合

    def gan_jiangshi(self, jiangshi):  # 传递参数的时候. 是可以把一个完整的对象作为参数传递的
        # 植物打僵尸, 僵尸要扣血  # 7777 9999
        jiangshi.xue -= self.gongjili
        # 僵尸反击
        jiangshi.gan_zhiwu(self)    # 僵尸可以咬植物, 把植物作为一个参数, 传递出去


# 僵尸
class JiangShi:
    def __init__(self, gongjili, xue, name):
        self.gongjili = gongjili
        self.xue = xue
        self.name = name
    def gan_zhiwu(self, zhiwu):
        zhiwu.xue -= self.gongjili


# 游戏(client)
p1 = Plant(180, 5000, "豌豆")
p2 = Plant(200, 1000, "玉米")
j1 = JiangShi(10, 10000, "铁通僵尸")
j2 = JiangShi(20, 8000, "跳高僵尸")

# 植物要去打僵尸
print(j2.xue)
print(p1.xue)
p1.gan_jiangshi(j2)
print(j2.xue)
print(p1.xue)
