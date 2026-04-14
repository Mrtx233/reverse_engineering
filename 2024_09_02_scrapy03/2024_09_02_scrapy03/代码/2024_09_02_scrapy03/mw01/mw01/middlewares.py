# Define here the models for your spider middleware
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/spider-middleware.html


from scrapy.http.response.html import HtmlResponse

from scrapy import signals

# useful for handling different item types with a single interface
from itemadapter import is_item, ItemAdapter

# 爬虫中间件  spider和引擎之间的
class Mw01SpiderMiddleware:
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
        # 记录一下错误信息. 记录日志.
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

# 下载器中间件  下载器和引擎之间的
# 所有的中间件, 必须在settings里面注册上才可以
class Mw01DownloaderMiddleware:
    @classmethod
    def from_crawler(cls, crawler):
        # This method is used by Scrapy to create your spiders.
        s = cls()
        crawler.signals.connect(s.spider_opened, signal=signals.spider_opened)
        return s

    def process_request(self, request, spider):
        # 请求, 从引擎, 到下载器的过程中,要执行该方法
        # Called for each request that goes through the downloader
        # 返回值:
        # - return None: 不做拦截. 继续向后走
        # - or return a Response object, 返回一个响应对象,直接返回给引擎一个响应对象.
        # - or return a Request object, 返回一个请求对象, 直接返回给引擎一个请求对象
        print("处理请求的, 在这里, 可以对请求进行没有限制的修改", request.url)
        return None

    def process_response(self, request, response, spider):
        # 响应对象从下载器返回给引擎的时候, 自动调用.
        # - return a Response object, 返回响应对象, 不做拦截, 往回继续走
        # - return a Request object, 返回请求对象, 该请求需要重新来过
        html = HtmlResponse(url="http://qiaofu.com", body=b'123456789')
        print("处理响应的. 在这里, 可以对响应内容,进行修改")
        return html

    def spider_opened(self, spider):
        spider.logger.info("Spider opened: %s" % spider.name)
