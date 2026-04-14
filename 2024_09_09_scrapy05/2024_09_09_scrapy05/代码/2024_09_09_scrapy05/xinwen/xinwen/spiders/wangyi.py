import scrapy
import re
import json
import redis  # 用它来去除重复, 记录访问过的url


class WangyiSpider(scrapy.Spider):
    name = "wangyi"
    allowed_domains = ["163.com"]
    start_urls = ["https://news.163.com/special/cm_guoji/?callback=data_callback"]

    code_re_obj = re.compile(r"data_callback\((?P<code>.*)\)", re.S)

    conn = redis.Redis(host="127.0.0.1", port=6379, password="123456", db=4, decode_responses=True)

    def parse(self, resp, **kwargs):
        # 执行后续操作之前. 一定要先确认好. 你收到的东西对不对.
        # print(resp.text)
        # scrapy获取json格式的数据. 可以直接resp.json(), 直接拿到字典
        # json.decoder.JSONDecodeError: Expecting value: line 1 column 1 (char 0)
        # 典型的. 你拿到的数据不是json
        # print(resp.json())

        code = WangyiSpider.code_re_obj.search(resp.text).group("code")
        news = json.loads(code)
        for new in news:
            # print(new.get("tlink"))
            # print(new['tlink'])
            # print(new['title'])
            # 我要采集新闻的内容
            # 发请求. 获取到详情页中的内容

            # 需要判断该url是否已经被访问过了.
            # 必须得知道我访问过什么 需要把已经访问过的东西记录下来.
            tlink = new['tlink']
            if self.conn.sismember("news:wangyi", tlink):
                print("已经访问过了. ")
            else:
                yield scrapy.Request(url=new['tlink'], callback=self.parse_detail)

            # 用url进行控制是否访问过了   # 77777 9999
            # 如果是post请求呢?
            # http://www.baidu.com/a/b  formdata: id=10086  => 樵夫11爱你
            # http://www.baidu.com/a/b  formdata: id=10087  => 樵夫12爱你
            # http://www.baidu.com/a/b  formdata: id=10088  => 樵夫2123爱你
            # http://www.baidu.com/a/b  formdata: id=10089  => 樵夫12321爱你

            # 增量爬虫. 但是这个增量爬虫和樵夫讲的不一样了. 樵夫去重复用的是url. 每个详情页的url都是不一样的
            # 增量爬虫的核心逻辑是  去除重复.

        # data_callback([{title: "韩男子性侵)", ....}])
        # 这是典型的jsonp的逻辑
        #  xxxxxx(数据)
        # 可以用正则表达式来完成数据的提取

    def parse_detail(self, resp):
        print(resp.url)
        post_body = resp.xpath("//div[@class='post_body']/p/text()").extract()
        post_title = resp.xpath("//h1[@class='post_title']/text()").extract_first()
        post_body = "".join(post_body).strip()
        print(post_title, post_body)
        # 16个库.
        # news:
        #   wangyi
        #   tengxun
        #   xxxx
        self.conn.sadd("news:wangyi", resp.url)
