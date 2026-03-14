import requests


class NvPengYou:
    def nakele(self):
        print(self.name, "帮我拿可乐")


p1 = NvPengYou()
# 给对象设置一些属性
p1.name = "林志玲"
p1.age = 18
p1.shengao = 178

p2 = NvPengYou()
p2.name = "如花"
p2.age = 28
p2.shengao = 198

for i in range(100):
    p1.nakele()
p2.nakele()
