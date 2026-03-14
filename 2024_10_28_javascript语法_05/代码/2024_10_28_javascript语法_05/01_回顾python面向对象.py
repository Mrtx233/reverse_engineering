# 先写类. 用类来归纳和总结. 某一类事务, 具有哪些功能, 具有哪些属性
class NvPengYou:
    def __init__(self, name, age, hight, weight):
        self.name = name
        self.age = age
        self.hight = hight
        self.weight = weight

    def nakele(self):  # 写在类中的函数, 被称为方法
        print(self.name, "帮我去拿可乐")


# 创建对象
p1 = NvPengYou("林志玲", 18, 175, 110)
p2 = NvPengYou("小团团", 19, 160, 120)

p1.nakele()
p2.nakele()

# 对象能做什么事情取决于类中定义了哪些功能
# p1.shantain()
# 在一些特殊的情况下. 你会发现对象有可能会调用不属于自己类中的方法
p1.__str__()  # 在python中所有的类都会默认继承object

# 要么自己有, 要么爹那有
