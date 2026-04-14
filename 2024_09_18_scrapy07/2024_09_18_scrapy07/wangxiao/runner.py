from scrapy.cmdline import execute

if __name__ == '__main__':
    # 一定要降低访问频率.
    # DOWNLOAD_DELAY = 2
    execute("scrapy crawl ks".split())
