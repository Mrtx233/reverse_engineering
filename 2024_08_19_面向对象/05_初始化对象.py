class NvPengYou:
    def nakele(self):
        # 7777 99999
        print(self.name, self.age, self.shengao, "帮我拿可乐")
        self.nuanchuang()

    def nuanchuang(self):
        pass

    def zuofan(self):
        pass

    # 在创建对象的时候, 初始化对象的.
    # 这里有个大坑. 容易写错成: __int__   777777   9999
    def __init__(self, name, age, shengao):  # 给新创建的对象初始化
        # 当前对象的名字 = 你传过来的名字
        self.name = name
        self.age = age
        self.shengao = shengao


# 创建对象的时候. 会默认调用一个函数. __init__
# 我们可以在__init__中完成对象的初始化工作
p1 = NvPengYou("林志玲", 18, 178)
p2 = NvPengYou("如花", 28, 188)
p1.nakele()
p2.nakele()

