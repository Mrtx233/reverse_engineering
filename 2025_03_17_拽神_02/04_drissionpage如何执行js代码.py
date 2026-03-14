
# 小红书
# 打开首页, 不停的向下滚....随着滚动. 就会触发新的请求. 如果还能拿到这个请求的信息. 那我就拿到数据了

from DrissionPage import Chromium

web = Chromium()
tab = web.latest_tab
tab.get("https://www.xiaohongshu.com/explore")

# 向下滚... 借助js来完成滚动
js_code = """
for (let i = 0 ; i < 999; i++) clearInterval(i);
setInterval(function (){
    window.scrollBy(0, 2000);
}, 500);
"""
# 执行js代码
tab.run_js(js_code)

# 如何获取数据, 监听网络数据包
tab.listen.start("api/sns/web/v1/homefeed")

page = 0
# 当有这个请求出现的时候. 能拿到数据
for item in tab.listen.steps():  # 程序会阻塞在这里.
    # 在这里可以拿到数据
    # item: DataPacket
    print(item.response.body)
    # 100条数据.
    if page == 100:
        break
    page += 1
