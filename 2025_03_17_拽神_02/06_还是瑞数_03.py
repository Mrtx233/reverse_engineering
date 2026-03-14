

from DrissionPage import Chromium
from lxml import etree
import json
from urllib.parse import urlencode


# 加载页面
web = Chromium()
tab = web.latest_tab
# tab.get("http://epub.cnipa.gov.cn/")
#
# tab.ele("@text()=2025.03.14  发明公布已更新").click()
#
token = tab.ele('x://*[@name="__RequestVerificationToken"]').attr("value")
print(token)

def get_data(page, lastAn):
    # 准备参数
    form_data = {
        "searchCatalogInfo.Pubtype": "1",
        "searchCatalogInfo.Ggr_Begin": "20250314",
        "searchCatalogInfo.Ggr_End": "",
        "searchCatalogInfo.Pd_Begin": "",
        "searchCatalogInfo.Pd_End": "",
        "searchCatalogInfo.An": "",
        "searchCatalogInfo.Pn": "",
        "searchCatalogInfo.Ad_Begin": "",
        "searchCatalogInfo.Ad_End": "",
        "searchCatalogInfo.E71_73": "",
        "searchCatalogInfo.E72": "",
        "searchCatalogInfo.Edz": "",
        "searchCatalogInfo.E51": "",
        "searchCatalogInfo.Ti": "",
        "searchCatalogInfo.Abs": "",
        "searchCatalogInfo.Edl": "",
        "searchCatalogInfo.E74": "",
        "searchCatalogInfo.E30": "",
        "searchCatalogInfo.E66": "",
        "searchCatalogInfo.E62": "",
        "searchCatalogInfo.E83": "",
        "searchCatalogInfo.E85": "",
        "searchCatalogInfo.E86": "",
        "searchCatalogInfo.E87": "",
        "pageModel.pageNum": page,
        "pageModel.pageSize": "10",
        "sortFiled": "ggr_desc",
        "searchAfter": f"20250314;{lastAn}",
        "showModel": "1",
        "isOr": "False",
        "__RequestVerificationToken": token
    }
    form_data = urlencode(form_data)

    tab.listen.start("Dxb/PageQuery")
    # 准备js代码.
    tab.run_js(f"""
    qiao_xhr = new XMLHttpRequest();
    qiao_xhr.open("post", "http://epub.cnipa.gov.cn/Dxb/PageQuery")
    qiao_xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")
    qiao_xhr.send("{form_data}");
    """)

    for item in tab.listen.steps(1):
        tree = etree.HTML(item.response.body)
        txt = tree.xpath("//h1/text()")
        lastAn = tree.xpath("//*[@id='lastAn']/@value")[0]
        print(lastAn, txt)

    tab.listen.stop()
    return lastAn


lastAn = ""
for i in range(1, 6):
    lastAn = get_data(i, lastAn)
