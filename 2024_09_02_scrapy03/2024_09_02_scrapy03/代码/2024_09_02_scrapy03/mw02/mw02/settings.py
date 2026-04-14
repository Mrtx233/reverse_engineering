# Scrapy settings for mw02 project
#
# For simplicity, this file contains only settings considered important or
# commonly used. You can find more settings consulting the documentation:
#
#     https://docs.scrapy.org/en/latest/topics/settings.html
#     https://docs.scrapy.org/en/latest/topics/downloader-middleware.html
#     https://docs.scrapy.org/en/latest/topics/spider-middleware.html

BOT_NAME = "mw02"

SPIDER_MODULES = ["mw02.spiders"]
NEWSPIDER_MODULE = "mw02.spiders"


# Crawl responsibly by identifying yourself (and your website) on the user-agent
#USER_AGENT = "mw02 (+http://www.yourdomain.com)"

# Obey robots.txt rules
ROBOTSTXT_OBEY = False
LOG_LEVEL = "WARNING"

# Configure maximum concurrent requests performed by Scrapy (default: 16)
#CONCURRENT_REQUESTS = 32

# Configure a delay for requests for the same website (default: 0)
# See https://docs.scrapy.org/en/latest/topics/settings.html#download-delay
# See also autothrottle settings and docs
#DOWNLOAD_DELAY = 3
# The download delay setting will honor only one of:
#CONCURRENT_REQUESTS_PER_DOMAIN = 16
#CONCURRENT_REQUESTS_PER_IP = 16

# Disable cookies (enabled by default)
#COOKIES_ENABLED = False

# Disable Telnet Console (enabled by default)
#TELNETCONSOLE_ENABLED = False

# Override the default request headers:
DEFAULT_REQUEST_HEADERS = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "connection": "keep-alive",
    "cookie": "BD_UPN=12314753; sug=3; sugstore=1; ORIGIN=0; bdime=0; PSTM=1725285243; BAIDUID=0929D0A16B3C362DEEC68AFCE1561BAC:FG=1; BD_HOME=1; BAIDUID_BFESS=0929D0A16B3C362DEEC68AFCE1561BAC:FG=1; BA_HECTOR=2kal21a525850la10h012g241m6c4g1jdbgrs1u; BIDUPSID=D30AC2F8891EE39AC329B9E66FA37B7F; ZFY=QgFQcwHINe6abVzqkO0nu531hioamZvoEFooRTmWoc4:C",
    "dnt": "1",
    "host": "www.baidu.com",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "haha"
}

# Enable or disable spider middlewares
# See https://docs.scrapy.org/en/latest/topics/spider-middleware.html
#SPIDER_MIDDLEWARES = {
#    "mw02.middlewares.Mw02SpiderMiddleware": 543,
#}

# Enable or disable downloader middlewares
# See https://docs.scrapy.org/en/latest/topics/downloader-middleware.html
# 默认的中间件设置:
# DOWNLOADER_MIDDLEWARES_BASE = {
#     # Engine side
#     "scrapy.downloadermiddlewares.offsite.OffsiteMiddleware": 50,
#     "scrapy.downloadermiddlewares.robotstxt.RobotsTxtMiddleware": 100,
#     "scrapy.downloadermiddlewares.httpauth.HttpAuthMiddleware": 300,
#     "scrapy.downloadermiddlewares.downloadtimeout.DownloadTimeoutMiddleware": 350,
#     "scrapy.downloadermiddlewares.defaultheaders.DefaultHeadersMiddleware": 400,
#     "scrapy.downloadermiddlewares.useragent.UserAgentMiddleware": 500,
#     "scrapy.downloadermiddlewares.retry.RetryMiddleware": 550,
#     "scrapy.downloadermiddlewares.ajaxcrawl.AjaxCrawlMiddleware": 560,
#     "scrapy.downloadermiddlewares.redirect.MetaRefreshMiddleware": 580,
#     "scrapy.downloadermiddlewares.httpcompression.HttpCompressionMiddleware": 590,
#     "scrapy.downloadermiddlewares.redirect.RedirectMiddleware": 600,
#     "scrapy.downloadermiddlewares.cookies.CookiesMiddleware": 700,
#     "scrapy.downloadermiddlewares.httpproxy.HttpProxyMiddleware": 750,
#     "scrapy.downloadermiddlewares.stats.DownloaderStats": 850,
#     "scrapy.downloadermiddlewares.httpcache.HttpCacheMiddleware": 900,
#     # Downloader side
# }
DOWNLOADER_MIDDLEWARES = {
    # 优先级, 数字越小, 执行的顺序越靠前.
   "mw02.middlewares.Mw02DownloaderMiddleware": 100,
}

# Enable or disable extensions
# See https://docs.scrapy.org/en/latest/topics/extensions.html
#EXTENSIONS = {
#    "scrapy.extensions.telnet.TelnetConsole": None,
#}

# Configure item pipelines
# See https://docs.scrapy.org/en/latest/topics/item-pipeline.html
#ITEM_PIPELINES = {
#    "mw02.pipelines.Mw02Pipeline": 300,
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
