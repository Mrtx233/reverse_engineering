from scrapy.cmdline import execute
import time

if __name__ == '__main__':
    # while 1:
    #     execute("scrapy crawl wangyi".split())
    #     time.sleep(60*60)  # 一个小时
    # 反复采集

    execute("scrapy crawl wangyi".split())
