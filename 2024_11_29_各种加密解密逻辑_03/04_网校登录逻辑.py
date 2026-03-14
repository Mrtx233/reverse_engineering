# // 先加载登录页面 -> 加载cookie -> 先拿到验证码图片 -> 识别验证码 -> getTime -> 返回服务器时间 -> 和密码进行rsa加密 -> 发登录请求
import requests
import base64
import ddddocr
import execjs
import json
from urllib.parse import quote


f = open("zhongda.js", mode='r', encoding="utf-8")
js_code = f.read()
f.close()
js = execjs.compile(js_code)

session = requests.session()
session.headers = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "connection": "keep-alive",
    "dnt": "1",
    "host": "user.wangxiao.cn", # ks.wangxiao.cn
    "pragma": "no-cache",
    "referer": "https://ks.wangxiao.cn/",
    "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-site",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
}

# 先加载登录页面
login_page_url = 'https://user.wangxiao.cn/login?url=https%3A%2F%2Fks.wangxiao.cn%2Fexampoint%2Flist%3Fsign%3Djz1'
session.get(login_page_url)

# 先拿到验证码图片 -> 识别验证码
verify_img_url = "https://user.wangxiao.cn/apis//common/getImageCaptcha"
resp = session.post(verify_img_url, headers={
    "content-type":"application/json;charset=UTF-8"  # 特殊的头信息
})
img_bs = base64.b64decode(resp.json()['data'].split(',')[-1])
with open("tu.png", mode="wb") as f:
    f.write(img_bs)

# 识别验证码
dddd = ddddocr.DdddOcr(show_ad=False)
verify_code = dddd.classification(img_bs)

# 获取服务器时间
get_time_url = "https://user.wangxiao.cn/apis//common/getTime"
get_time_resp = session.post(get_time_url, headers={
    "content-type": "application/json;charset=UTF-8"  # 特殊的头信息
})

tm = get_time_resp.json()['data']

password = "Aq78274599"
pws = js.call('encryptFn', password + str(tm))

# 组织请求参数
payload_data = {
    "imageCaptchaCode": verify_code,
    "userName": "18053465528",
    "password": pws
}

login_url = "https://user.wangxiao.cn/apis//login/passwordLogin"
login_resp = session.post(login_url, data=json.dumps(payload_data, separators=(',', ':')), headers={
    "content-type":"application/json;charset=UTF-8"
})
# {"code":9,"msg":"用户名或密码错误","data":null,"operation_date":"2024-11-29 22:24:48"}
# 整体流程没有问题.

login_data = login_resp.json()['data']

session.cookies['autoLogin'] = "null"
session.cookies['userInfo'] = json.dumps(login_data, separators=(',', ':'))
session.cookies['token'] = login_data['token']

session.cookies['UserCookieName'] = login_data['userName']
session.cookies['OldUsername2'] = login_data['userNameCookies']
session.cookies['OldUsername'] = login_data['userNameCookies']
session.cookies['OldPassword'] = login_data['passwordCookies']
session.cookies['UserCookieName_'] = login_data['userName']
session.cookies['OldUsername2_'] = login_data['userNameCookies']
session.cookies['OldUsername_'] = login_data['userNameCookies']
session.cookies['OldPassword_'] = login_data['passwordCookies']
session.cookies[login_data['userName']+'_exam'] = login_data['sign']

print(session.cookies)
# 尝试加载数据..
data_url = "https://ks.wangxiao.cn/practice/listQuestions"
pay_data = '{"practiceType":"2","sign":"jz1","subsign":"8cc80ffb9a4a5c114953","examPointType":"","questionType":"","top":"30"}'

data_resp = session.post(data_url, data=pay_data, headers={
    "content-type": "application/json; charset=UTF-8",
    "host": "ks.wangxiao.cn",   # 杀死骆驼的最后一根稻草
})

print(data_resp.text)
print(data_resp.request.headers)

# 登陆之后 -> 肯定通过某种形式, 向cookie中记录了登陆信息(set-cookie, js) -> 拿到数据  777999
# <RequestsCookieJar[<Cookie OldPassword=wD0/Ak7WqhJZu0X5A8MMEw== for />, <Cookie OldPassword_=wD0/Ak7WqhJZu0X5A8MMEw== for />, <Cookie OldUsername=HoVayluo5F2ZAoRvYnt0jg== for />, <Cookie OldUsername2=HoVayluo5F2ZAoRvYnt0jg== for />, <Cookie OldUsername2_=HoVayluo5F2ZAoRvYnt0jg== for />, <Cookie OldUsername_=HoVayluo5F2ZAoRvYnt0jg== for />, <Cookie UserCookieName=pc_778682568 for />, <Cookie UserCookieName_=pc_778682568 for />, <Cookie acw_tc=6f3e5c0917328904110438780e0a1f54ca0cfbcc23d3ed113c82075c30 for />, <Cookie autoLogin=null for />, <Cookie pc_778682568_exam=fangchan for />, <Cookie token=38d0a004-9814-4ddb-a9d4-5e51bcd6eab7 for />, <Cookie userInfo=%7B%22userName%22%3A%22pc_778682568%22%2C%22token%22%3A%2238d0a004-9814-4ddb-a9d4-5e51bcd6eab7%22%2C%22headImg%22%3Anull%2C%22nickName%22%3A%22180%2A%2A%2A%2A5528%22%2C%22sign%22%3A%22fangchan%22%2C%22isBindingMobile%22%3A%221%22%2C%22isSubPa%22%3A%220%22%2C%22userNameCookies%22%3A%22HoVayluo5F2ZAoRvYnt0jg%3D%3D%22%2C%22passwordCookies%22%3A%22wD0/Ak7WqhJZu0X5A8MMEw%3D%3D%22%7D for />, <Cookie sessionId=1732892156546 for user.wangxiao.cn/>]>

