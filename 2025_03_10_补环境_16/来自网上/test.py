import time
import urllib.parse

from curl_cffi import requests
from lxml import etree
import execjs
import hashlib


cookies = {
    'NfBCSins2OywS': '600IbRp3kD05YcAzjOzanljQ0Ga7BBGzK6k3pwV2Z9GWyGIPIf3xdTuRIR0ieU709yY90DCf0WxTiCxngbGNSm9A',
    'STEP_TIPS_INDEX': 'true',
    'STEP_TIPS_RESULT': 'true',
    'acw_tc': 'b65cfd3217409102473242719e4d0f909f96a5c614051fb6975507d2bc55f5',
    'visualdevice': 'pc',
    'ariauseGraymode': 'false',
    'arialoadData': 'true',
    'ariawapChangeViewPort': 'true',
    'token': '',
    'NfBCSins2OywT': '0SwZLCs7lZ2NhA5rHccSaZqsB.4eczze2O7ZAKgQKovAFxoQ_dNMYQ1EBLc05B1YhNC7QMnyhMeFqyzTzDdiQbS31aGPVvmwFF1tmSQcWErmSTu2NASoAHEwFPv69VlyMaE0b6KVRr2VTmNRMsl5RBLDISL7B.pXKUFKBiQ8nM62Sjx9iQbcUnBLE4oMpWDzHiZtMziK_aelHQmTSoXM82N2iawbm9bIZ1XoyWkRq5I0jjXsaBy9P3fPFtiMYzUl6hdRFtEVK1NRx1khTfc_E1qw2g_rRtHqRjeud_pmPBn2TV4zdYyadUWrGyIFP7AioQRtpDRcLISIENWQc4wHKDNiqotbcEKvuc.R1_4wfnsW4ApdMeQbiyZMRszOkrqlNnfXx1CD9g2Al8HODlA9sd6yjQx_4gMCaTpJJRWs.G_0',
}

headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'https://www.nmpa.gov.cn/datasearch/search-result.html',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0',
    'sec-ch-ua': '"Not)A;Brand";v="99", "Microsoft Edge";v="127", "Chromium";v="127"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sign': 'b65b4cb52d8099827e9fad1c42bd2b64',
    'timestamp': '1740910433000',
    'token': 'false',
}
jsCaller = None

def get_data(params):
    global headers
    global jsCaller
    res1 = requests.get('https://www.nmpa.gov.cn/datasearch/data/nmpadata/search', params=params, cookies=cookies, headers=headers)
    if res1.status_code != 200:
        tree = etree.HTML(res1.text)
        content_code = tree.xpath('//meta/@content')[-1]
        print('content:', content_code)
        ts = tree.xpath('//script/text()')[0]
        print('ts:',ts)
        ts_code = 'https://www.nmpa.gov.cn' + tree.xpath('//script[2]/@src')[0]
        print('ts_code:', ts_code)

        with open("tscode.js", "w", encoding="utf-8") as file:
            file.write(requests.get(ts_code, headers=headers).text)

        with open('./药监局.js', 'r', encoding='utf-8') as f:
            js = f.read().replace('content_code', content_code).replace("'ts_'", ts)


        with open("xxxx.js", mode="w", encoding="utf-8") as f:
            f.write(js)

        jsCaller = execjs.compile(js)

        ck = jsCaller.call('get_ck')
        print('ck:',ck)
        keyword = ck.split(';')[0]
        print('keyword:',keyword)
        cookies_update = {
            keyword.split('=')[0]: keyword.split('=')[1],
        }

        cookies.update(cookies_update)

    headers = {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Referer': 'https://www.nmpa.gov.cn/datasearch/search-result.html',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0',
        'sec-ch-ua': '"Not)A;Brand";v="99", "Microsoft Edge";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sign': '',
        'timestamp': '',
        'token': 'false',
    }

    # isSenior=N&itemIds=ff80808183cad75001840881f848179f&searchValue=碳酸&timestamp=1740913385000
    # isSenior=N&itemId=ff80808183cad75001840881f848179f&pageNum=1&pageSize=10&searchValue=碳酸&timestamp=1740913965000
    # isSenior=N&itemId=ff80808183cad75001840881f848179f&pageNum=1&pageSize=10&searchValue=碳酸&timestamp=1740910433000

    params_str = ""
    for key in params:
        params_str += key + "=" + params[key] + "&"
    params_str = params_str.strip("&")

    params_str: str = jsCaller.call('jsonMD5ToStr', params_str)

    headers["sign"] = hashlib.md5(params_str.encode()).hexdigest()
    headers["timestamp"] = params["timestamp"]

    response = requests.get('https://www.nmpa.gov.cn/datasearch/data/nmpadata/search', params=params,
                            cookies=cookies, headers=headers)
    print(response.status_code)
    print(response.text)

get_data({
    'isSenior': 'N',
    'itemId': 'ff80808183cad75001840881f848179f',
    'pageNum': '1',
    'pageSize': '10',
    'searchValue': '碳酸',
    'timestamp': str(int(time.time()) * 1000),
})
get_data({
    'isSenior': 'N',
    'itemId': 'ff80808183cad75001840881f848179f',
    'pageNum': '2',
    'pageSize': '10',
    'searchValue': '碳酸',
    'timestamp': str(int(time.time()) * 1000),
})
get_data({
    'isSenior': 'N',
    'itemId': 'ff80808183cad75001840881f848179f',
    'pageNum': '3',
    'pageSize': '10',
    'searchValue': '碳酸',
    'timestamp': str(int(time.time()) * 1000),
})
