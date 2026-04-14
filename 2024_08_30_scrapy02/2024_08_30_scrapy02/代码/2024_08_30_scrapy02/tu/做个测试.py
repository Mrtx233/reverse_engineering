import requests

url = "https://desk-fd.zol-img.com.cn/t_s1200x574c5/g2/M00/0D/0C/ChMlWl7WGpOIP-5kAAOR7AhEDyYAAPsKwEWpmYAA5IE726.jpg"
resp =requests.get(url, headers={
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "cookie": "ip_ck=3Yqq14y/v8EuOTc2MjA1LjE3MDE2NzE2NjM%3D; z_pro_city=s_provice%3Dbeijing%26s_city%3Dbeijing; userProvinceId=1; userCityId=0; userCountyId=0; userLocationId=1; Hm_lvt_ae5edc2bc4fc71370807f6187f0a2dd0=1724053531,1725013913; HMACCOUNT=0BFAD8D83E97B549; lv=1725025604; vn=12; z_day=icnmo11564%3D1%26ixgo20%3D1; Adshow=5; Hm_lpvt_ae5edc2bc4fc71370807f6187f0a2dd0=1725025698; questionnaire_pv=1724976004",
    "dnt": "1",
    "pragma": "no-cache",
    "priority": "u=0, i",
"referer": "https://desk.zol.com.cn/bizhi/9109_111583_2.html",
    "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
})

print(resp.content)