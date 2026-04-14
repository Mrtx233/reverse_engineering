import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule


class Che168Spider(CrawlSpider):
    name = "che168"
    allowed_domains = ["che168.com"]
    start_urls = ["https://www.che168.com/china/list/#pvareaid=105575"]

    # 页面上可能会出现的所有标签. 全部记录在案, 做关系映射
    temp = {
        "表显里程": "li_cheng",
        "上牌时间": "start_time",
        "挡位/排量": "pai_liang",
        "车辆所在地": "location",
        "查看限迁地": "guo_biao",
    }

    rules = (
        # 一步到位, 直接干到各个详情页
        #                                                                          干掉广告的域名
        Rule(LinkExtractor(restrict_xpaths=("//ul[@class='viewlist_ul']/li",), deny_domains=("topicm.che168.com", )), callback="parse_item"),
        # 分页的连接处理
        # 提取出来的所有连接. ,               callback=self.parse
        # follow, 当前提取器, 提取到的连接, 发送请求之后. 回来了. 提取新的连接. 是否自动的适配所有的rules
        Rule(LinkExtractor(restrict_xpaths=("//div[@id='listpagination']",)), follow=True)
    )

    def parse_item(self, resp):
        print(resp.url)
        """
        负责, 详情页的解析
        """
        name = resp.xpath("//h3[@class='car-brand-name']/text()").extract_first()
        li_list = resp.xpath("//ul[@class='brand-unit-item fn-clear']/li")

        # 为了保证数据格式的完整. 提前初始化
        item = {
            "li_cheng": "未知",
            "start_time": "未知",
            "pai_liang": "未知",
            "location": "未知",
            "guo_biao": "未知",
        }

        for li in li_list:
            sm_title = "".join(li.xpath("./p//text()").extract()).replace(" ", "")  # 上牌时间, 挡位 / 排量
            sm_value = li.xpath("./h4/text()").extract_first().replace(" ", "")

            key = Che168Spider.temp.get(sm_title)  # 动态的进行匹配.
            item[key] = sm_value

        print(item)
        # # 找到有问题的那一个
        # if item['li_cheng'] =='未知':
        #     print(resp.url)
