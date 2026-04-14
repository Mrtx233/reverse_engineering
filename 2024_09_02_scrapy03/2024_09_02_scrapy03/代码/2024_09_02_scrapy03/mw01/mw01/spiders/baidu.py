import scrapy


class BaiduSpider(scrapy.Spider):
    name = "baidu"
    allowed_domains = ["baidu.com"]
    start_urls = ["https://www.baidu.com/"]

    def parse(self, resp, **kwargs):
        print("spider", resp.text)
        pass
