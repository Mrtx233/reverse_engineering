# Scrapy settings for youxi project
#
# For simplicity, this file contains only settings considered important or
# commonly used. You can find more settings consulting the documentation:
#
#     https://docs.scrapy.org/en/latest/topics/settings.html
#     https://docs.scrapy.org/en/latest/topics/downloader-middleware.html
#     https://docs.scrapy.org/en/latest/topics/spider-middleware.html

BOT_NAME = "youxi"

SPIDER_MODULES = ["youxi.spiders"]
NEWSPIDER_MODULE = "youxi.spiders"

# 记录日志: debug, info, warning, error,
# Crawl responsibly by identifying yourself (and your website) on the user-agent
#USER_AGENT = "youxi (+http://www.yourdomain.com)"

# Obey robots.txt rules
# 是否遵守robots协议
ROBOTSTXT_OBEY = False
LOG_LEVEL = "WARNING"  # 保留warning及以上的错误信息

# Configure maximum concurrent requests performed by Scrapy (default: 16)
# 同时发请求的数量

# Configure a delay for requests for the same website (default: 0)
# See https://docs.scrapy.org/en/latest/topics/settings.html#download-delay
# See also autothrottle settings and docs
# 下载器延迟: -> time.sleep(3)
DOWNLOAD_DELAY = 3
# The download delay setting will honor only one of:
#CONCURRENT_REQUESTS_PER_DOMAIN = 16
#CONCURRENT_REQUESTS_PER_IP = 16

# Disable cookies (enabled by default)
# 默认有session的功能 -> 自动帮你处理cookie
#COOKIES_ENABLED = False

# Disable Telnet Console (enabled by default)
#TELNETCONSOLE_ENABLED = False

# Override the default request headers:
# 默认的头.
DEFAULT_REQUEST_HEADERS = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "connection": "keep-alive",
    "cookie": "Hm_lvt_680b402851f03f1e833a655cd115c312=1724660544; Hm_lpvt_680b402851f03f1e833a655cd115c312=1724660544; home4399=yes; Hm_lvt_334aca66d28b3b338a76075366b2b9e8=1724660388; HMACCOUNT=0BFAD8D83E97B549; UM_distinctid=1918dc512c21a91-01e52d3362d8bd-26001e51-190140-1918dc512c3175a; _gprp_c=\"\"; USESSIONID=f1f06dd0-b2fe-4477-ac14-65e3e7f696f7; phlogact=l130145; index4399skintip=1; _4399stats_vid=17246616517445557; CNZZDATA30039538=cnzz_eid%3D591701927-1724660389-%26ntime%3D1724673422; Hm_lpvt_334aca66d28b3b338a76075366b2b9e8=1724673422",
    "dnt": "1",
    "host": "www.4399.com",
    "pragma": "no-cache",
    "referer": "https://www.4399.com/flash/new_6.htm",
    "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
}

# Enable or disable spider middlewares
# See https://docs.scrapy.org/en/latest/topics/spider-middleware.html
#SPIDER_MIDDLEWARES = {
#    "youxi.middlewares.YouxiSpiderMiddleware": 543,
#}

# Enable or disable downloader middlewares
# See https://docs.scrapy.org/en/latest/topics/downloader-middleware.html
#DOWNLOADER_MIDDLEWARES = {
#    "youxi.middlewares.YouxiDownloaderMiddleware": 543,
#}

# Enable or disable extensions
# See https://docs.scrapy.org/en/latest/topics/extensions.html
#EXTENSIONS = {
#    "scrapy.extensions.telnet.TelnetConsole": None,
#}

# Configure item pipelines
# See https://docs.scrapy.org/en/latest/topics/item-pipeline.html
#ITEM_PIPELINES = {
#    "youxi.pipelines.YouxiPipeline": 300,
#}

# Enable and configure the AutoThrottle extension (disabled by default)
# See https://docs.scrapy.org/en/latest/topics/autothrottle.html
#AUTOTHROTTLE_ENABLED = True
# The initial download delay
#AUTOTHROTTLE_START_DELAY = 5
# The maximum download delay to be set in case of high latencies
#AUTOTHROTTLE_MAX_DELAY = 60
# The average number of requests Scrapy should be sending in parallel to
# each remote server
#AUTOTHROTTLE_TARGET_CONCURRENCY = 1.0
# Enable showing throttling stats for every response received:
#AUTOTHROTTLE_DEBUG = False

# Enable and configure HTTP caching (disabled by default)
# See https://docs.scrapy.org/en/latest/topics/downloader-middleware.html#httpcache-middleware-settings
#HTTPCACHE_ENABLED = True
#HTTPCACHE_EXPIRATION_SECS = 0
#HTTPCACHE_DIR = "httpcache"
#HTTPCACHE_IGNORE_HTTP_CODES = []
#HTTPCACHE_STORAGE = "scrapy.extensions.httpcache.FilesystemCacheStorage"

# Set settings whose default value is deprecated to a future-proof value
REQUEST_FINGERPRINTER_IMPLEMENTATION = "2.7"
TWISTED_REACTOR = "twisted.internet.asyncioreactor.AsyncioSelectorReactor"
FEED_EXPORT_ENCODING = "utf-8"
