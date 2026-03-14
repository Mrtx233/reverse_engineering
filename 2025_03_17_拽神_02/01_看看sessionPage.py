from DrissionPage import Chromium, SessionPage


session = SessionPage()


# requests.get()
# 此处drission不返回任何响应对象
session.get("https://www.yituyu.com/", headers={
}, cookies={}, proxies={}, params={})

# 和js渲染没有关系. 默认情况下你就当它是requests
print(session.response.request.headers)

# 7777 9999
