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
                    url="https://ks.wangxiao.cn/exampoint/list?sign=cfe1",  # 测试的时候, 用一级建造师进行测试
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

    def parse_question(self, resp):
        file_name = resp.meta['file_name']
        file_path = resp.meta['file_path']

        dic = resp.json()

        data = dic.get("Data")

        if not data:    # 容错. 如果Data不存在, 重试
            req = resp.request
            req.dont_filter = True
            count = req.meta.get("count")
            if not count:
                count = 1
            else:
                count += 1
            if count > 5:
                return
            req.meta['count'] = count
            print(f"重试", count, "次")
            return req

        for item in data:  # 一个item就是一个题型
            materials = item['materials']
            paper_rule = item['paperRule']
            questions = item['questions']

            # 题型,打头
            # 单项选择题(每题的备选项中。只有1个最符合题意)
            # 1. xxx
            # 2. xxx
            question_info = paper_rule['content'] + "\n"

            if materials:
                # 材料题
                """
                材料题:
                第一题
                背景材料: 
                    防静电索拉卡九分裤拉倒随机发拉萨电极法卡拉季手打
                题1:
                    xxxx
                题2:
                    xxxx
                """
                for mater in materials: # 每一个材料
                    # 材料本身
                    material = mater['material']
                    material_title = material['title']
                    material_content = material['content']
                    question_info += material_title + "\n" + material_content + "\n"

                    # 材料对应的题目
                    question_info = question_handle(question_info, mater['questions'])
            else:
                # 处理题目内容  写入 question_info
                question_info = question_handle(question_info, questions)

            print("返回了一批题目")
            yield {
                "file_path": file_path,
                "file_name": file_name,
                "question_info": question_info
            }


def question_handle(question_info, questions):
    # 正常题
    for i in range(len(questions)):
        q = questions[i]
        q_content = q['content']
        # options:[]  options:null
        q_options = q.get("options")
        if not q_options:
            q_options = []
        q_text_analysis = q['textAnalysis']

        # 记录题目
        question_info += str(i + 1) + ". " + q_content + "\n"

        # 选项
        right_opt_list = []  # 装正确选项
        for opt in q_options:
            opt_name = opt['name']  # A
            opt_content = opt['content']  # 1两
            opt_is_right = opt['isRight']  # 该选项是否正确
            if opt_is_right:
                right_opt_list.append(opt_name)  # 装正确选项
            # 记录选项
            question_info += opt_name + "." + opt_content + "\n"

        # 答案   [A,B,D]
        question_info += "正确答案: [" + ",".join(right_opt_list) + "] \n"
        # 解析
        question_info += "答案解析: " + q_text_analysis + "\n"

    return question_info  # 拼接完的题目信息返回


def resolve_gang(s):
    return s.replace("/", "").replace("\\", "")\
        .replace(" ", "").replace("\n", "").replace("\t", "")\
        .replace("\r", "")


""""
chapter-item=
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

"""
一个item
选择题: -> 题型 

1.樵夫昨天吃多少米饭?  -> 题目
A. 1两              -> 选项
B. 2两
C. 3两

答案: A              -> 答案
解析: 樵夫昨天吃的不多. -> 解析

2.樵夫昨天吃多少米饭?
A. 1两
B. 2两
C. 3两

答案: A
解析: 樵夫昨天吃的不多. 

一个item
多项选择题: -> 题型 
"""
