import time

from DrissionPage import Chromium

web = Chromium()

tab = web.latest_tab
# #
tab.get("https://www.zhipin.com/beijing/?seoRefer=index")
# # # # 第一种输入方案
# # # # # ....100个操作 -> 1分钟
# # #
# # #
# # # # 接着写...
tab.ele('.ipt-search').input("爬虫")
# # #
# # # # 点击按钮
# # # # ka = search_box_index 来定位?
tab.ele("@ka=search_box_index").click()
#
# # # 第二种输入方案
# #               移动到xxx框框上      点击      输入xxx      移动到xxxxx                    点击
# # tab.actions.move_to(".ipt-search").click().type("爬虫").move_to("@ka=search_box_index").click()

# input("手动去调整, 调整页码之后, 按回车!!!!")

while 1:
    tab.wait.ele_displayed(".job-list-box")
    li_list = tab.ele(".job-list-box").children("tag:li")
    for li in li_list[:3]:
        # 每一个li对应有一个超链接. 进入到详情页, 开始数据采集
        tab.wait.ele_displayed(".job-name")
        new_tab = li.ele(".job-name").click.for_new_tab()
        print(new_tab.tab_id)
        # 关于等待 https://drissionpage.cn/browser_control/waiting
        # new_tab.wait.load_start()
        txt = new_tab.ele(".job-sec-text").text
        print("======>", txt.replace("\n", "").replace("\r", ""))
        new_tab.close()  # ????
        print("==============")
    tab.wait.ele_displayed(".ui-icon-arrow-right")
    cla = tab.ele(".ui-icon-arrow-right").parent().attr("class")
    if cla == 'disabled':
        print("GG")
        break
    else:
        print("one page!!!")
        tab.ele(".ui-icon-arrow-right").click()
