import scrapy


class ProxyTestSpider(scrapy.Spider):
    name = "proxy_test"
    allowed_domains = ["ipify.org"]
    start_urls = ["http://api.ipify.org/"]

    def parse(self, resp, **kwargs):
        print(resp.text)
        # 樵夫: 120.244.62.13
        #      125.113.53.100
        #      116.208.193.246
        #      39.184.78.255
        pass
