# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import os


class ShuPipeline:
    def process_item(self, item, spider):
        # print(item)
        book_name = item['book_name'].replace("《", "").replace("》", "")
        title = item['title'].replace("·", "").replace(" ", "").replace("\n", "")
        print(book_name, title)
        # 如何存储到一起.
        # 连接数据库
        return item
