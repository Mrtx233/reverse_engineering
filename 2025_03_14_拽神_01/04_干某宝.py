import time

from DrissionPage import Chromium


web = Chromium()

tab = web.latest_tab
# tab.get("https://tbzb.taobao.com/live?spm=a1z10.1-b-s.1997427721.dshopLive.677f7371L1wm5H&liveId=511537403678")
#
# input("手动去登陆. 登陆完成后, 敲回车")

# 点开全部商品
# tab.ele("@class^allGoodsWrapper--").click()

qiang_name = "I FOUND YOU"

while 1:
    # 开始考虑获取商品信息. 轮询.
    divs = tab.ele('.ReactVirtualized__Grid__innerScrollContainer').children("tag:div")
    for div in divs:
        title = div.ele('@class^titleText--').text
        print("采集到正在热卖中的商品", title)
        if qiang_name in title:  # 你要抢的东西上架了
            new_tab = div.ele('@class^buyText--').click.for_new_tab()
            new_tab.ele("@data-usage$goBuyClick").click()
            # 提交订单...

    time.sleep(1)
