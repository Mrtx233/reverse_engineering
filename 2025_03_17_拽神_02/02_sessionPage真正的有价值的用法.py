from DrissionPage import Chromium

web = Chromium()  # 这是d模式
tab = web.latest_tab
tab.get("https://www.yituyu.com/")

# 接下来要做的事情其实是开始抓数据了...和页面操作/渲染是没有关系的..
# 可以更换模式, 它会自动复刻浏览器的信息. 浏览器的一些信息,cookie信息.
tab.change_mode()

imgs = tab.ele(".databox").eles("t:img")
i = 0
for img in imgs:
    tab.get(img.attr("src"))
    print(tab.response.request.headers)
    with open(f"{i}.jpg", mode="wb") as f:
        f.write(tab.response.content)
    i = i + 1
