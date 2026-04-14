import scrapy

from youxi2.items import Youxi2Item


class BenSpider(scrapy.Spider):
    name = "ben"
    allowed_domains = ["4399.com"]
    start_urls = ["https://www.4399.com/flash/new.htm"]

    def parse(self, resp):
        li_list = resp.xpath("//ul[@class='n-game cf']/li")

        for li in li_list:
            name = li.xpath("./a/b/text()").extract_first()
            lei = li.xpath("./em[1]/a/text()").extract_first()
            tm = li.xpath("./em[2]/text()").extract_first()

            # yield表示, 生成器,
            # python的三大器之一, 装饰器, 迭代器, 生成器
            # python基础里有讲过这玩意.
            # 如果你不想去看, 照着这个逻辑做就可以了
            # 返回数据, 但不终止函数

            # scrapy 内部是协程, 支持, 鼓励你使用yield的,
            # scrapy 对spider返回的东西, 有要求. 你不能瞎写
            # Spider must return request, item, or None,       got 'tuple'
            # Spider 必须  返回  request对象, item对象 或者None, 你给了一个tuple
            # item可以自己去定义, 如果不想自己定义, 可以写字典
            # item = Youxi2Item()
            # item['name'] = name
            # item['lel'] = lei
            # item['tm'] = tm
            #
            # yield item
            # 返回的数据可以是字典
            print("返回数据")
            yield {
                "name": name,
                "lei": lei,
                "tm": tm,
            }

            # 请求对象, 响应对象
            # 中间件
            # 全站抓取
            # 分布式
            # 项目

"""
引擎里面,大概率是这样的(只不过不是我们写的, 人家写好的):
    响应对象 = 发请求(url)
    ret = spider对象.parse(响应对象)
    # 把数据传递给pipline
    if ret是数据:
        process_item(ret)
"""
