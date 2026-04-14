# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter


class YouxiPipeline:
    # item: 数据
    # process: 处理
    # process_item() 处理数据
    def process_item(self, item, spider):  # 保存数据的
        return item


