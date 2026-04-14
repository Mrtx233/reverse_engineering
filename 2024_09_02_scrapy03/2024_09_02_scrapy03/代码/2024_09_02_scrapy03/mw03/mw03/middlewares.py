# Define here the models for your spider middleware
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/spider-middleware.html

from scrapy import signals

# useful for handling different item types with a single interface
from itemadapter import is_item, ItemAdapter
import random


class Mw03SpiderMiddleware:
    # Not all methods need to be defined. If a method is not defined,
    # scrapy acts as if the spider middleware does not modify the
    # passed objects.

    @classmethod
    def from_crawler(cls, crawler):
        # This method is used by Scrapy to create your spiders.
        s = cls()
        crawler.signals.connect(s.spider_opened, signal=signals.spider_opened)
        return s

    def process_spider_input(self, response, spider):
        # Called for each response that goes through the spider
        # middleware and into the spider.

        # Should return None or raise an exception.
        return None

    def process_spider_output(self, response, result, spider):
        # Called with the results returned from the Spider, after
        # it has processed the response.

        # Must return an iterable of Request, or item objects.
        for i in result:
            yield i

    def process_spider_exception(self, response, exception, spider):
        # Called when a spider or process_spider_input() method
        # (from other spider middleware) raises an exception.

        # Should return either None or an iterable of Request or item objects.
        pass

    def process_start_requests(self, start_requests, spider):
        # Called with the start requests of the spider, and works
        # similarly to the process_spider_output() method, except
        # that it doesn’t have a response associated.

        # Must return only requests (not items).
        for r in start_requests:
            yield r

    def spider_opened(self, spider):
        spider.logger.info("Spider opened: %s" % spider.name)


class Mw03DownloaderMiddleware:
    # Not all methods need to be defined. If a method is not defined,
    # scrapy acts as if the downloader middleware does not modify the
    # passed objects.

    @classmethod
    def from_crawler(cls, crawler):
        # This method is used by Scrapy to create your spiders.
        s = cls()
        crawler.signals.connect(s.spider_opened, signal=signals.spider_opened)
        return s

    def process_request(self, request, spider):
        # # 免费的, 难用的一P, 植入代理
        # proxy_list = [
        #     "http://47.108.159.113:8008/",
        #     "http://127.55.66.64:7001/",
        # ]
        # ip = random.choice(proxy_list)
        # print("本次选择的ip是", ip)
        # request.meta['proxy'] = ip
        # 付费的IP
        # 用户名密码认证
        # 快代理的隧道代理. 使用方案
        username = "t12528947886484"
        password = "scej2xr6"
        request.meta['proxy'] = "http://%(user)s:%(pwd)s@%(proxy)s/" % {"user": username, "pwd": password, "proxy": "i618.kdltps.com:15818"}

        request.headers["Connection"] = "close"
        print("来一个")
        return None

    def process_response(self, request, response, spider):
        # 当返回的东西不对. 或者干脆报错. 应该换个ip继续
        if response.status != 200:
            request.dont_filter = True  # 不需要过滤了.
            return request
        return response

    def process_exception(self, request, exception, spider):
        print("出错了!")
        # 重新走一遍
        request.dont_filter=True
        return request


    def spider_opened(self, spider):
        spider.logger.info("Spider opened: %s" % spider.name)

