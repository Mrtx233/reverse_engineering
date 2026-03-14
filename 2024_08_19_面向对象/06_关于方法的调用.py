class NvPengYou:
    def __init__(self, name, age, shengao):  # 给新创建的对象初始化
        # 当前对象的名字 = 你传过来的名字
        self.name = name
        self.age = age
        self.shengao = shengao

    def zuofan(self):
        print(self.name, "做饭")

    def nakele(self):
        print(self.name, "拿可乐")

    def nuanchuang(self):
        print(self.name, "暖床")

    def ganhuo(self):
        # 记住, 找准对象, 让他去干活就完了
        # 如何让对象帮我去做饭呢?
        print(self.name, "要帮我干活了")
        self.zuofan()
        self.nakele()
        self.nuanchuang()
        print(self.name, "干完活了")

p1 = NvPengYou("林志玲", 18, 178)
p1.ganhuo()

p2 = NvPengYou("如花", 28, 188)
p2.ganhuo()
