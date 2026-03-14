from threading import Thread


class MyThread(Thread):
    def run(self):  # 重写run方法. 固定的
        for i in range(1000):
            print(i)


if __name__ == '__main__':
    t1 = MyThread()
    t2 = MyThread()
    t3 = MyThread()

    t1.start()  # 启动后, 线程会自动的执行run方法
    t2.start()
    t3.start()
