class Person:
    # 直接被定义在类中的变量
    # 官方的解释叫: 类变量
    # 本质:  当你把类当成对象来看待.
    # 类变量, 本质就是类的属性
    country = "中国"
    def __init__(self, name):
        self.name = name

    def chi(self):
        print(self.name, self.country, "爱吃东西")


# # python是纯面向对象的编程语言, 万事万物皆为对象
# p1 = Person("樵夫")
# p1.chi()

# # 升华一下, 类创建出来的对象是对象
# # 类本身也是一个对象
# print(p1.name)
# # 类的属性
# print(Person.country)

# # 类变量的特殊性:
# # 1. 用对象可以直接访问
# print(p1.country)
# # # 2. 对象是改不了它的
# # p1.country = "俄罗斯"
# # print(Person.country)
# # print(p1.country)
#
# Person.country = "老美"
# print(p1.country)

# 这种特殊的值. 在其他编程语言里. 被称为静态属性
# 通常都是用类来访问

# 这种被当前类的对象. 可以随意访问的东西.
# 作用: 共享呀.
