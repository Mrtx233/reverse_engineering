class NvPengYou:
    # self就是执行该方法的对象. 哪个对象执行的这个方法.  self就是谁
    # 它是动态变化的.
    def nakele(self):  # 方法的第一个参数, 是对象本身
        print(id(self))  # 2380120649680
        print("我是乖乖的女朋友, 帮你拿可乐去")

    def chi(self):
        print("女朋友喂我吃东西")


p880 = NvPengYou()
p880.nakele()  # nakele(p880)

# 2380120649680
print(id(p880))

p1 = NvPengYou()
# # 在面向对象的世界里. 对象执行某一个方法的时候. 会自动的把该对象作为第一个参数传递给方法
p1.nakele()

# # python的函数, 要求. 在执行的时候. 必须保证所有的参数必须有值...
# def chi(self):
#     pass
#
# chi()
