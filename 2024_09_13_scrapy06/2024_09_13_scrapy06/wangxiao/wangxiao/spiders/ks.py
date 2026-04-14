import scrapy
import json


class KsSpider(scrapy.Spider):
    name = "ks"
    allowed_domains = ["wangxiao.cn"]
    # 从首页开始的
    start_urls = ["https://ks.wangxiao.cn"]

    # 一定要降低访问频率.
    # DOWNLOAD_DELAY = 2

    def parse(self, resp, **kwargs):
        li_list = resp.xpath("//ul[@class='first-title']/li")
        for li in li_list:
            first_title = li.xpath("./p/span/text()").extract_first()
            # print(first_title)
            a_list = li.xpath("./div[@class='send-title']/a")
            for a in a_list:
                second_title = a.xpath("./text()").extract_first()
                href = a.xpath("./@href").extract_first()
                # 我们想要的是考点练习的url. 不是模拟考试的
                # 模拟考试的url, 只需要把TestPaper替换成exampoint就是考点练习的url
                href = href.replace("TestPaper", "exampoint")
                href = resp.urljoin(href)
                # print(first_title, second_title, href)

                # yield scrapy.Request(
                #     url=href,
                #     callback=self.parse_sub
                # )

                # 写代码过程中, 方便观察程序执行过程
                # 把url固定死, 一级建造师
                yield scrapy.Request(
                    url="https://ks.wangxiao.cn/exampoint/list?sign=jz1",  # 测试的时候, 用一级建造师进行测试
                    callback=self.parse_sub,
                    meta={
                        "first_title": first_title,
                        "second_title": second_title
                    }
                )
                # 为了测试
                break
            # 为了测试
            break

    def parse_sub(self, resp):  # 解析科目的内容
        first_title = resp.meta.get("first_title")
        second_title = resp.meta.get("second_title")
        a_list = resp.xpath("//div[@class='filter-content']/div[@class='filter-item']/a")
        for a in a_list:
            sub_title = a.xpath("./text()").extract_first()
            sub_href = a.xpath("./@href").extract_first()
            sub_href = resp.urljoin(sub_href)
            # print(sub_title, sub_href)
            yield scrapy.Request(
                url=sub_href,
                callback=self.parse_exam_point,
                meta={
                    "first_title": first_title,
                    "second_title": second_title,
                    "sub_title": sub_title
                }
            )
            break

    def parse_exam_point(self, resp):
        first_title = resp.meta.get("first_title")
        second_title = resp.meta.get("second_title")
        sub_title = resp.meta.get("sub_title")

        # pass  # 7777777   99999
        # 到这里. 至少得拿到3层文件夹
        # 先取chapter-item
        chapter_items = resp.xpath("//ul[@class='chapter-item']")
        for chapter in chapter_items:
            spis = chapter.xpath(".//ul[@class='section-point-item']")

            if spis:  # 有层级结构
                for spi in spis:  # 一堆 section-point-item
                    # ancestor相当于, 先找到所有的祖先标签
                    # [1, 2, 3, 4, 5, 6, ]
                    # :: 在进一步进行筛选
                    # 排列顺序是从外往里排列的
                    ancestors = spi.xpath("./ancestor::ul[@class='section-item' or @class='chapter-item']")
                    # 祖先节点进行循环遍历
                    # 前三个路径
                    path_list = [first_title, second_title, sub_title]
                    for anc in ancestors:
                        t = anc.xpath("./li[1]//text()").extract()
                        t = "".join(t).strip()
                        path_list.append(t)
                    # 拿到自己节点的东西
                    spi_name = spi.xpath("./li[1]//text()").extract()
                    spi_name = "".join(spi_name).strip()
                    # 未来文件夹路径
                    # py普通逻辑
                    # arr = []
                    # for p in path_list:
                    #     arr.append(resolve_gang(p))
                    # 列表推导式 逻辑
                    arr = [resolve_gang(p) for p in path_list]
                    path = '/'.join(arr)
                    spi_name = resolve_gang(spi_name)

                    # print(path, spi_name)

                    # 发请求. 拿题 -> 今天能把请求发出去. 能拿回来json就算成功.
                    question_url = "https://ks.wangxiao.cn/practice/listQuestions"

                    subsign = spi.xpath("./li[3]/span/@data_subsign").extract_first()
                    sign = spi.xpath("./li[3]/span/@data_sign").extract_first()

                    top = spi.xpath("./li[2]/text()").extract_first().split("/")[-1]

                    payload_data = {
                        "practiceType": "2",
                        "examPointType": "",
                        "questionType": "",
                        "top": "100",  # 由于页面上只有30 50 100 直接选最大就完了
                        "sign": sign,
                        "subsign": subsign,
                    }

                    # 该请求必须在登陆状态下进行.
                    # 在settings中, 直接把登陆后的, 首页的请求头怼上去即可
                    yield scrapy.Request(
                        url=question_url,
                        method="POST",  # post请求 不能用FormRequest
                        # 1. python生成的json有空格, 需要处理
                        body=json.dumps(payload_data, separators=(',', ':')),
                        # 2. 你发送的这个东西是挂载在请求体上的.
                        # 服务器需要知道你传递的是什么格式的数据. 才能正确的解析
                        headers={
                            "content-type": "application/json; charset=UTF-8"
                        },
                        callback=self.parse_question,
                        meta={
                            "file_path": path,
                            "file_name": spi_name
                        },
                    )
                    break
            else:

                path_list = [first_title, second_title, sub_title]
                arr = [resolve_gang(p) for p in path_list]
                path = '/'.join(arr)

                spi_name = chapter.xpath("./li[1]//text()").extract()
                spi_name = "".join(spi_name).strip()

                spi_name = resolve_gang(spi_name)

                # print(path, spi_name)

                # 发请求. 拿题 -> 今天能把请求发出去. 能拿回来json就算成功.
                question_url = "https://ks.wangxiao.cn/practice/listQuestions"

                subsign = chapter.xpath("./li[3]/span/@data_subsign").extract_first()
                sign = chapter.xpath("./li[3]/span/@data_sign").extract_first()

                payload_data = {
                    "practiceType": "2",
                    "examPointType": "",
                    "questionType": "",
                    "top": "100",  # 由于页面上只有30 50 100 直接选最大就完了
                    "sign": sign,
                    "subsign": subsign,
                }

                # 该请求必须在登陆状态下进行.
                # 在settings中, 直接把登陆后的, 首页的请求头怼上去即可
                yield scrapy.Request(
                    url=question_url,
                    method="POST",  # post请求 不能用FormRequest
                    # 1. python生成的json有空格, 需要处理
                    body=json.dumps(payload_data, separators=(',', ':')),
                    # 2. 你发送的这个东西是挂载在请求体上的.
                    # 服务器需要知道你传递的是什么格式的数据. 才能正确的解析
                    headers={
                        "content-type": "application/json; charset=UTF-8"
                    },
                    meta={
                        "file_path": path,
                        "file_name": spi_name
                    },
                    callback=self.parse_question
                )
                pass

    def parse_question(self, resp):
        file_name = resp.meta['file_name']
        file_path = resp.meta['file_path']
        print(file_path, file_name)
        print(resp.json())




def resolve_gang(s):
    return s.replace("/", "").replace("\\", "")\
        .replace(" ", "").replace("\n", "").replace("\t", "")\
        .replace("\r", "")


""""
chapter-item
    自己的内容
    section-item
        自己的内容
        section-item
            自己的内容
            section-item
                自己的内容
                section-point-item
                    自己的内容
                    
                section-point-item
            section-item
        section-item
            section-point-item
                自己的内容
        section-item
    section-item
    section-item
    section-item
    section-item
chapter-item
chapter-item
chapter-item
    section-point-item
          自己的内容
          7  9
第1篇 工程经济
    第1章  资金时间价值计算及应用
        1.1  利息的计算
            1.1.1 利息和利率
                4 利息的额本质
第1篇 工程经济
    第1章  资金时间价值计算及应用
        1.1  利息的计算
            1.1.1 利息和利率
                2 利息
第1篇 工程经济
    第1章  资金时间价值计算及应用
        1.1  利息的计算
            1.1.2 利息的计算方法
第1篇 工程经济
    第1章  资金时间价值计算及应用
        1.1  利息的计算
            1.1.2 利息的计算方法
第1篇 工程经济
    第1章  资金时间价值计算及应用
        1.2  名义利率与有效利率的计算
第1篇 工程经济
    第1章  资金时间价值计算及应用
        1.2  名义利率与有效利率的计算
            1.2.2 有效利率的计算
          
          
          
"""














