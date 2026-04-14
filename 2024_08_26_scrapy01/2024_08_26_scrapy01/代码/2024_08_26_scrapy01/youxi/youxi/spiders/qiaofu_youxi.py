import scrapy

# 这个红线, 是pycharm误报. 运行的时候是没问题的.
from youxi.items import YouxiItem

class QiaofuYouxiSpider(scrapy.Spider):
    # scrapy genspider 名字 域名
    name = "qiaofu_youxi"   # 爬虫的名字
    # 允许访问的域名,  允许填写多个
    allowed_domains = ["4399.com"]

    # 启动url -> 手动去改
    start_urls = ["https://www.4399.com/flash/new.htm"]

    # 负责解析响应的
    def parse(self, response):
        # 看看是否能拿到页面源代码
        # print(response.text)
        # 解析页面源代码 -> 内部封装了xpath逻辑. 但是和lxml有一定的不同
        li_list = response.xpath("//ul[@class='n-game cf']/li")
        for li in li_list:
            # extract_first() 相当于  [0]
            # extract() 相当于 取所有  list
            name = li.xpath("./a/b/text()").extract_first()
            cate = li.xpath("./em[1]/a/text()").extract_first()
            tm = li.xpath("./em[2]/text()").extract_first()
            print(name, cate, tm)

    # scrapy 运行的方式:
    # 1. 黑窗口: scrapy crawl spider的名字
    # 2. 写py代码,

    """
    程序员干活的逻辑:
    1. 创建项目
        scrapy startproject 项目
    2. 创建spider
        scrapy genspider spider名字 域名
    3. 编写runner
        from scrapy.cmdline import execute
        if __name__ == '__main__':
            execute("scrapy crawl spider的名字".split())
    4. 修改settings.py
        ROBOTSTXT_OBEY = False  干掉robots
        LOG_LEVEL = "WARNING"   去掉一些无用的日志
        DEFAULT_REQUEST_HEADERS
    
    5. 修改spider.py的代码
        start_urls 手动给
        修改parse, 给出自己的解析思路 
        
    整个scrapy把它能做的事情, 都给你做完了
        你要做的事情:
            启动url,它不可能知道, 
            解析思路, 它不可能知道, 
            保存数据的逻辑, 它不可能知道
            其他的, 都不用你管
            
        scrapy做的事情:
            发请求,
            任务调度
            去重
            cookie, headers, 访问频率, 
            协程.
    """

