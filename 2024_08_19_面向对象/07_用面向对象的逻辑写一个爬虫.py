
"""
目标网站:
    https://movie.douban.com/typerank?type_name=%E7%88%B1%E6%83%85&type=13&interval_id=100:90&action=
目标数据:
    电影数据
"""
import requests

#
# def get_data(page):  # 1 2 3 4
#     url = "https://movie.douban.com/j/chart/top_list"
#     params = {
#         "type": "13",
#         "interval_id": "100:90",
#         "action": "",
#         "start": (page - 1) * 20,  # 20 40 60 80...
#         "limit": "20"
#     }
#
#     session = requests.session()
#     session.headers = {
#         "accept": "*/*",
#         "accept-encoding": "gzip, deflate, br, zstd",
#         "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
#         "cache-control": "no-cache",
#         "cookie": "_vwo_uuid_v2=D3880B2832E1DE94F2A4502388A6A4E8B|e66576862b2f0dabf793c79d46a0290b; douban-fav-remind=1; viewed=\"4828875\"; __utmz=30149280.1698314015.14.4.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __utmz=223695111.1703160048.16.5.utmcsr=douban.com|utmccn=(referral)|utmcmd=referral|utmcct=/; bid=-HJeSGBZHSU; __yadk_uid=WminjqLK6idTP5Xmjyv7wom1JaU8PFDi; _pk_id.100001.4cf6=53b5e927c166163d.1715081880.; ll=\"108288\"; __gads=ID=af178901fae12160:T=1712663043:RT=1715862135:S=ALNI_MYzZ6mtwK7gICaEbskfbzrYc6H0wQ; __gpi=UID=00000de53fef4b9c:T=1712663043:RT=1715862135:S=ALNI_MYGyX8gzJU7sGryLj_Gu_tcGfZDFQ; __eoi=ID=c4f6a35514ed0bbd:T=1712663043:RT=1715862135:S=AA-AfjZpBBf1Co3P0tc0zM3H0bzx; __utma=30149280.362504383.1679923907.1722601079.1723819881.64; __utma=223695111.1024054339.1679923907.1722601079.1723819881.60; _pk_ref.100001.4cf6=%5B%22%22%2C%22%22%2C1724075845%2C%22https%3A%2F%2Fwww.douban.com%2F%22%5D; _pk_ses.100001.4cf6=1; ap_v=0,6.0",
#         "dnt": "1",
#         "pragma": "no-cache",
#         "priority": "u=1, i",
#         "referer": "https://movie.douban.com/typerank?type_name=%E7%88%B1%E6%83%85&type=13&interval_id=100:90&action=",
#         "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
#         "sec-ch-ua-mobile": "?0",
#         "sec-ch-ua-platform": "\"Windows\"",
#         "sec-fetch-dest": "empty",
#         "sec-fetch-mode": "cors",
#         "sec-fetch-site": "same-origin",
#         "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
#         "x-requested-with": "XMLHttpRequest"
#     }
#
#     resp = session.get(url, params=params)
#     print(resp.json())
#
# for i in range(1, 11):
#     get_data(i)


class DouBanSpider:
    def __init__(self, headers):
        # 面向对象对我们普通的爬虫而言, 可以解决全局变量的问题
        # 建立session
        self.session = requests.session()
        self.session.headers = headers
        # 打开文件
        self.f = open("data.csv", mode="w", encoding="utf-8")

    def get_data(self, page):
        url = "https://movie.douban.com/j/chart/top_list"
        params = {
            "type": "13",
            "interval_id": "100:90",
            "action": "",
            "start": (page - 1) * 20,  # 20 40 60 80...
            "limit": "20"
        }

        resp = self.session.get(url, params=params)
        return resp.json()

    def save_data(self, data):
        for item in data:
            title = item['title']
            self.f.write(title)
            self.f.write("\n")

    def start(self, from_page, to_page):
        for i in range(from_page, to_page + 1):
            # 1.拿到数据
            data = self.get_data(i)
            # 2.存储数据
            self.save_data(data)


db_spider = DouBanSpider({
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br, zstd",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
        "cache-control": "no-cache",
        "cookie": "_vwo_uuid_v2=D3880B2832E1DE94F2A4502388A6A4E8B|e66576862b2f0dabf793c79d46a0290b; douban-fav-remind=1; viewed=\"4828875\"; __utmz=30149280.1698314015.14.4.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __utmz=223695111.1703160048.16.5.utmcsr=douban.com|utmccn=(referral)|utmcmd=referral|utmcct=/; bid=-HJeSGBZHSU; __yadk_uid=WminjqLK6idTP5Xmjyv7wom1JaU8PFDi; _pk_id.100001.4cf6=53b5e927c166163d.1715081880.; ll=\"108288\"; __gads=ID=af178901fae12160:T=1712663043:RT=1715862135:S=ALNI_MYzZ6mtwK7gICaEbskfbzrYc6H0wQ; __gpi=UID=00000de53fef4b9c:T=1712663043:RT=1715862135:S=ALNI_MYGyX8gzJU7sGryLj_Gu_tcGfZDFQ; __eoi=ID=c4f6a35514ed0bbd:T=1712663043:RT=1715862135:S=AA-AfjZpBBf1Co3P0tc0zM3H0bzx; __utma=30149280.362504383.1679923907.1722601079.1723819881.64; __utma=223695111.1024054339.1679923907.1722601079.1723819881.60; _pk_ref.100001.4cf6=%5B%22%22%2C%22%22%2C1724075845%2C%22https%3A%2F%2Fwww.douban.com%2F%22%5D; _pk_ses.100001.4cf6=1; ap_v=0,6.0",
        "dnt": "1",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "referer": "https://movie.douban.com/typerank?type_name=%E7%88%B1%E6%83%85&type=13&interval_id=100:90&action=",
        "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest"
    })
db_spider.start(1, 3)
