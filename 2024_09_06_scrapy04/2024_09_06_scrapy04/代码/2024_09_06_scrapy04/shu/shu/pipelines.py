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
        content = item['content'].replace("·", "").replace(" ", "").replace("\n", "").replace("\xa0", "")

        save_dir = "书籍内容/"+book_name
        if not os.path.exists(save_dir):
            os.makedirs(save_dir)  # 创建文件夹

        f = open(save_dir + "/" + title, mode="w", encoding="utf-8")
        f.write(content)
        f.close()
        print("文件保存成功", book_name, title)
        return item
