# 模拟登录与中间件

响应头返回的set-cookie值. 

用session就可以自动帮你完成cookie管理和携带



## 一. Scrapy处理cookie

​		在requests中我们讲解处理cookie主要有两个方案. 第一个方案. 从浏览器里直接把cookie搞出来. 贴到heades里. 这种方案, 简单粗暴. 第二个方案是走正常的登录流程. 通过session来记录请求过程中的cookie. 那么到了scrapy中如何处理cookie?  其实也是这两个方案. 

​		首先, 我们依然是把目标定好,  还是我们的老朋友, http://www.woaidu.cc/bookcase.php

​		这个url必须要登录后才能访问(用户书架). ==对于该网页而言==, 就必须要用到cookie了. 首先, 创建项目, 建立爬虫. 把该填的地方填上. 

```python
import scrapy
from scrapy import Request, FormRequest


class LoginSpider(scrapy.Spider):
    name = 'login'
    allowed_domains = ['woaidu.cc']
    start_urls = ['http://www.woaidu.cc/bookcase.php']

    def parse(self, response):
        print(response.text)

```

​		此时运行时, 显示的是该用户还未登录. 不论是哪个方案. 在请求到start_urls里面的url之前必须得获取到cookie. 但是默认情况下, scrapy会自动的帮我们完成其实request的创建. 此时, 我们需要自己去组装第一个请求. 这时就需要我们自己的爬虫中重写start_requests()方法. 该方法负责起始request的组装工作. 我们不妨先看看原来的start_requests()是如何工作的. 

```python
# 以下是scrapy源码

def start_requests(self):
    cls = self.__class__
    if not self.start_urls and hasattr(self, 'start_url'):
        raise AttributeError(
            "Crawling could not start: 'start_urls' not found "
            "or empty (but found 'start_url' attribute instead, "
            "did you miss an 's'?)")
    if method_is_overridden(cls, Spider, 'make_requests_from_url'):
        warnings.warn(
            "Spider.make_requests_from_url method is deprecated; it "
            "won't be called in future Scrapy releases. Please "
            "override Spider.start_requests method instead (see %s.%s)." % (
                cls.__module__, cls.__name__
            ),
        )
        for url in self.start_urls:
            yield self.make_requests_from_url(url)
    else:
        for url in self.start_urls:
            # 核心就这么一句话. 组建一个Request对象.我们也可以这么干. 
            yield Request(url, dont_filter=True)
```

自己写个start_requests()看看. 

```python
def start_requests(self):
    print("我是万恶之源")
    yield Request(
        url=LoginSpider.start_urls[0],
        callback=self.parse
    )
```



接下来, 我们去处理cookie

### 1. 方案一, 直接从浏览器复制cookie过来

```python
import scrapy


class DengSpider(scrapy.Spider):
    name = "deng"
    allowed_domains = ["woaidu.cc"]
    start_urls = ["http://www.woaidu.cc/bookcase.php"]

    def start_requests(self):
        cookies = "Hm_lvt_155d53bb19b3d8127ebcd71ae20d55b1=1725014283,1725263893,1725264973; HMACCOUNT=0BFAD8D83E97B549; username=User; t=727289967466d574c47bb09; Hm_lpvt_155d53bb19b3d8127ebcd71ae20d55b1=1725265123"
        cookie_dic = {}
        for cook in cookies.split("; "):
            k,v = cook.split("=")
            cookie_dic[k] = v
        yield scrapy.Request(url=self.start_urls[0], cookies=cookie_dic)

    def parse(self, resp, **kwargs):
        # 检测cookie是否可以延续
        yield scrapy.Request(url=self.start_urls[0], callback=self.chi, dont_filter=True)

    def chi(self, resp):
        # 能看到登陆后的内容. 没问题
        print(resp.text)

```

这种方案和原来的requests几乎一模一样.  需要注意的是: cookie需要通过cookies参数进行传递!



### 2. 方案二, 完成登录过程.

```python
    import scrapy
import ddddocr
from urllib.parse import urlencode


class DengSpider(scrapy.Spider):
    name = "deng"
    allowed_domains = ["woaidu.cc"]
    start_urls = ["http://www.woaidu.cc/bookcase.php"]

    def start_requests(self):
        code_url = "http://www.woaidu.cc/code.php?0.40058681605703095"
        yield scrapy.Request(url=code_url, dont_filter=True, callback=self.code_verify)

    def code_verify(self, resp):
        result = ddddocr.DdddOcr(show_ad=False).classification(resp.body)

        data = {
            "LoginForm[username]": "q6035945",
            "LoginForm[password]": "6035945",
            "LoginForm[captcha]": result,
            "action": "login",
            "submit": "登录"
        }
        print(urlencode(data, encoding="utf-8"))
        yield scrapy.Request(
            url="http://www.woaidu.cc/login.php",
            method="POST",
            body=urlencode(data, encoding="utf-8"),
            callback=self.parse_login,
            headers={
                "Content-Type": "application/x-www-form-urlencoded"
            }
        )
        # 推荐用这种方案, 不用管头, 不用管内容, 直接怼字典
        # yield scrapy.FormRequest(
        #         url="http://www.woaidu.cc/login.php",
        #         method="POST",
        #         formdata=data,
        #         callback=self.parse_login
        # )
    def parse_login(self, resp):
        print(resp.text)
        # 能看到登陆后的内容. 没问题
        yield scrapy.Request(url=self.start_urls[0], callback=self.parse)

    def parse(self, resp,**kwargs):
        print(resp.text)

```

​	注意, 发送post请求有两个方案, 

 1. Scrapy.Request(url=url, method='post', body=数据)

 2. Scarpy.FormRequest(url=url, formdata=数据)  -> 推荐

    

    区别: 方式1的数据只能是字符串. 这个就很难受. 所以推荐用第二种.

    

### 3. 方案三, 在settings文件中给出cookie值.

​	    在settings中.有一个配置项: **DEFAULT_REQUEST_HEADERS**, 在里面可以给出默认的请求头信息. 但是要注意, 需要在settings中把**COOKIES_ENABLED**设置成False. 否则, 在下载器中间件中, 会被干掉. 

```python
COOKIES_ENABLED = False

DEFAULT_REQUEST_HEADERS = {
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'en',
  'Cookie': 'xxxxxx',
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36"
}
```



## 二. Scrapy的中间件

​		中间件的作用: 负责处理引擎和爬虫以及引擎和下载器之间的请求和响应. 主要是可以对request和response做预处理. 为后面的操作做好充足的准备工作. 在python中准备了两种中间件, 分别是下载器中间件和爬虫中间件. 

### 1. DownloaderMiddleware

​	下载中间件, 它是介于引擎和下载器之间,  引擎在获取到request对象后, 会交给下载器去下载, 在这之间我们可以设置下载中间件. 它的执行流程:

​	引擎拿到request -> 中间件1(process_request) -> 中间件2(process_request) .....->         下载器-|
​    引擎拿到request <- 中间件1(process_response) <- 中间件2(process_response) ..... <-   下载器-|

```python
class MidDownloaderMiddleware1:

    def process_request(self, request, spider):
        print("process_request", "ware1")
        return None

    def process_response(self, request, response, spider):
        print("process_response", "ware1")
        return response

    def process_exception(self, request, exception, spider):
        print("process_exception", "ware1")
        pass


class MidDownloaderMiddleware2:

    def process_request(self, request, spider):
        print("process_request", "ware2")
        return None

    def process_response(self, request, response, spider):
        print("process_response", "ware2")
        return response

    def process_exception(self, request, exception, spider):
        print("process_exception", "ware2")
        pass

```

设置中间件

```python
DOWNLOADER_MIDDLEWARES = {
   # 'mid.middlewares.MidDownloaderMiddleware': 542,
   'mid.middlewares.MidDownloaderMiddleware1': 543,
   'mid.middlewares.MidDownloaderMiddleware2': 544,
}
```

优先级参考管道. 



接下来, 我们来说说这几个方法的返回值问题(难点)

1. process_request(request, spider):  在每个请求到达下载器之前调用

    一, return None  不拦截, 把请求继续向后传递给权重低的中间件或者下载器

    二, return request 请求被拦截, 并将一个新的请求返回. 后续中间件以及下载器收不到本次请求

    三, return response 请求被拦截, 下载器将获取不到请求, 但是引擎是可以接收到本次响应的内容, 也就是说在当前方法内就已经把响应内容获取到了. 

2. proccess_response(request, response, spider): 每个请求从下载器出来调用

    一, return response 通过引擎将响应内容继续传递给其他组件或传递给其他process_response()处理

    二, return request  响应被拦截. 将返回内容直接回馈给调度器(通过引擎), 后续process_response()接收不到响应内容. 
    
    

OK, 至此, 中间件的含义算是完事儿了. 那这东西有啥用?  我们上案例!

#### 1.1. 动态随机设置UA

设置统一的UA很简单. 直接在settings里设置即可. 

```python
USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36'
```

但是这个不够好, 我希望得到一个随机的UA.  此时就可以这样设计, 首先, 在settings里定义好一堆UserAgent.  http://useragentstring.com/pages/useragentstring.php?name=Chrome 

```python
USER_AGENT_LIST = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
    'Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2919.83 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2866.71 Safari/537.36',
    'Mozilla/5.0 (X11; Ubuntu; Linux i686 on x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2820.59 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2762.73 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2656.18 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML like Gecko) Chrome/44.0.2403.155 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2226.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.4; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2225.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2225.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2224.3 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.93 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.124 Safari/537.36',
    'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 4.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36',
]

```

​	中间件

```python
class MyRandomUserAgentMiddleware:

    def process_request(self, request, spider):
        UA = choice(USER_AGENT_LIST)
        request.headers['User-Agent'] = UA
        # 不要返回任何东西

    def process_response(self, request, response, spider):
        return response

    def process_exception(self, request, exception, spider):
        pass
```



#### 1.2 处理代理问题

代理问题一直是我们作为一名爬虫工程师很蛋疼的问题. 不加容易被检测, 加了效率低, 免费的可用IP更是凤毛麟角. 没办法, 无论如何还是得面对它. 这里, 我们采用两个方案来给各位展示scrapy中添加代理的逻辑.

1. 免费代理

    ```python
    class ProxyMiddleware:
    
        def process_request(self, request, spider):
            print("又来")
            proxy = choice(PROXY_LIST)
            request.meta['proxy'] = "https://"+proxy  # 设置代理
            return None
    
        def process_response(self, request, response, spider):
            print('有么有结果???')
            if response.status != 200:
                print("尝试失败")
                request.dont_filter = True  # 丢回调度器重新请求
                return request
            return response
    
        def process_exception(self, request, exception, spider):
            print("出错了!")
            pass
    ```

    

2. 收费代理 

    免费代理实在太难用了. 我们这里直接选择一个收费代理. 依然选择`快代理`, 这个根据你自己的喜好进行调整. 

    ```python
    class MoneyProxyMiddleware:
        def _get_proxy(self):
            """
            912831993520336	t12831993520578	每次请求换IP
            tps138.kdlapi.com 15818
            需实名认证	5次/s	5Mb/s	有效	续费|订单详情|实名认证
            隧道用户名密码修改密码
            用户名：t12831993520578密码：t72a13xu
            :return:
            """
            url = "http://tps138.kdlapi.com:15818"
            auth = basic_auth_header(username="t12831993520578", password="t72a13xu")
            return url, auth
    
        def process_request(self, request, spider):
            print("......")
            url, auth = self._get_proxy()
            request.meta['proxy'] = url
            request.headers['Proxy-Authorization'] = auth
            request.headers['Connection'] = 'close'
            return None
    
        def process_response(self, request, response, spider):
            print(response.status, type(response.status))
            if response.status != 200:
                request.dont_filter = True
                return request
            return response
    
        def process_exception(self, request, exception, spider):
            pass
    ```

    

### 2. SpiderMiddleware(了解)

​	爬虫中间件. 是处于引擎和spider之间的中间件. 里面常用的方法有:

```python
class CuowuSpiderMiddleware:
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
        # 请求被返回, 即将进入到spider时调用
        # 要么返回None, 要么报错
        print("我是process_spider_input")
        return None

    def process_spider_output(self, response, result, spider):
        # 处理完spider中的数据. 返回数据后. 执行
        # 返回值要么是item, 要么是request.
        print("我是process_spider_output")
        for i in result:
            yield i
        print("我是process_spider_output")

    def process_spider_exception(self, response, exception, spider):
        print("process_spider_exception")
        # spider中报错 或者, process_spider_input() 方法报错
        # 返回None或者Request或者item.
        it = ErrorItem()
        it['name'] = "exception"
        it['url'] = response.url
        yield it

    def process_start_requests(self, start_requests, spider):
        print("process_start_requests")
        # 第一次启动爬虫时被调用.

        # Must return only requests (not items).
        for r in start_requests:
            yield r

    def spider_opened(self, spider):
        pass

```

items

```python
class ErrorItem(scrapy.Item):
    name = scrapy.Field()
    url = scrapy.Field()
```

spider:

```python
class BaocuoSpider(scrapy.Spider):
    name = 'baocuo'
    allowed_domains = ['baidu.com']
    start_urls = ['http://www.baidu.com/']

    def parse(self, resp, **kwargs):
        name = resp.xpath('//title/text()').extract_first()
        # print(1/0)  # 调整调整这个. 简单琢磨一下即可~~
        it = CuowuItem()
        it['name'] = name
        print(name)
        yield it
```

pipeline:

```python
from cuowu.items import ErrorItem

class CuowuPipeline:
    def process_item(self, item, spider):
        if isinstance(item, ErrorItem):
            print("错误", item)
        else:
            print("没错", item)
        return item

```

目录结构:

```python
cuowu
├── cuowu
│   ├── __init__.py
│   ├── items.py
│   ├── middlewares.py
│   ├── pipelines.py
│   ├── settings.py
│   └── spiders
│       ├── __init__.py
│       └── baocuo.py
└── scrapy.cfg

```
