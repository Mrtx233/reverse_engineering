import scrapy
from scrapy.linkextractors import LinkExtractor


class Book3Spider(scrapy.Spider):
    name = "book3"
    allowed_domains = ["shicimingju.com"]
    start_urls = ["https://shicimingju.com"]

    def parse(self, resp):
        # 不要运行. 太过分了.
        # 搜索引擎的逻辑:
        html_url = resp.url
        html_content = resp.text
        html_text = "".join(resp.xpath("//body//text()").extract())

        # 提取目标数据
        title = resp.xpath("//h1[@id='zs_title']/text()").extract_first()
        zuo = resp.xpath("//div[@class='niandai_zuozhe']//text()").extract()
        content = resp.xpath("//div[@class='item_content']//text()").extract()
        if title and zuo and content:
            yield {}

        tiquqi = LinkExtractor()
        links = tiquqi.extract_links(resp)
        for link in links:
            link_url = link.url
            print("==>",link_url)
            yield scrapy.Request(link_url, callback=self.parse)
