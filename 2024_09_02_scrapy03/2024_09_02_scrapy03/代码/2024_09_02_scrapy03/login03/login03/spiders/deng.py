import scrapy
import ddddocr
from urllib.parse import urlencode  # 可以帮你把字典处理成urlencode的样子


class DengSpider(scrapy.Spider):
    name = "deng"
    allowed_domains = ["woaidu.cc"]
    start_urls = ["http://www.woaidu.cc/bookcase.php"]

    # 完整的走一遍登陆流程
    def start_requests(self):
        # 1.先请求到验证码图片. 一定要保持cookie状态.
        yield scrapy.Request(
            url="http://www.woaidu.cc/code.php?0.23195590875929595",
            callback=self.verify_code
        )

    def verify_code(self, resp):

        # 拿到图片, # requests ->  resp.content, aiohttp -> resp.content.read(), scrapy -> resp.body
        # print(resp.body)
        # 为了看图
        # f = open("tu.png",mode="wb")
        # f.write(resp.body)
        result = ddddocr.DdddOcr(show_ad=False).classification(resp.body)

        # 下一步, 发登陆请求就可以了
        # 该网站登陆用的是post请求
        # scrapy发post请求

        # 需要一个逻辑. 把form data的数据进行urlencode
        form_data = {
            "LoginForm[username]": "q6035945",
            "LoginForm[password]": "6035945",
            "LoginForm[captcha]": result,
            "action": "login",
            "submit": "登  录"
        }
        print(urlencode(form_data))
        # # 方案一:
        # yield scrapy.Request(
        #     url="http://www.woaidu.cc/login.php",
        #     method='POST',
        #     body=urlencode(form_data),  # 传递post参数, form data,  注意请求头的content-type
        #     callback=self.login
        # )

        # # 方案二.
        # yield scrapy.FormRequest(   # 专门为了form表单而生的
        #     url="http://www.woaidu.cc/login.php",
        #     formdata=form_data,     # 直接给字典
        #     callback=self.login
        # )

    def login(self, resp):
        # print("123")
        print(resp.text)
        # 可以做判断, 判断是否登陆成功, 成功后, 进入需要访问的页面start_urls
        yield scrapy.Request(url=DengSpider.start_urls[0], callback=self.parse)


    def parse(self, resp, **kwargs):
        print(resp.text)
        pass



if __name__ == '__main__':
    pass
    # # 测试:
    # dic = {
    #     "name": "qiaofu",
    #     "age":18
    # }
    #
    # print(urlencode(dic))
