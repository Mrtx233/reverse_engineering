
def func():
    yield 1
    yield 2

mm = func()

for n in mm:
    print(n)