# Scrapy settings for che project
#
# For simplicity, this file contains only settings considered important or
# commonly used. You can find more settings consulting the documentation:
#
#     https://docs.scrapy.org/en/latest/topics/settings.html
#     https://docs.scrapy.org/en/latest/topics/downloader-middleware.html
#     https://docs.scrapy.org/en/latest/topics/spider-middleware.html

BOT_NAME = "che"

SPIDER_MODULES = ["che.spiders"]
NEWSPIDER_MODULE = "che.spiders"


# Crawl responsibly by identifying yourself (and your website) on the user-agent
#USER_AGENT = "che (+http://www.yourdomain.com)"

# Obey robots.txt rules
ROBOTSTXT_OBEY = False
LOG_LEVEL = "WARNING"

# Configure maximum concurrent requests performed by Scrapy (default: 16)
#CONCURRENT_REQUESTS = 32

# Configure a delay for requests for the same website (default: 0)
# See https://docs.scrapy.org/en/latest/topics/settings.html#download-delay
# See also autothrottle settings and docs

# 访问速度太快. 容易出滑块. 这里直接降低访问频率
# 访问的时间间隔
# 如果出滑块了. 临时应对的办法: 用浏览器打开.页面, 手工过掉滑块, 重新复制一份cookie. 可以临时使用一下
# 不影响咱们学习scrapy
DOWNLOAD_DELAY = 3
# The download delay setting will honor only one of:
#CONCURRENT_REQUESTS_PER_DOMAIN = 16
#CONCURRENT_REQUESTS_PER_IP = 16

# Disable cookies (enabled by default)
# 为了下面的cookie能生效
COOKIES_ENABLED = False

# Disable Telnet Console (enabled by default)
#TELNETCONSOLE_ENABLED = False

# Override the default request headers:
DEFAULT_REQUEST_HEADERS = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "cookie": "fvlid=1716458604075AU1zWGd5kDp9; sessionid=20f5e708-1a28-4787-ad6e-4236c4db2118; che_sessionid=58CF9E8D-9877-4F42-8A12-6AE0D52F95FD%7C%7C2024-05-23+18%3A03%3A24.561%7C%7Cwww.autohome.com.cn; UsedCarBrowseHistory=0%3A47354093; href=https%3A%2F%2Fwww.che168.com%2F; accessId=7a783820-ec84-11ec-b95f-79694d4df285; pageViewNum=1; area=119999; Hm_lvt_d381ec2f88158113b9b76f14c497ed48=1724676865,1725015038,1725621637; HMACCOUNT=0426BA43E4FD28B1; userarea=0; listuserarea=0; sessionip=123.125.53.102; ahpvno=7; Hm_lpvt_d381ec2f88158113b9b76f14c497ed48=1725630775; ahuuid=3016D6BE-E855-42E3-B9DA-C5C59288E270; sessionvisit=5f712ac5-36ed-4af9-b2d5-b629fbac123a; sessionvisitInfo=20f5e708-1a28-4787-ad6e-4236c4db2118|www.che168.com|105575; v_no=17; visit_info_ad=58CF9E8D-9877-4F42-8A12-6AE0D52F95FD||770DE0CE-30B8-4AEC-A464-94C767498A4C||-1||-1||17; che_ref=www.autohome.com.cn%7C0%7C100533%7C0%7C2024-09-06+21%3A52%3A55.600%7C2024-05-23+18%3A03%3A24.561; che_sessionvid=770DE0CE-30B8-4AEC-A464-94C767498A4C; showNum=16; sessionuid=20f5e708-1a28-4787-ad6e-4236c4db2118",
    "dnt": "1",
    "pragma": "no-cache",
    "priority": "u=0, i",
    "referer": "https://www.che168.com/",
    "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
}

# Enable or disable spider middlewares
# See https://docs.scrapy.org/en/latest/topics/spider-middleware.html
#SPIDER_MIDDLEWARES = {
#    "che.middlewares.CheSpiderMiddleware": 543,
#}

# Enable or disable downloader middlewares
# See https://docs.scrapy.org/en/latest/topics/downloader-middleware.html
#DOWNLOADER_MIDDLEWARES = {
#    "che.middlewares.CheDownloaderMiddleware": 543,
#}

# Enable or disable extensions
# See https://docs.scrapy.org/en/latest/topics/extensions.html
#EXTENSIONS = {
#    "scrapy.extensions.telnet.TelnetConsole": None,
#}

# Configure item pipelines
# See https://docs.scrapy.org/en/latest/topics/item-pipeline.html
#ITEM_PIPELINES = {
#    "che.pipelines.ChePipeline": 300,
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
