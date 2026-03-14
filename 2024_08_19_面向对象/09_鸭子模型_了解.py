class Person:
    def guaguajiao(self):
        print("人可以呱呱叫")


class FeiJi:
    def guaguajiao(self):
        print("飞机也可以呱呱叫")


def ganhuo(d):  # 这里只要传递过来一个符合要求的对象就可以
    # 这里不管你传递的是什么. 只要会呱呱叫.
    # 就可以正常执行. 就可以认为是鸭子
    d.guaguajiao()


ganhuo(Person())
ganhuo(FeiJi())
