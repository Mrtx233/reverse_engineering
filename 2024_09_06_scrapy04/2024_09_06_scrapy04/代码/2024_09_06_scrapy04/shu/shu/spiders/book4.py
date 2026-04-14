import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule


# 继承了CrawlSpider, CrawlSpider继承了scrapy.Spider. 咱们这里面还是以前的逻辑
class Book4Spider(CrawlSpider):
    name = "book4"
    allowed_domains = ["shicimingju.com"]
    start_urls = ["https://www.shicimingju.com/cate?cate_id=5"]

    # 规则
    # start_url响应回来的东西. 会自动的去匹配里面的规则.
    # 按照规

    """
    def parse(self, resp):
        lk = LinkExtractor(allow=r"Items/")
        links = lk.extract_links(resp)
        for link in links:
            yield scrapy.Request(url=link.url, callback=self.parse_detail)
    """

    rules = (
        # 通过连接提取器, 提取出来的连接, 会自动的发送请求出去.
        # 连接返回后, 回调函数是 callback 对应的方法名称
        # 相当于帮你写了一层parse
        # 自动拿到详情页的连接. 并发送请求
        Rule(LinkExtractor(restrict_xpaths=("//div[@class='shici_list_main']",)), callback="parse_detail"),
    )

    def parse_detail(self, response):
        print("哈哈")
        # 详情页的内容解析
        shangxi_content = response.xpath("//div[@class='shangxi_content']/text()").extract()
        print(shangxi_content)

        java写个后端,   python, requests模块访问这个后端.