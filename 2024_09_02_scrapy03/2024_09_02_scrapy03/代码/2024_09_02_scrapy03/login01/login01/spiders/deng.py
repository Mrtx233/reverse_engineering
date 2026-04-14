import scrapy


class DengSpider(scrapy.Spider):
    name = "deng"
    allowed_domains = ["woaidu.cc"]
    start_urls = ["http://www.woaidu.cc/bookcase.php"]

    def parse(self, resp, **kwargs):
        print(resp.text)
        print(resp.request.headers)
