from bs4 import BeautifulSoup

soup = BeautifulSoup()
soup.select_one()
import json
json.dumps()

import aiohttp


async def func():  # 异步任务
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as resp:
            await resp.text(encoding="utf-8")
        import pymysql

        pymysql.connect