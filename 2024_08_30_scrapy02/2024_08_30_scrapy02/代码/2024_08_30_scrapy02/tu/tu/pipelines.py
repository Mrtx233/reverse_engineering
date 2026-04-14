# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
import scrapy
from itemadapter import ItemAdapter

from scrapy.pipelines.images import ImagesPipeline



class TuPipeline:
    def process_item(self, item, spider):
        print(item)
        # import requests
        return item


# 下载图片需要安装库:
# pip install pillow
class MyTuPipeline(ImagesPipeline):
    # 三个方法
    # 发请求的
    def get_media_requests(self, item, info):
        yield scrapy.Request(  # 你只需要发个请求就完事儿了
            url=item['img_src'],
            headers={
                # referer, 从外面传过来
                "referer": item['referer']
            },
            meta={  # 给后面传递消息
                "title": item["title"],
                "img_src": item["img_src"],
            }
        )

    # 图片保存路径
    def file_path(self, request, response=None, info=None, *, item=None):
        print("OK?")
        my_path = "god/"
        title = request.meta["title"]
        file_name = request.meta["img_src"].split("/")[-1]
        print(my_path + title + "/" + file_name)
        print("OK!")
        return my_path + title + "/" + file_name

    # 下载完成了之后, 收尾的.
    def item_completed(self, results, item, info):
        # 给下一个管道传递信息
        print(results)
        return item
