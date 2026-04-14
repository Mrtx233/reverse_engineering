# Scrapy settings for wangxiao project
#
# For simplicity, this file contains only settings considered important or
# commonly used. You can find more settings consulting the documentation:
#
#     https://docs.scrapy.org/en/latest/topics/settings.html
#     https://docs.scrapy.org/en/latest/topics/downloader-middleware.html
#     https://docs.scrapy.org/en/latest/topics/spider-middleware.html

BOT_NAME = "wangxiao"

SPIDER_MODULES = ["wangxiao.spiders"]
NEWSPIDER_MODULE = "wangxiao.spiders"


# Crawl responsibly by identifying yourself (and your website) on the user-agent
#USER_AGENT = "wangxiao (+http://www.yourdomain.com)"

# Obey robots.txt rules
ROBOTSTXT_OBEY = False
LOG_LEVEL = "WARNING"

# Configure maximum concurrent requests performed by Scrapy (default: 16)
#CONCURRENT_REQUESTS = 32

# Configure a delay for requests for the same website (default: 0)
# See https://docs.scrapy.org/en/latest/topics/settings.html#download-delay
# See also autothrottle settings and docs

# 一定要降低访问频率
DOWNLOAD_DELAY = 2

# The download delay setting will honor only one of:
#CONCURRENT_REQUESTS_PER_DOMAIN = 16
#CONCURRENT_REQUESTS_PER_IP = 16

# Disable cookies (enabled by default)
COOKIES_ENABLED = False  # 为了下面的cookie生效

# Disable Telnet Console (enabled by default)
#TELNETCONSOLE_ENABLED = False

# Override the default request headers:
DEFAULT_REQUEST_HEADERS = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "connection": "keep-alive",
    "cookie": "mantis6894=875fb27c8957429f813d28ee1e62cc99@6894; Hm_lvt_fd91d2ffbfa83c234c1cee672a69326c=1726213375; sign=jz2; pc_778682568_exam=fangchan; safedog-flow-item=; register-sign=jz2; autoLogin=true; userInfo=%7B%22userName%22%3A%22pc_778682568%22%2C%22token%22%3A%22b74a1cf2-8d9e-494a-824c-4c8d63e90650%22%2C%22headImg%22%3Anull%2C%22nickName%22%3A%22180****5528%22%2C%22sign%22%3A%22fangchan%22%2C%22isBindingMobile%22%3A%221%22%2C%22isSubPa%22%3A%220%22%2C%22userNameCookies%22%3A%22HoVayluo5F2ZAoRvYnt0jg%3D%3D%22%2C%22passwordCookies%22%3A%22wD0%2FAk7WqhJZu0X5A8MMEw%3D%3D%22%7D; token=b74a1cf2-8d9e-494a-824c-4c8d63e90650; UserCookieName=pc_778682568; OldUsername2=HoVayluo5F2ZAoRvYnt0jg%3D%3D; OldUsername=HoVayluo5F2ZAoRvYnt0jg%3D%3D; OldPassword=wD0%2FAk7WqhJZu0X5A8MMEw%3D%3D; UserCookieName_=pc_778682568; OldUsername2_=HoVayluo5F2ZAoRvYnt0jg%3D%3D; OldUsername_=HoVayluo5F2ZAoRvYnt0jg%3D%3D; OldPassword_=wD0%2FAk7WqhJZu0X5A8MMEw%3D%3D",
    "dnt": "1",
    "host": "ks.wangxiao.cn",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
}

# Enable or disable spider middlewares
# See https://docs.scrapy.org/en/latest/topics/spider-middleware.html
#SPIDER_MIDDLEWARES = {
#    "wangxiao.middlewares.WangxiaoSpiderMiddleware": 543,
#}

# Enable or disable downloader middlewares
# See https://docs.scrapy.org/en/latest/topics/downloader-middleware.html
#DOWNLOADER_MIDDLEWARES = {
#    "wangxiao.middlewares.WangxiaoDownloaderMiddleware": 543,
#}

# Enable or disable extensions
# See https://docs.scrapy.org/en/latest/topics/extensions.html
#EXTENSIONS = {
#    "scrapy.extensions.telnet.TelnetConsole": None,
#}

# Configure item pipelines
# See https://docs.scrapy.org/en/latest/topics/item-pipeline.html
#ITEM_PIPELINES = {
#    "wangxiao.pipelines.WangxiaoPipeline": 300,
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
