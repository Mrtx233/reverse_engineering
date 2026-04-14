import requests
import scrapy
# 导入响应模块
from scrapy.http.response.html import HtmlResponse
# from urllib.parse import urljoin


class BookSpiderSpider(scrapy.Spider):
    name = "book_spider"
    allowed_domains = ["shicimingju.com"]
    # # 启动的url
    # start_urls = ["https://www.shicimingju.com/book/hongloumeng.html"]

    def start_requests(self):
        # for url in self.start_urls:
        #     # 所有的你想发请求的地方, 返回请求对象即可
        #     yield scrapy.Request(url=url, dont_filter=True, callback=self.parse)
        yield scrapy.Request(  # 7777 999
            url="https://www.shicimingju.com/book/hongloumeng.html"
        )
        
    # 加入代码提示  resp: HtmlResponse
    def parse(self, resp: HtmlResponse, **kwargs):  # pycharm给的一个警告, 提示你, 你当前代码的写法和父类的不一样.
        # # 解析页面结构, 拿到详情页的url
        # li_list = resp.xpath("//div[@class='book-mulu']/ul/li")
        # for li in li_list:
        #     href = li.xpath("./a/@href").extract_first()
        #     # print(href)
        #     # 你应该和这玩意拼接,而不是起始url
        #     # resp.url
        #     # 拼接url
        #     # urljoin(BookSpiderSpider.start_urls[0], href)
        #     # new_url = urljoin(resp.url, href)
        #
        #     # scrapy的拼接url的方式
        #     new_url = resp.urljoin(href)
        #     # print(new_url)
        #     # 发请求了
        #     # scrapy中想要发请求. 只需要给引擎传递一个`请求对象`就完了.
        #     # 其他的你都不用管
        #     yield scrapy.Request(
        #         url=new_url,
        #         # 回调:  去干一个事儿, 回来之后, 干什么.....7777 999
        #         callback=self.parse_detail  # 当这个url被请求之后, 回来了响应对象, 你要拿着这个响应对象干什么?
        #     )
        #     # break # 樵夫为了测试, 怼上去

        # scrapy里面有个调度器, 调度器里面的有去重复的逻辑的.
        # set()
        # 验证一个问题: 重复的url是发不出去的
        # yield scrapy.Request(
        #     url="https://www.shicimingju.com/book/hongloumeng/116.html",
        #     dont_filter=True,  # 不过滤  不去重, 直接丢到请求队列里
        #     callback=self.parse_detail
        # )
        # yield scrapy.Request(
        #     url="https://www.shicimingju.com/book/hongloumeng/116.html",
        #     dont_filter=True,
        #     callback=self.parse_detail
        # )

        # 关于meta: 记住一个事儿, meta是给程序员用的
        # 最大的作用就是承接上下文

        yield scrapy.Request(
            url="https://www.shicimingju.com/book/hongloumeng/116.html",
            dont_filter=True,  # 不过滤  不去重, 直接丢到请求队列里
            callback=self.parse_detail,
            meta={
                "path": f"book/qiaofu/chi/ixaoshu/honghou/{116}"
            }
        )


    # 为详情页准备一个方法. 做数据解析
    def parse_detail(self, resp: HtmlResponse,**kwargs):
        print("樵夫爱你")
        print(resp.meta['path'])  # 把meta中存储的path取出来
        # # 在这里去写 new_url 解析过程
        # contents = resp.xpath("//div[@class='chapter_content']//text()").extract()
        # content = "".join(contents).strip()
        #
        # yield {
        #     "url":"",
        #     "content":content,
        #     'title': ""
        # }

# class Foo:
#     def chi(self):
#         print("我爱吃鱼")
#
#
# class Bar(Foo):
#     def chi(self):  # 方法的重写, 父类中的方法并不一定满足子类的需求
#         print("执行自己类里面的东西")
#
#
# b = Bar()
# b.chi()  # 先找自己类中的东西, 然后再去找父类中的东西
#
# def func(s: list):  # 我希望,在函数编写的时候. 预先设想一个数据类型
#     pass
#
# func("123456")


"""
引擎里面: 
spider = Spider()
xxx = spider.start_requests()
if type(xxx) == dict:
     pipeline
elif type(xxx) == Request:
    调度器
else:
    报错
"""
