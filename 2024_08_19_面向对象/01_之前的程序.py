import requests


def send_req(url):
    while 1:
        try:
            resp = requests.get()
            return resp
        except Exception as e:
            print(e)


def parse_sth(page_sources):
    return "数据"


def main():
    url ="xxxx"
    # 1. 获取页面源代码
    page_sources = send_req(url)
    # 2. 解析页面源代码
    data = parse_sth(page_sources)
    # 3. 保存数据
    # ....
    # 流水账式的开发逻辑.


if __name__ == '__main__':
    main()

