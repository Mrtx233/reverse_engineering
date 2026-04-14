import scrapy
# 连接提取器
from scrapy.linkextractors import LinkExtractor


class Book2Spider(scrapy.Spider):
    name = "book2"
    allowed_domains = ["shicimingju.com"]
    start_urls = ["https://www.shicimingju.com/book/"]

    def parse(self, resp, **kwargs):
        # 提取详情页的url
        tiquqi = LinkExtractor(restrict_xpaths=("//div[@class='card booknark_card']/ul/li",))
        # 提取页面上的连接
        # 直接给响应对象就完了   777 999
        links = tiquqi.extract_links(resp)
        for link in links:
            # 拿到连接和文本
            # print(link.url, link.text)
            yield scrapy.Request(url=link.url, callback=self.parse_title)

    def parse_title(self, resp):
        title = resp.xpath("//h1/text()").extract_first()
        tiquqi = LinkExtractor(restrict_xpaths=("//div[@class='book-mulu']/ul/li",))
        links = tiquqi.extract_links(resp)
        for link in links:
            yield scrapy.Request(url=link.url, callback=self.parse_detail, meta={
                "book-name": title
            })

    def parse_detail(self, resp):
        book_name = resp.meta['book-name']
        title = resp.xpath("//h1/text()").extract_first()
        content = "".join(resp.xpath("//div[@class='chapter_content']//text()").extract())
        yield {
            "book_name": book_name,
            "title": title,
            "content": content
        }
