import execjs
import requests
from lxml import etree

url = 'https://www.nmpa.gov.cn/xxgk/kpzhsh/kpzhshyp/index.html'

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Not)A;Brand";v="99", "Microsoft Edge";v="127", "Chromium";v="127"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

session = requests.Session()
res1 = session.get('https://www.nmpa.gov.cn/xxgk/kpzhsh/kpzhshyp/index.html', headers=headers)
print('res1:', res1)
print('res1.text:', res1.text)
tree = etree.HTML(res1.text)
content_code = tree.xpath('//meta/@content')[-1]
print('content:', content_code)
ts = tree.xpath('//script/text()')[0]
# print('ts:',ts)
ts_code = 'https://www.nmpa.gov.cn' + tree.xpath('//script[2]/@src')[0]
print('ts_code:', ts_code)

with open("tscode.js", "w", encoding="utf-8") as file:
    headers['Referer'] = 'https://www.nmpa.gov.cn/xxgk/kpzhsh/kpzhshyp/index.html'
    file.write(requests.get(ts_code, headers=headers).text)

with open('./药监局.js', 'r', encoding='utf-8') as f:
    js = f.read().replace('content_code', content_code).replace("'ts_'", ts)



ck = execjs.compile(js).call('get_ck')
# print('ck:',ck)
keyword = ck.split(';')[0]

print('keyword:',keyword)

cookies = {
    keyword.split('=')[0]: keyword.split('=')[1],
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://www.nmpa.gov.cn/xxgk/kpzhsh/kpzhshyp/index.html',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Not)A;Brand";v="99", "Microsoft Edge";v="127", "Chromium";v="127"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

params = {
    'itemId': 'ff80808183cad75001840881f848179f',
    'isSenior': 'N',
    'searchValue': '碳酸',
    'pageNum': '1',
    'pageSize': '10',
    'timestamp': '1740910433000',
}

response = requests.get('https://www.nmpa.gov.cn/xxgk/kpzhsh/kpzhshyp/index.html',
                        cookies=cookies, headers=headers)
print(response.text)



