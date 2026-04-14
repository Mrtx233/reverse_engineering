import scrapy


class ChangeUaSpider(scrapy.Spider):
    name = "change_ua"
    allowed_domains = ["baidu.com"]
    start_urls = ["https://www.baidu.com"]

    def parse(self, resp):
        print(resp.request.headers['User-Agent'])
        print(resp.xpath("//title/text()").extract_first())
