from DrissionPage import Chromium
import time

web = Chromium()

tab = web.latest_tab

tab.get("https://music.163.com/#/song?id=1325905146")


time.sleep(1)
tab.wait.ele_displayed("@text()=登录")
t = tab.ele("@text()=登录").click()

tab.ele('@text()=选择其他登录模式').click()
tab.ele('#j-official-terms').click()
tab.ele('@text()=网易邮箱账号登录').click()

# 以下标签其实都是在iframe中的. 如果是其他框架, 平台, 都需要单独处理iframe的切换
# drissionPage是不需要切换的.
tab.ele('@data-loginname=loginEmail').input("homexue@126.com")
tab.ele('@autocomplete=new-password').input("123456")
tab.ele('@data-action=dologin').click()
