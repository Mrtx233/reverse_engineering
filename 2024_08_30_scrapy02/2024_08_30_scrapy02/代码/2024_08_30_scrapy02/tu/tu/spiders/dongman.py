import scrapy
import re
import json
from scrapy.http.response import Response


class DongmanSpider(scrapy.Spider):
    name = "dongman"
    allowed_domains = ["zol.com.cn", "zol-img.com.cn"]
    start_urls = ["https://desk.zol.com.cn/dongman/"]

    obj = re.compile(r"var deskPicArr 		= (?P<code>.*?);", re.S)

    def parse(self, resp):
        li_list = resp.xpath("//li[@class='photo-list-padding']")
        for li in li_list:
            href: str = li.xpath("./a/@href").extract_first()
            if href.endswith(".exe"):   # 干掉exe, 它不是详情页的url
                continue
            new_url = resp.urljoin(href)
            yield scrapy.Request(
                url=new_url,
                callback=self.parse_detail
            )
        # 分页...

    def parse_detail(self, resp):

        # 详情页的处理逻辑:
        # 拿到图片的下载地址就可以了
        # 正常的处理逻辑
        # src = resp.xpath("//img[@id='bigImg']/@src").extract_first()

        # 樵夫的非正常逻辑
        # 我要把图集全拿下来
        # print(resp.text)
        title = resp.xpath("//title/text()").extract_first().split("-")[0]
        code = DongmanSpider.obj.search(resp.text).group("code")
        dic = json.loads(code)
        for item in dic['list']:
            # print(item)
            fenbian = item['resAll'][0]
            img_src = item['imgsrc']
            img_src = img_src.replace("##SIZE##", fenbian+"c5")
            # 进入下载环节
            # print(img_src)

            yield {
                "img_src": img_src,
                "title": title,
                "referer": resp.url
            }
            # print("哈哈", img_src)
            # yield scrapy.Request(
            #     url=img_src,
            #     headers={
            #         "referer": "https://desk.zol.com.cn/bizhi/9109_111583_2.html"
            #     },
            #     callback=self.hahaha
            # )

    # def hahaha(self, resp: Response):
    #     print("哈哈")
    #     print(resp.body)
