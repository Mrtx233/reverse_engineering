
class Father:
    def __init__(self):
        # 永远盯着self是谁... 永远不会乱.
        self.name = "呵呵"
    def chi(self):
        print(self.name, "父在吃")


# Son继承了Father,  也就自动的拥有了父类中的方法
class Son(Father):
    def __init__(self, name):  # 初始化子类的时候. 需要同时初始化父类
        super().__init__()  # 子类里调用了父类的__init__()
        self.name = name

    def chi(self):
        print(self.name, "子在吃")
        # super() 表示找到父类
        super().chi()  # 这里执行的是父类中的方法. 但是传递的还是当前self对象


s = Son("哈哈")
s.chi()  # ??? 子在吃

"""
简单的MRO, 方法的查找路径:
先在对象自身的类中去找. 如果能找到就执行. 如果找不到. 就去父类中去找
"""
