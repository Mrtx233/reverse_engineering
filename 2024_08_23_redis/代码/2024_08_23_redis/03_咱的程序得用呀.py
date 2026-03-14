import requests


def get_proxy_ip():
    # 为什么这里可以不给头, 我自己的服务器. 没有检测....
    resp = requests.get("http://127.0.0.1:10086/get_ip")
    return "http://" + resp.text + "/"

def ceshi():
    # 测试的url
    url = "http://api.ipify.org/"

    headers = {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-encoding": "gzip, deflate, br, zstd",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "dnt": "1",
        "pragma": "no-cache",
        "priority": "u=0, i",
        "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
    }

    session = requests.session()
    session.headers = headers
    ip = get_proxy_ip()
    print("获取到的免费代理IP", ip)
    my_proxies = {
        # url的协议:  代理的ip地址
        "http": ip,
        "https": ip,
    }
    resp = session.get(url, proxies=my_proxies, verify=False)
    print(resp.text)

    # 挂上代理: 119.9.77.49
    # 本机ip: 123.112.16.7

if __name__ == '__main__':
    ceshi()
