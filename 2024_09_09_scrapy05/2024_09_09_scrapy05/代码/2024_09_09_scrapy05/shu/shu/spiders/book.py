import scrapy

from scrapy_redis.spiders import RedisSpider
"""
1. 启动的url要更换成redis_key
2. spider要继承RedisSpider
3. 把调度器, 过滤器, 更换即可
"""
class BookSpider(RedisSpider):
    name = "book"
    allowed_domains = ["shicimingju.com"]

    # start_urls = ["https://www.shicimingju.com/book/"]
    # 启动的url的key, redis中启动的url必须要放在 列表中
    # scrapy启动之后. redis_key会被清理
    redis_key = "book_start_urls"  # 未来是redis列表中的key

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
