import requests

# 7777 9999


def send_req():  # 它只负责发请求...
    for i in range(10):
        try:
            resp = requests.get("")
            return resp.text
        except Exception as e:
            print('出错了, 重试')


def parse_page(page_source):  # 解析数据
    from lxml import etree
    tree = etree.HTML(page_source)
    tree.xpath()
    # 返回数据集
    return []


def save(data):  # 保存数据
    # 保存数据
    pass


def main():  # 总调度, 负责, 协调各个模块之间的协同工作
    # 1. 发请求, 拿到页面源代码
    page_source = send_req()
    # 2. 解析页面源代码
    data = parse_page(page_source)
    # 3. 保存数据
    save(data)


if __name__ == '__main__':
    main()
























