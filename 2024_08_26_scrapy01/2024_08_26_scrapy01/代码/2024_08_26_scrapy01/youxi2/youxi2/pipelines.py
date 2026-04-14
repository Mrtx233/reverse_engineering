# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import pymysql

# 管道, 你必须在settings.py里面把它注册上, 否则不可用.
class Youxi2Pipeline:
    # 希望, 程序开始的时候, open
    def open_spider(self, spider):
       self.f = open("data.csv", mode="w", encoding="utf-8")

    # 程序结束的时候, close
    def close_spider(self, spider):
        self.f.close()

    def process_item(self, item, spider):
        print(item)
        # 保存数据
        self.f.write(f"{item['name']},{item['lei']},{item['tm']}")
        self.f.write("\n")
        item['haha'] = "呵呵"
        return item  # 返回数据, 给下一个管道使用

#
# class Youxi2Pipeline22222:
#     def process_item(self, item, spider):
#         print('管道2222中得到的数据', item)
#         return item



class Youxi2Pipeline_toMySQL:
    # 希望, 程序开始的时候, open
    def open_spider(self, spider):
        self.conn = pymysql.connect(
           host="localhost",
           port=3306,
           user="root",
           password="root",  # ???
           database="qiaofu_ceshi"
        )
        self.cursor = self.conn.cursor()

    def close_spider(self, spider):
        try:
            self.cursor.close()
            self.conn.close()
        except Exception as e:
            print("关闭连接出错, 没关系")

    def process_item(self, item, spider):
        print(item)
        try:
            sql = "insert into game(name, lei, tm) values (%s, %s, %s)"
            self.cursor.execute(sql, (item['name'], item['lei'], item['tm']))
            self.conn.commit()
        except Exception as e:  # 该有的信息一定要有
            print("一条数据, 保存出错", e)
            print(item)
            self.conn.rollback()
        return item
