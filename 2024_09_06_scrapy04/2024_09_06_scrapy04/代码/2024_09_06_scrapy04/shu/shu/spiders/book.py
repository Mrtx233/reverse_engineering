import scrapy


class BookSpider(scrapy.Spider):
    name = "book"
    allowed_domains = ["shicimingju.com"]
    start_urls = ["https://www.shicimingju.com/book/"]

    def parse(self, resp, **kwargs):
        # 起始页面的返回
        a_list = resp.xpath("//div[@class='card booknark_card']/ul/li/a")
        for a in a_list:
            href = a.xpath("./@href").extract_first()
            text = a.xpath("./text()").extract_first()

            href = resp.urljoin(href)   # 77777 99999
            # print(text, href)
            yield scrapy.Request(url=href, callback=self.parse_title)


    def parse_title(self, resp):
        title = resp.xpath("//h1/text()").extract_first()
        a_list = resp.xpath("//div[@class='book-mulu']/ul/li/a")
        for a in a_list:
            href = a.xpath("./@href").extract_first()
            text = a.xpath("./text()").extract_first()
            # print(title, text, href)
            href = resp.urljoin(href)

            yield scrapy.Request(url=href, callback=self.parse_detail, meta={
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
