from scrapy.cmdline import execute

if __name__ == '__main__':
    # ["scrapy", "crawl", "qiaofu_youxi"]
    execute("scrapy crawl qiaofu_youxi".split())

# 这一段代码, 可以植入到scrapy的源码中.
# 下次生成项目的时候, 自动给我加上.
