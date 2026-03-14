# 获取正确的页面源代码(不包括ajax请求)
import requests

from DrissionPage import Chromium


# 加载页面
web = Chromium()
tab = web.latest_tab
tab.get("http://epub.cnipa.gov.cn/")

# 拿到当前页面上的cookie值. 转化成字典
tab.session_storage()
cks = tab.cookies().as_dict()

tab.change_mode()
token = tab.ele('@name=__RequestVerificationToken').attr("value")
print(token)

# tab.get("http://epub.cnipa.gov.cn/")

# # 新的请求都要来一个新的cookie
# # 所有的新请求都会触发open/send  => cookie
# tab.post("http://epub.cnipa.gov.cn/Dxb/IndexPDQuery",
#         data={
#             "Ggr": "20250314",
#             "pubtype": "FMGB",
#             "__RequestVerificationToken": token
#         })
#
# print(tab.response.text)

