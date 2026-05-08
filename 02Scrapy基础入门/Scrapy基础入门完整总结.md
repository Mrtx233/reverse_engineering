# Scrapy基础入门完整总结

> 整理来源：
>
> - `2024_08_26_scrapy01/2024_08_26_scrapy01/课件/01_Scrapy_介绍与初步使用.md`
> - `2024_08_30_scrapy02/2024_08_30_scrapy02/课件/09_Scrapy_管道.md`
> - `2024_09_02_scrapy03/2024_09_02_scrapy03/课件/10_Scrapy_模拟登录与中间件.md`
> - `2024_09_06_scrapy04/2024_09_06_scrapy04/课件/11_Scrapy_全站数据抓取(1).md`
> - `2024_09_09_scrapy05/2024_09_09_scrapy05/课件/12_Scarpy_分布式爬虫.md`

本文把 5 份 Scrapy 课件整理成一份完整入门笔记，主线是：爬虫工程化思想、Scrapy 工作流程、项目创建、Spider 编写、Item 数据结构、Pipeline 持久化、模拟登录、中间件、全站抓取、增量爬虫和分布式爬虫。

## 目录

1. 爬虫工程化和Scrapy简介
2. Scrapy核心工作流程
3. Scrapy安装与版本建议
4. Scrapy项目创建和目录结构
5. Spider基础写法
6. Item自定义数据结构
7. Pipeline管道
8. 文件、MySQL、MongoDB和图片保存
9. Request对象和多级页面请求
10. Cookie与模拟登录
11. DownloaderMiddleware下载器中间件
12. SpiderMiddleware爬虫中间件
13. 全站数据抓取
14. CrawlSpider和Rule
15. 增量式爬虫
16. 分布式爬虫和scrapy-redis
17. 布隆过滤器
18. Scrapy项目实战开发流程
19. 常用配置速查
20. 常用代码模板

## 1. 爬虫工程化和Scrapy简介

之前手写爬虫时，通常是一个脚本从头写到尾：

```text
发请求
-> 获取响应
-> 解析数据
-> 翻页或进入详情页
-> 保存数据
```

这种方式适合学习和小任务，但不适合大量商用项目。原因是：

- 代码流程化严重。
- 功能耦合在一起。
- 发请求、解析、存储、去重、异常处理都混在一个文件中。
- 很多共性逻辑无法复用。
- 写 100 个爬虫时维护成本会很高。

爬虫工程化的核心就是：

```text
把爬虫功能拆分成多个模块
每个模块只负责自己的事情
模块之间通过框架调度协作
```

Scrapy 就是这样一个工程化爬虫框架。

Scrapy 官方定位：

```text
An open source and collaborative framework for extracting the data you need from websites.

In a fast, simple, yet extensible way.
```

它的特点：

- 速度快。
- 使用简单。
- 可扩展性强。
- 模块清晰。
- 适合批量开发爬虫项目。

官方文档：<https://docs.scrapy.org/en/latest/>

学习框架时，不建议一开始就死抠源码。更好的路线是：

```text
先学会如何使用
-> 知道每个位置该填什么代码
-> 再反过来理解源码和执行流程
```

## 2. Scrapy核心工作流程

Scrapy 把手写爬虫中的几个核心步骤拆成了多个组件。

核心组件：

```text
Engine      引擎
Scheduler   调度器
Downloader  下载器
Spider      爬虫
Pipeline    管道
Middleware  中间件
```

### 2.1 Scrapy整体流程

Scrapy 工作流程可以概括为：

1. Spider 生成起始 `Request` 对象，交给调度器。
2. Engine 从 Scheduler 中取出请求，交给 Downloader。
3. Downloader 发送请求，拿到响应，封装成 `Response` 对象。
4. Engine 把 `Response` 交给 Spider。
5. Spider 在 `parse()` 或其他回调函数中解析数据。
6. 如果解析出数据，交给 Pipeline 保存或处理。
7. 如果解析出新的 URL，构造成新的 `Request`，再次交给 Scheduler。
8. 重复以上过程，直到没有新的请求。

流程图式理解：

```text
Spider
  -> Request
  -> Scheduler
  -> Engine
  -> Downloader
  -> Response
  -> Engine
  -> Spider.parse()
      -> Item / dict -> Pipeline
      -> Request     -> Scheduler
```

### 2.2 各组件职责

### Engine引擎

Scrapy 的核心，负责调度所有组件。

可以理解为总指挥：

```text
谁该执行
数据该交给谁
请求从哪里来
响应到哪里去
```

### Scheduler调度器

调度器可以理解为请求队列。

职责：

- 存放即将发送的请求。
- 决定下一步抓取哪个 URL。
- 对请求进行去重。

普通 Scrapy 中，调度器由本机内存或磁盘维护；分布式 Scrapy 中，调度器可以交给 Redis。

### Downloader下载器

下载器负责真正发送网络请求。

可以粗略理解为：

```python
requests.get(url)
```

只不过 Scrapy 下载器返回的是 `Response` 对象。

### Spider爬虫

Spider 是我们最常写代码的地方。

职责：

- 定义起始 URL。
- 解析 `Response`。
- 提取数据。
- 构造新的请求。

### Pipeline管道

Pipeline 负责处理 Spider 提取出来的数据。

职责：

- 保存文件。
- 写入 MySQL。
- 写入 MongoDB。
- 下载图片。
- 清洗数据。
- 去重数据。

### Middleware中间件

中间件负责在请求或响应流转过程中插入额外逻辑。

常见用途：

- 随机 User-Agent。
- 设置代理。
- 处理 Cookie。
- 重试失败请求。
- 拦截异常响应。

## 3. Scrapy安装与版本建议

课件建议版本：

```text
scrapy       2.11.2
scrapy-redis 0.9.1
```

安装 Scrapy：

```bash
pip install scrapy==2.11.2
```

如果安装慢，可以使用清华源：

```bash
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple scrapy==2.11.2
```

如果安装失败：

1. 先升级 pip。
2. 再重新安装。
3. 根据报错处理依赖。
4. Windows 老系统建议使用较新的 Python 和系统环境。

安装 scrapy-redis：

```bash
pip install scrapy-redis==0.9.1
```

## 4. Scrapy项目创建和目录结构

### 4.1 创建项目

```bash
scrapy startproject 项目名称
```

示例：

```bash
scrapy startproject mySpider_2
```

项目结构：

```text
mySpider_2
├── mySpider_2
│   ├── __init__.py
│   ├── items.py          定义数据结构
│   ├── middlewares.py    中间件
│   ├── pipelines.py      管道
│   ├── settings.py       配置文件
│   └── spiders           爬虫目录
│       └── __init__.py
└── scrapy.cfg            项目配置文件
```

### 4.2 创建爬虫

先进入项目目录：

```bash
cd mySpider_2
```

创建普通 Spider：

```bash
scrapy genspider 爬虫名称 允许抓取的域名
```

示例：

```bash
scrapy genspider youxi 4399.com
```

创建后会多出：

```text
mySpider_2/spiders/youxi.py
```

### 4.3 启动爬虫

```bash
scrapy crawl 爬虫名称
```

示例：

```bash
scrapy crawl youxi
```

## 5. Spider基础写法

一个基础 Spider 示例：

```python
import scrapy

class YouxiSpider(scrapy.Spider):
    name = "youxi"
    allowed_domains = ["4399.com"]
    start_urls = ["http://www.4399.com/flash/"]

    def parse(self, response, **kwargs):
        li_list = response.xpath("//ul[@class='n-game cf']/li")

        for li in li_list:
            name = li.xpath("./a/b/text()").extract_first()
            category = li.xpath("./em/a/text()").extract_first()
            date = li.xpath("./em/text()").extract_first()

            yield {
                "name": name,
                "category": category,
                "date": date
            }
```

### 5.1 Spider常用属性

```python
name = "youxi"
```

爬虫名称，启动时使用：

```bash
scrapy crawl youxi
```

```python
allowed_domains = ["4399.com"]
```

允许抓取的域名范围。

```python
start_urls = ["http://www.4399.com/flash/"]
```

起始 URL 列表。

### 5.2 response常用方法

```python
response.text       # 页面源代码，字符串
response.body       # 响应字节
response.url        # 当前响应对应的URL
response.xpath()    # XPath提取
response.css()      # CSS选择器提取
response.json()     # JSON响应转Python对象
```

### 5.3 extract和extract_first

```python
response.xpath("//title/text()").extract()
```

返回列表。

```python
response.xpath("//title/text()").extract_first()
```

返回第一个结果，取不到时返回 `None`。

### 5.4 parse返回值限制

Spider 中 `yield` 或 `return` 的内容只能是：

```text
dict
Item
Request
None
```

常见用法：

```python
yield item
yield {"name": name}
yield scrapy.Request(url=url, callback=self.parse_detail)
```

不能随便返回普通字符串、数字等，否则会报错。

## 6. Item自定义数据结构

直接 `yield dict` 虽然方便，但数据字段完全靠手写，数据量大后容易写错 key。

Scrapy 提供 `Item` 来提前声明数据结构。

### 6.1 定义Item

在 `items.py` 中：

```python
import scrapy

class GameItem(scrapy.Item):
    name = scrapy.Field()
    category = scrapy.Field()
    date = scrapy.Field()
```

### 6.2 在Spider中使用Item

```python
from mySpider_2.items import GameItem

item = GameItem()
item["name"] = name
item["category"] = category
item["date"] = date

yield item
```

Item 的好处：

- 字段更清晰。
- 管道中处理更统一。
- 适合多人协作。
- 适合大型项目。

## 7. Pipeline管道

Pipeline 负责接收 Spider 提交的数据，并进行保存或处理。

基础写法：

```python
class Myspider2Pipeline:
    def process_item(self, item, spider):
        print(item)
        return item
```

注意：

- `process_item()` 方法名不能改。
- 处理完后要 `return item`，这样数据才能继续传给后面的管道。

### 7.1 启用Pipeline

在 `settings.py` 中：

```python
ITEM_PIPELINES = {
    "mySpider_2.pipelines.Myspider2Pipeline": 300,
}
```

后面的数字是优先级。

规则：

```text
数字越小，越先执行
```

多个管道可以同时启用：

```python
ITEM_PIPELINES = {
    "project.pipelines.FilePipeline": 300,
    "project.pipelines.MySQLPipeline": 301,
    "project.pipelines.MongoPipeline": 302,
}
```

### 7.2 Pipeline生命周期

Pipeline 常用三个方法：

```python
open_spider(self, spider)
process_item(self, item, spider)
close_spider(self, spider)
```

含义：

```text
open_spider   爬虫开始时执行一次
process_item  每来一条数据执行一次
close_spider  爬虫结束时执行一次
```

适合在：

- `open_spider()` 中打开文件、连接数据库。
- `process_item()` 中写入数据。
- `close_spider()` 中关闭文件、关闭连接。

## 8. 文件、MySQL、MongoDB和图片保存

## 8.1 保存到文本或CSV

不推荐每条数据都 `open()` 一次文件：

```python
class FilePipeline:
    def process_item(self, item, spider):
        with open("data.txt", "a", encoding="utf-8") as f:
            f.write(str(item) + "\n")
        return item
```

更推荐：

```python
class FilePipeline:
    def open_spider(self, spider):
        self.f = open("data.txt", "a", encoding="utf-8")

    def process_item(self, item, spider):
        self.f.write(f"{item['name']},{item['category']},{item['date']}\n")
        return item

    def close_spider(self, spider):
        self.f.close()
```

## 8.2 保存到MySQL

先在 `settings.py` 中配置数据库：

```python
MYSQL_CONFIG = {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": "test123456",
    "database": "spider",
}
```

Pipeline：

```python
import pymysql
from project.settings import MYSQL_CONFIG as mysql

class MySQLPipeline:
    def open_spider(self, spider):
        self.conn = pymysql.connect(
            host=mysql["host"],
            port=mysql["port"],
            user=mysql["user"],
            password=mysql["password"],
            database=mysql["database"],
            charset="utf8mb4"
        )

    def process_item(self, item, spider):
        try:
            cursor = self.conn.cursor()
            sql = "insert into game(name, category, date) values(%s, %s, %s)"
            cursor.execute(sql, (item["name"], item["category"], item["date"]))
            self.conn.commit()
            spider.logger.info(f"保存数据成功: {item}")
        except Exception as e:
            self.conn.rollback()
            spider.logger.error(f"保存数据库失败: {e}, 数据: {item}")
        return item

    def close_spider(self, spider):
        self.conn.close()
```

关键点：

- 连接在 `open_spider()` 中创建。
- 写入在 `process_item()` 中完成。
- 成功后 `commit()`。
- 失败后 `rollback()`。
- 连接在 `close_spider()` 中关闭。

## 8.3 保存到MongoDB

配置：

```python
MONGO_CONFIG = {
    "host": "localhost",
    "port": 27017,
    "db": "python"
}
```

Pipeline：

```python
import pymongo
from project.settings import MONGO_CONFIG as mongo

class MongoPipeline:
    def open_spider(self, spider):
        self.client = pymongo.MongoClient(
            host=mongo["host"],
            port=mongo["port"]
        )
        db = self.client[mongo["db"]]
        self.collection = db["game"]

    def process_item(self, item, spider):
        self.collection.insert_one(dict(item))
        return item

    def close_spider(self, spider):
        self.client.close()
```

## 8.4 使用ImagesPipeline下载图片

安装图片处理依赖：

```bash
pip install pillow
```

Spider 中提取图片地址：

```python
import scrapy

class ZolSpider(scrapy.Spider):
    name = "zol"
    allowed_domains = ["zol.com.cn"]
    start_urls = ["https://desk.zol.com.cn/dongman/"]

    def parse(self, resp, **kwargs):
        a_list = resp.xpath("//*[@class='pic-list2  clearfix']/li/a")
        for a in a_list:
            href = a.xpath("./@href").extract_first()
            if href.endswith(".exe"):
                continue

            href = resp.urljoin(href)

            yield scrapy.Request(
                url=href,
                callback=self.parse_detail
            )

    def parse_detail(self, resp, **kwargs):
        img_src = resp.xpath("//*[@id='bigImg']/@src").extract_first()
        yield {"img_src": img_src}
```

Pipeline：

```python
import scrapy
from scrapy.pipelines.images import ImagesPipeline

class MyImagePipeline(ImagesPipeline):
    def get_media_requests(self, item, info):
        url = item["img_src"]
        yield scrapy.Request(url=url, meta={"img_url": url})

    def file_path(self, request, response=None, info=None, *, item=None):
        folder = "dongman/imgs"
        filename = request.meta["img_url"].split("/")[-1]
        return folder + "/" + filename

    def item_completed(self, results, item, info):
        return item
```

`settings.py`：

```python
ITEM_PIPELINES = {
    "tu.pipelines.MyImagePipeline": 300,
}

IMAGES_STORE = "./images"
MEDIA_ALLOW_REDIRECTS = True
```

说明：

- `get_media_requests()` 负责发起下载请求。
- `file_path()` 决定图片保存路径。
- `item_completed()` 下载完成后执行。
- `IMAGES_STORE` 是图片保存总目录。

## 9. Request对象和多级页面请求

Spider 中如果要请求详情页、下一页或接口，需要 `yield scrapy.Request()`。

常见参数：

```python
scrapy.Request(
    url=url,
    method="GET",
    callback=self.parse_detail,
    errback=self.error_back,
    headers=headers,
    cookies=cookies,
    meta={"key": "value"},
    dont_filter=False
)
```

参数说明：

```text
url          请求地址
method       请求方式
callback     请求成功后的回调函数
errback      请求失败后的回调函数
headers      请求头
cookies      Cookie字典
meta         请求间传递数据
dont_filter  是否跳过去重，默认False
```

### 9.1 URL拼接

普通 Python 中可以用：

```python
from urllib.parse import urljoin

new_url = urljoin(response.url, href)
```

Scrapy 中可以直接用：

```python
new_url = response.urljoin(href)
```

## 10. Cookie与模拟登录

在 `requests` 中可以用 `session` 保持 Cookie。Scrapy 也可以自动管理 Cookie，但很多时候我们需要自己介入登录过程。

常见方案有三种：

1. 直接从浏览器复制 Cookie。
2. 使用 Scrapy 完成登录流程。
3. 在 `settings.py` 中配置默认 Cookie。

## 10.1 重写start_requests

Scrapy 默认会根据 `start_urls` 自动创建起始请求。

如果请求起始页之前必须先登录或先获取验证码，就需要重写：

```python
def start_requests(self):
    yield scrapy.Request(
        url=self.start_urls[0],
        callback=self.parse
    )
```

## 10.2 方案一：复制浏览器Cookie

```python
import scrapy

class DengSpider(scrapy.Spider):
    name = "deng"
    allowed_domains = ["woaidu.cc"]
    start_urls = ["http://www.woaidu.cc/bookcase.php"]

    def start_requests(self):
        cookies = "username=User; token=xxx"
        cookie_dict = {}

        for item in cookies.split("; "):
            k, v = item.split("=", 1)
            cookie_dict[k] = v

        yield scrapy.Request(
            url=self.start_urls[0],
            cookies=cookie_dict,
            callback=self.parse
        )

    def parse(self, resp, **kwargs):
        print(resp.text)
```

注意：

```text
Scrapy中Cookie要通过 cookies 参数传递，推荐传字典。
```

## 10.3 方案二：走完整登录流程

如果登录需要验证码、用户名、密码，可以先请求验证码，再提交登录表单。

```python
import scrapy
from urllib.parse import urlencode

class LoginSpider(scrapy.Spider):
    name = "login"
    allowed_domains = ["woaidu.cc"]
    start_urls = ["http://www.woaidu.cc/bookcase.php"]

    def start_requests(self):
        code_url = "http://www.woaidu.cc/code.php"
        yield scrapy.Request(
            url=code_url,
            dont_filter=True,
            callback=self.parse_code
        )

    def parse_code(self, resp):
        code = "识别出来的验证码"

        data = {
            "LoginForm[username]": "用户名",
            "LoginForm[password]": "密码",
            "LoginForm[captcha]": code,
            "action": "login",
            "submit": "登录"
        }

        yield scrapy.Request(
            url="http://www.woaidu.cc/login.php",
            method="POST",
            body=urlencode(data, encoding="utf-8"),
            headers={
                "Content-Type": "application/x-www-form-urlencoded"
            },
            callback=self.parse_login
        )

    def parse_login(self, resp):
        yield scrapy.Request(
            url=self.start_urls[0],
            callback=self.parse
        )

    def parse(self, resp, **kwargs):
        print(resp.text)
```

更推荐使用 `FormRequest`：

```python
yield scrapy.FormRequest(
    url="http://www.woaidu.cc/login.php",
    formdata=data,
    callback=self.parse_login
)
```

区别：

- `scrapy.Request(..., body=...)` 的 `body` 需要字符串或字节。
- `scrapy.FormRequest(..., formdata=...)` 可以直接传字典，更方便。

## 10.4 方案三：settings中配置Cookie

在 `settings.py` 中：

```python
COOKIES_ENABLED = False

DEFAULT_REQUEST_HEADERS = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en",
    "Cookie": "xxxxxx",
    "User-Agent": "Mozilla/5.0"
}
```

注意：

```text
如果把Cookie写进 DEFAULT_REQUEST_HEADERS，通常要把 COOKIES_ENABLED 设置成 False。
否则 Scrapy 的 CookieMiddleware 可能会处理或覆盖 Cookie。
```

## 11. DownloaderMiddleware下载器中间件

下载器中间件位于：

```text
Engine 和 Downloader 之间
```

它可以在请求到达下载器前、响应返回引擎前进行处理。

流程：

```text
Engine
-> process_request
-> Downloader
-> process_response
-> Engine
```

### 11.1 基础写法

```python
class MyDownloaderMiddleware:
    def process_request(self, request, spider):
        return None

    def process_response(self, request, response, spider):
        return response

    def process_exception(self, request, exception, spider):
        pass
```

启用中间件：

```python
DOWNLOADER_MIDDLEWARES = {
    "project.middlewares.MyDownloaderMiddleware": 543,
}
```

优先级数字规则和 Pipeline 类似：数字越小越靠前。

### 11.2 process_request返回值

`process_request(request, spider)` 在请求到达下载器之前调用。

返回值含义：

```text
return None
    不拦截，请求继续向后传递。

return request
    拦截当前请求，并把返回的新请求重新交给调度器。

return response
    当前方法直接返回响应，下载器不会再发送这个请求。
```

### 11.3 process_response返回值

`process_response(request, response, spider)` 在响应从下载器出来后调用。

返回值含义：

```text
return response
    响应继续向后传递。

return request
    响应被拦截，请求重新回到调度器。
```

### 11.4 随机User-Agent

`settings.py`：

```python
USER_AGENT_LIST = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/70.0 Safari/537.36",
    "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 Chrome/55.0 Safari/537.36",
]
```

中间件：

```python
from random import choice
from project.settings import USER_AGENT_LIST

class RandomUserAgentMiddleware:
    def process_request(self, request, spider):
        ua = choice(USER_AGENT_LIST)
        request.headers["User-Agent"] = ua
        return None
```

启用：

```python
DOWNLOADER_MIDDLEWARES = {
    "project.middlewares.RandomUserAgentMiddleware": 543,
}
```

### 11.5 设置代理

免费代理示例：

```python
from random import choice

PROXY_LIST = [
    "127.0.0.1:7890",
]

class ProxyMiddleware:
    def process_request(self, request, spider):
        proxy = choice(PROXY_LIST)
        request.meta["proxy"] = "http://" + proxy
        return None

    def process_response(self, request, response, spider):
        if response.status != 200:
            request.dont_filter = True
            return request
        return response

    def process_exception(self, request, exception, spider):
        request.dont_filter = True
        return request
```

收费代理通常需要认证：

```python
from w3lib.http import basic_auth_header

class MoneyProxyMiddleware:
    def process_request(self, request, spider):
        request.meta["proxy"] = "http://代理地址:端口"
        request.headers["Proxy-Authorization"] = basic_auth_header(
            username="用户名",
            password="密码"
        )
        request.headers["Connection"] = "close"
        return None

    def process_response(self, request, response, spider):
        if response.status != 200:
            request.dont_filter = True
            return request
        return response
```

## 12. SpiderMiddleware爬虫中间件

爬虫中间件位于：

```text
Engine 和 Spider 之间
```

常用方法：

```python
def process_spider_input(self, response, spider):
    return None

def process_spider_output(self, response, result, spider):
    for i in result:
        yield i

def process_spider_exception(self, response, exception, spider):
    pass

def process_start_requests(self, start_requests, spider):
    for r in start_requests:
        yield r
```

用途：

- 处理进入 Spider 前的响应。
- 处理 Spider 输出的 item 或 request。
- 捕获 Spider 中的异常。
- 处理起始请求。

课件里强调：SpiderMiddleware 了解即可，实际项目中 DownloaderMiddleware 用得更多。

## 13. 全站数据抓取

全站抓取的核心是：

```text
从列表页提取详情页链接
-> 请求详情页
-> 解析详情页数据
-> 提取下一页链接
-> 继续请求下一页
```

Scrapy 中可以用普通 Spider，也可以用 CrawlSpider。

## 13.1 普通Spider全站抓取

示例：抓取二手车列表和详情页。

```python
import scrapy
from scrapy.linkextractors import LinkExtractor

class ErshouSpider(scrapy.Spider):
    name = "ershou"
    allowed_domains = ["che168.com"]
    start_urls = ["https://www.che168.com/china/a0_0msdgscncgpi1ltocsp1exx0/"]

    def parse(self, resp, **kwargs):
        le = LinkExtractor(
            restrict_xpaths=("//ul[@class='viewlist_ul']/li/a",),
            deny_domains=("topicm.che168.com",)
        )
        links = le.extract_links(resp)

        for link in links:
            yield scrapy.Request(
                url=link.url,
                callback=self.parse_detail
            )

        page_le = LinkExtractor(
            restrict_xpaths=("//div[@id='listpagination']/a",)
        )
        pages = page_le.extract_links(resp)

        for page in pages:
            yield scrapy.Request(
                url=page.url,
                callback=self.parse
            )

    def parse_detail(self, resp, **kwargs):
        title = resp.xpath("/html/body/div[5]/div[2]/h3/text()").extract_first()
        print(title)
```

### 13.2 控制访问频率

全站抓取容易触发验证或封禁，需要控制请求频率。

`settings.py`：

```python
DOWNLOAD_DELAY = 3
```

## 13.3 LinkExtractor

`LinkExtractor` 是链接提取器，可以从响应页面中提取 URL。

常用参数：

```text
allow             正则，提取符合规则的链接
deny              正则，排除符合规则的链接
allow_domains     只提取指定域名
deny_domains      排除指定域名
restrict_xpaths   只从指定XPath范围提取
restrict_css      只从指定CSS选择器范围提取
tags              从哪些标签提取，默认 a、area
attrs             从哪些属性提取，默认 href
```

示例：

```python
le = LinkExtractor(
    restrict_xpaths=("//ul[@class='viewlist_ul']/li/a",),
    deny_domains=("topicm.che168.com",)
)

links = le.extract_links(response)
```

注意：提取到重复 URL 时，Scrapy 默认会自动去重。

## 14. CrawlSpider和Rule

`CrawlSpider` 是 Scrapy 提供的全站抓取 Spider，更适合按规则自动提取链接。

### 14.1 创建CrawlSpider

```bash
scrapy genspider -t crawl ershouche che168.com
```

`-t crawl` 表示使用 crawl 模板。

### 14.2 CrawlSpider示例

```python
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule

class ErshoucheSpider(CrawlSpider):
    name = "ershouche"
    allowed_domains = ["che168.com", "autohome.com.cn"]
    start_urls = ["https://www.che168.com/beijing/a0_0msdgscncgpi1ltocsp1exx0/"]

    detail_le = LinkExtractor(
        restrict_xpaths=("//ul[@class='viewlist_ul']/li/a",),
        deny_domains=("topicm.che168.com",)
    )

    page_le = LinkExtractor(
        restrict_xpaths=("//div[@id='listpagination']/a",)
    )

    rules = (
        Rule(page_le, follow=True),
        Rule(detail_le, callback="parse_item", follow=False),
    )

    def parse_item(self, response):
        print(response.url)
```

### 14.3 Rule参数理解

```python
Rule(link_extractor, callback=None, follow=None)
```

常见参数：

```text
link_extractor  链接提取规则
callback        请求成功后的解析函数
follow          是否继续在该响应里按照rules提取链接
```

示例：

```python
Rule(page_le, follow=True)
```

表示：提取分页链接，并继续在分页页面中按照规则提取。

```python
Rule(detail_le, callback="parse_item", follow=False)
```

表示：提取详情页链接，进入详情页后执行 `parse_item`，但不继续从详情页扩散。

## 15. 增量式爬虫

增量式爬虫指的是：

```text
爬虫可以反复运行
每次只保存新数据
旧数据自动过滤
```

核心思想：

```text
去重
```

去重方向：

1. URL 去重。
2. 数据内容去重。

### 15.1 URL去重

可以使用 Redis 集合记录已经抓取过的 URL。

```python
import scrapy
import redis
import re
import json

class WangyiSpider(scrapy.Spider):
    name = "wangyi"
    allowed_domains = ["163.com"]
    start_urls = ["https://news.163.com/special/cm_guonei/?callback=data_callback"]

    re_obj = re.compile(r"data_callback\((?P<code>.*)\)", re.S)
    conn = redis.Redis(
        host="127.0.0.1",
        port=6379,
        db=3,
        password="123456",
        decode_responses=True
    )

    def parse(self, resp, **kwargs):
        code = self.re_obj.search(resp.text).group("code")
        news_list = json.loads(code)

        for news in news_list:
            tlink = news.get("tlink")

            if self.conn.sismember("wangyi:news:urls", tlink):
                print("抓过了")
            else:
                yield scrapy.Request(
                    url=tlink,
                    callback=self.parse_detail
                )

    def parse_detail(self, resp):
        title = resp.xpath("//h1[@class='post_title']//text()").extract()
        body = resp.xpath("//div[@class='post_body']//text()").extract()

        self.conn.sadd("wangyi:news:urls", resp.url)

        yield {
            "url": resp.url,
            "title": title,
            "body": body
        }
```

### 15.2 数据内容去重

在 Pipeline 中根据 item 内容去重：

```python
import json
from redis import Redis

class NewsPipeline:
    def open_spider(self, spider):
        self.red = Redis(password="123456", db=3)

    def process_item(self, item, spider):
        data = json.dumps(dict(item), ensure_ascii=False)
        result = self.red.sadd("wangyi:news:items", data)

        if result:
            print("存入数据库", item.get("title"))
        else:
            print("数据已存在", item.get("title"))

        return item

    def close_spider(self, spider):
        self.red.close()
```

如果数据量很大，可以先计算内容的 MD5，再把 MD5 放入 Redis 集合，减少存储压力。

## 16. 分布式爬虫和scrapy-redis

分布式爬虫指的是：

```text
多台机器或多个爬虫节点
共同抓取同一批资源
共享请求队列
共享去重逻辑
```

普通 Scrapy 的调度器和去重集合在本机，多个机器无法共享。因此分布式爬虫需要把：

- 请求队列
- 去重集合

放到公共服务中，常用 Redis。

`scrapy-redis` 做的事情就是：

```text
重写 Scrapy 调度器
把请求队列放到 Redis
把去重逻辑放到 Redis
让多个爬虫节点共享调度和去重
```

## 16.1 scrapy-redis工作流程

1. 爬虫从 `redis_key` 获取起始 URL。
2. 起始 URL 进入 Redis 请求队列。
3. 调度器从 Redis 请求队列中取请求。
4. 下载器发送请求，Spider 解析响应。
5. Spider 产生的新请求进入 Redis 去重集合判断。
6. 没抓过的请求放入 Redis 请求队列。
7. 多个节点共同消费 Redis 请求队列。

## 16.2 安装

```bash
pip install scrapy-redis==0.9.1
```

## 16.3 修改Spider

普通 Spider：

```python
import scrapy

class ShuSpider(scrapy.Spider):
    name = "shu"
    start_urls = ["https://example.com"]
```

分布式 Spider：

```python
from scrapy_redis.spiders import RedisSpider

class ShuSpider(RedisSpider):
    name = "shu"
    allowed_domains = ["example.com"]

    redis_key = "shu:start_urls"

    def parse(self, response):
        pass
```

变化：

- 继承 `RedisSpider`。
- 注释或删除 `start_urls`。
- 添加 `redis_key`。

启动爬虫后，它会等待 Redis 中投放起始 URL。

向 Redis 投放起始 URL：

```bash
lpush shu:start_urls https://example.com
```

## 16.4 settings配置

```python
REDIS_HOST = "127.0.0.1"
REDIS_PORT = 6379
REDIS_DB = 8
REDIS_PARAMS = {
    "password": "123456"
}

SCHEDULER = "scrapy_redis.scheduler.Scheduler"
SCHEDULER_PERSIST = True
DUPEFILTER_CLASS = "scrapy_redis.dupefilter.RFPDupeFilter"

ITEM_PIPELINES = {
    "shu.pipelines.ShuPipeline": 300,
    "scrapy_redis.pipelines.RedisPipeline": 301,
}
```

配置说明：

```text
REDIS_HOST / REDIS_PORT / REDIS_DB / REDIS_PARAMS
    Redis连接信息。

SCHEDULER
    使用 scrapy-redis 的调度器。

SCHEDULER_PERSIST
    True 表示爬虫关闭时保留请求队列和去重记录。
    False 表示关闭时清理。

DUPEFILTER_CLASS
    使用 scrapy-redis 的去重类。

RedisPipeline
    scrapy-redis 提供的数据存储管道，会把 item 存到 Redis。
```

## 17. 布隆过滤器

当请求量非常大时，单纯用 Redis set 存储所有请求指纹，内存压力会很大。

布隆过滤器用于更节省空间地判断：

```text
某个数据是否可能存在
```

基本原理：

1. 准备一个很长的 bit 数组。
2. 对数据执行多个 hash 算法。
3. 根据 hash 结果把数组对应位置标记为 1。
4. 查询时再次执行 hash。
5. 如果所有位置都是 1，认为可能存在。
6. 如果有任意位置是 0，说明一定不存在。

特点：

- 节省空间。
- 查询速度快。
- 可能误判存在。
- 不会误判不存在。

安装：

```bash
pip install scrapy_redis_bloomfilter
```

配置：

```python
DUPEFILTER_CLASS = "scrapy_redis_bloomfilter.dupefilter.RFPDupeFilter"

BLOOMFILTER_HASH_NUMBER = 6
BLOOMFILTER_BIT = 30
```

说明：

```text
BLOOMFILTER_HASH_NUMBER
    hash函数个数，默认6。

BLOOMFILTER_BIT
    bit参数，默认30，约占128MB，可处理亿级去重。
```

## 18. Scrapy项目实战开发流程

标准开发流程：

1. 创建项目。

```bash
scrapy startproject project_name
```

2. 进入项目目录。

```bash
cd project_name
```

3. 创建爬虫。

```bash
scrapy genspider spider_name domain.com
```

4. 分析目标网站。

```text
数据在HTML还是Ajax？
是否需要登录？
是否需要Cookie？
是否有分页？
是否有详情页？
是否需要全站抓取？
```

5. 在 `items.py` 中定义数据结构。

```python
class DemoItem(scrapy.Item):
    title = scrapy.Field()
    url = scrapy.Field()
```

6. 在 Spider 中解析数据或继续请求。

```python
yield item
yield scrapy.Request(url=detail_url, callback=self.parse_detail)
```

7. 在 Pipeline 中保存数据。

```python
def process_item(self, item, spider):
    return item
```

8. 在 `settings.py` 中启用 Pipeline。

```python
ITEM_PIPELINES = {
    "project.pipelines.DemoPipeline": 300,
}
```

9. 根据需要配置中间件、延迟、UA、代理、Cookie。

10. 启动爬虫。

```bash
scrapy crawl spider_name
```

## 19. 常用配置速查

### 19.1 基础配置

```python
ROBOTSTXT_OBEY = False
LOG_LEVEL = "WARNING"
DOWNLOAD_DELAY = 3
USER_AGENT = "Mozilla/5.0"
```

### 19.2 Pipeline配置

```python
ITEM_PIPELINES = {
    "project.pipelines.FilePipeline": 300,
    "project.pipelines.MySQLPipeline": 301,
}
```

### 19.3 中间件配置

```python
DOWNLOADER_MIDDLEWARES = {
    "project.middlewares.RandomUserAgentMiddleware": 543,
    "project.middlewares.ProxyMiddleware": 544,
}
```

### 19.4 Cookie配置

```python
COOKIES_ENABLED = False

DEFAULT_REQUEST_HEADERS = {
    "Cookie": "xxx",
    "User-Agent": "Mozilla/5.0"
}
```

### 19.5 图片下载配置

```python
ITEM_PIPELINES = {
    "project.pipelines.MyImagePipeline": 300,
}

IMAGES_STORE = "./images"
MEDIA_ALLOW_REDIRECTS = True
```

### 19.6 scrapy-redis配置

```python
REDIS_HOST = "127.0.0.1"
REDIS_PORT = 6379
REDIS_DB = 8
REDIS_PARAMS = {
    "password": "123456"
}

SCHEDULER = "scrapy_redis.scheduler.Scheduler"
SCHEDULER_PERSIST = True
DUPEFILTER_CLASS = "scrapy_redis.dupefilter.RFPDupeFilter"
```

## 20. 常用代码模板

## 20.1 普通Spider模板

```python
import scrapy

class DemoSpider(scrapy.Spider):
    name = "demo"
    allowed_domains = ["example.com"]
    start_urls = ["https://example.com"]

    def parse(self, response, **kwargs):
        title = response.xpath("//title/text()").extract_first()

        yield {
            "title": title,
            "url": response.url
        }
```

## 20.2 多级页面模板

```python
import scrapy

class DemoSpider(scrapy.Spider):
    name = "demo"
    allowed_domains = ["example.com"]
    start_urls = ["https://example.com/list"]

    def parse(self, response, **kwargs):
        hrefs = response.xpath("//a/@href").extract()

        for href in hrefs:
            url = response.urljoin(href)
            yield scrapy.Request(
                url=url,
                callback=self.parse_detail
            )

    def parse_detail(self, response, **kwargs):
        title = response.xpath("//h1/text()").extract_first()
        yield {
            "title": title,
            "url": response.url
        }
```

## 20.3 Item模板

```python
import scrapy

class DemoItem(scrapy.Item):
    title = scrapy.Field()
    url = scrapy.Field()
```

使用：

```python
from project.items import DemoItem

item = DemoItem()
item["title"] = title
item["url"] = response.url
yield item
```

## 20.4 Pipeline模板

```python
class DemoPipeline:
    def open_spider(self, spider):
        self.f = open("data.txt", "a", encoding="utf-8")

    def process_item(self, item, spider):
        self.f.write(str(dict(item)) + "\n")
        return item

    def close_spider(self, spider):
        self.f.close()
```

## 20.5 登录FormRequest模板

```python
import scrapy

class LoginSpider(scrapy.Spider):
    name = "login"
    allowed_domains = ["example.com"]

    def start_requests(self):
        yield scrapy.FormRequest(
            url="https://example.com/login",
            formdata={
                "username": "用户名",
                "password": "密码"
            },
            callback=self.after_login
        )

    def after_login(self, response):
        yield scrapy.Request(
            url="https://example.com/user",
            callback=self.parse_user
        )

    def parse_user(self, response):
        print(response.text)
```

## 20.6 DownloaderMiddleware模板

```python
class DemoDownloaderMiddleware:
    def process_request(self, request, spider):
        request.headers["User-Agent"] = "Mozilla/5.0"
        return None

    def process_response(self, request, response, spider):
        if response.status != 200:
            request.dont_filter = True
            return request
        return response

    def process_exception(self, request, exception, spider):
        request.dont_filter = True
        return request
```

## 20.7 CrawlSpider模板

```python
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule

class DemoCrawlSpider(CrawlSpider):
    name = "demo_crawl"
    allowed_domains = ["example.com"]
    start_urls = ["https://example.com/list"]

    page_le = LinkExtractor(restrict_xpaths=("//div[@class='page']/a",))
    detail_le = LinkExtractor(restrict_xpaths=("//ul[@class='list']/li/a",))

    rules = (
        Rule(page_le, follow=True),
        Rule(detail_le, callback="parse_item", follow=False),
    )

    def parse_item(self, response):
        title = response.xpath("//h1/text()").extract_first()
        yield {
            "title": title,
            "url": response.url
        }
```

## 20.8 RedisSpider模板

```python
from scrapy_redis.spiders import RedisSpider

class DemoRedisSpider(RedisSpider):
    name = "demo_redis"
    allowed_domains = ["example.com"]
    redis_key = "demo:start_urls"

    def parse(self, response):
        title = response.xpath("//title/text()").extract_first()
        yield {
            "title": title,
            "url": response.url
        }
```

投放起始 URL：

```bash
lpush demo:start_urls https://example.com
```

## 总结

这 5 节 Scrapy 课件的核心脉络是：

```text
Scrapy工程化思想
-> Scrapy工作流程
-> 项目创建和Spider编写
-> Item规范数据结构
-> Pipeline保存数据
-> Request实现多级抓取
-> Cookie和模拟登录
-> DownloaderMiddleware处理UA和代理
-> LinkExtractor/CrawlSpider抓全站
-> Redis实现增量和分布式
```

真正写 Scrapy 项目时，可以按这个顺序推进：

1. 先判断数据来源和请求逻辑。
2. 再创建项目和 Spider。
3. 用 `response.xpath()`、`response.css()` 或 `response.json()` 提取数据。
4. 数据字段多时定义 Item。
5. 需要保存时写 Pipeline。
6. 需要登录时重写 `start_requests()` 或使用 `FormRequest`。
7. 需要统一处理请求时写 DownloaderMiddleware。
8. 需要全站抓取时优先考虑 `LinkExtractor` 和 `CrawlSpider`。
9. 需要增量或分布式时引入 Redis 和 scrapy-redis。

Scrapy 的关键不是记住所有 API，而是理解数据在框架里的流向：`Request` 从 Spider 出发，经过 Scheduler 和 Downloader 变成 `Response`，再回到 Spider，最终变成 `Item` 交给 Pipeline。
