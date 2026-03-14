# 打开浏览器, 输入百度网站, 随便搜索一些东西. 获取数据

from DrissionPage import Chromium
import time

# 创建浏览器对象
web = Chromium()

# 捕获到第一个tab
tab = web.latest_tab

# time.sleep(3)

# 输入网址.
tab.get("https://qikan.cqvip.com/Qikan/Search/Advance?from=index")


# ele(???)表示查找页面上的元素
# 1. 支持css选择器
# 2. 如果用标签来进行检索. 请注意,  前面要加上tag:   t:
# 3. 支持xpath.
# 4. 支持文本文档定位.

# bs4   find  find_all
# tab.ele("#kw").input("大橘为重")
#
# # 点击按钮
# tab.ele("#su").click()
#
# # 获取到所有的h3标签. 获取里面的文本
# h3_list = tab.eles("t:h3")
# for h3 in h3_list:
#     print(h3.text)
