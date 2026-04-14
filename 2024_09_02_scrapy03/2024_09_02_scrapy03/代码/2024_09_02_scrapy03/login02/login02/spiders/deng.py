import scrapy


class DengSpider(scrapy.Spider):
    name = "deng"
    allowed_domains = ["woaidu.cc"]
    start_urls = ["http://www.woaidu.cc/bookcase.php"]

    def start_requests(self):
        # 把浏览器上复制过来的字符串, 处理成cookie dict
        cookie_str = "Hm_lvt_155d53bb19b3d8127ebcd71ae20d55b1=1725279007; HMACCOUNT=BF2A5C3C6885D21B; username=User; t=727276623566d5ab65cfc10; Hm_lpvt_155d53bb19b3d8127ebcd71ae20d55b1=1725279190"
        cookie_dict = {}
        for item in cookie_str.split("; "):
            k, v = item.split("=")
            cookie_dict[k] = v

        yield scrapy.Request(
            url=DengSpider.start_urls[0],
            # 发请求的时候, 把cookie带上
            cookies=cookie_dict,
            # headers={
            #     "cookie"  # 这个是没有意义的
            # }
        )

    def parse(self, response):
        print(response.text)
        # 如果后续的请求中, 自动携带上述cookie. scrapy就和session一样了.
        # cookies的中间件是否起作用.
        # 在发一个请求. 看看能不能保持cookie的装填
        yield scrapy.Request("http://www.woaidu.cc/bookcase.php",
                             dont_filter=True,
                             callback=self.chi)

    def chi(self, resp):
        print(resp.text)  # 看看有没有正确的结果
