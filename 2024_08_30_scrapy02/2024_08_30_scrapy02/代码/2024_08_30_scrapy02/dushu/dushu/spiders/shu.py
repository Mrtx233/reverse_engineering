import scrapy


class ShuSpider(scrapy.Spider):

    name = "shu"
    allowed_domains = ["dushu.com"]
    start_urls = ["https://www.dushu.com/book/1188_1.html"]

    def parse(self, resp):
        print(resp.url)  # 分页, 看效果
        book_infos = resp.xpath("//div[@class='book-info']")
        for book_info in book_infos:
            href = book_info.xpath("./h3/a/@href").extract_first()
            new_url = resp.urljoin(href)

            yield scrapy.Request(
                url=new_url,
                callback=self.parse_detail
            )
        # 在这里处理分页?
        # 拿到其他页面的url
        a_list = resp.xpath("//div[@class='pages']/a")
        for a in a_list:
            href = a.xpath("./@href").extract_first()
            fenye_url = resp.urljoin(href)
            # 直接发请求就可以了. 哪怕是重复的url也没问题
            yield scrapy.Request(
                url=fenye_url,
                callback=self.parse   # 分页逻辑中, callback就是他自己
            )

    def parse_detail(self, resp):

        title = resp.xpath("//h1/text()").extract_first()
        price = resp.xpath("//p[@class='price']/span/text()").extract_first()

        yield {
            "title": title,
            "price": price
        }
# 拿回去玩儿: https://www.che168.com/beijing/list/#pvareaid=100945
