# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface

from itemadapter import ItemAdapter
import os
# pip install PIL
from scrapy.pipelines.images import ImagesPipeline
from lxml import etree
import scrapy

class WangxiaoPipeline:
    def process_item(self, item, spider):
        file_name = item['file_name']
        file_path = item['file_path']
        question_info = item['question_info']
        # 1. 文件夹
        if not os.path.exists(file_path):
            os.makedirs(file_path)

        # 2. 文件的保存形式
        # txt, csv -> 纯文本是不行的
        # html, -> 换行需要特殊处理
        # markdown -> 正常文本, 支持html的
        with open(file_path+"/"+file_name + ".md", mode="a", encoding="utf-8") as f:
            f.write(question_info)
        return item



# 1.需要完成图片的下载
# 2.更改图片的url, 更换成本地路径
class WangxiaoImagePipeline(ImagesPipeline):

    def get_media_requests(self, item, info):
        file_path = item['file_path']
        file_name = item['file_name']
        # 给请求对象, 图片下载地址
        hm = etree.HTML(item['question_info'])
        srcs = hm.xpath("//img/@src")
        for src in srcs:
            yield scrapy.Request(
                url=src,
                meta={
                    "file_path": file_path,  # 文件夹
                    "file_name": file_name,  # 文件夹
                    "url": src   # 文件名
                }
            )

    def file_path(self, request, response=None, info=None, *, item=None):
        # 返回保存路径
        file_path = request.meta['file_path']
        file_name = request.meta['file_name']

        url = request.meta['url']
        # 图片保存的文件夹
        img_path = file_path + "/" + file_name + "_img"
        # 文件名
        img_name = url.split("/")[-1]
        return img_path + "/" + img_name

    def item_completed(self, results, item, info):
        # 文件下载完成之后, 要去做什么
        # item中所有的图片下载完毕之后, 需要更换成本地路径
        # 能否拿到每一张图片的url和本地路径
        # print(results)  # 如果没有图片, 就是空
        # results里面放的就是图片的下载情况
        if results:
            # [(status, local), (), ()]
            for status, local in results:
                if status:  # 下载成功的
                    url = local['url']
                    path = local['path']
                    # 计算本地存储路径(相对路径)
                    local_path = "./" + "/".join(path.split("/")[-2:])
                    # 把网路路径, 更换成本地路径
                    item['question_info'] = item['question_info'].replace(url, local_path)
        print("保存成功")
        return item  # 给下一个管道传递东西?

