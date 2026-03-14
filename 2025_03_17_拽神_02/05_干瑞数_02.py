from DrissionPage import Chromium
from lxml import etree
import json
from urllib.parse import quote


# 加载页面
web = Chromium()
tab = web.latest_tab
# tab.get("https://qikan.cqvip.com/Qikan/Search/Advance?from=index")
#
# tab.ele(".layui-btn adv-search behavior-advancesearch").click()

def get_data(page):
    # 开启监听
    tab.listen.start("Search/SearchList")

    # 准备参数
    form_data = {"ObjectType": 1, "SearchKeyList": [], "SearchExpression": "", "BeginYear": "", "EndYear": "",
                 "JournalRange": "", "DomainRange": "", "PageSize": "20", "PageNum": str(page), "Sort": "0",
                 "ClusterFilter": "",
                 "SType": "", "StrIds": "", "UpdateTimeType": "", "ClusterUseType": "Article", "IsNoteHistory": 1,
                 "AdvShowTitle": "空检索", "ObjectId": "", "ObjectSearchType": "0", "ChineseEnglishExtend": "0",
                 "SynonymExtend": "0", "ShowTotalCount": "0", "AdvTabGuid": "2d3c2601-c5d7-053e-2772-9a0bb081b1ec"}
    # 把参数 -> json -> urlencode
    form_data_str = json.dumps(form_data, separators=(',', ':'))

    # 进行urlencode
    form_data_str = quote(form_data_str)

    # 运行js
    tab.run_js(f'''
        qiao_xhr = new XMLHttpRequest();
        qiao_xhr.open("post", "https://qikan.cqvip.com/Search/SearchList")
        qiao_xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")
    
        // js发送ajax的时候
        // form data -> xxx=xxxx&xxxx=xxx
        // request payload -> {{xxx: xxx, xxx: xxx}}
        qiao_xhr.send("searchParamModel={form_data_str}");
    ''')

    # 当请求完成后. 可以获取到返回的信息, 并且只有一个响应
    for item in tab.listen.steps(1):
        resp_text = item.response.body
        # 对文本进行解析
        tree = etree.HTML(resp_text)
        dls = tree.xpath("//div[@id='detail']/dl")
        for dl in dls:
            title = dl.xpath("./dt/a/text()")
            print(title)

    tab.listen.stop()

for i in range(1, 11):
    get_data(i)
