# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class Youxi2Item(scrapy.Item):
    name = scrapy.Field() # scrapy规定Item的属性访问, 必须通过['xxx']访问
    lei = scrapy.Field()
    tm = scrapy.Field()

    # def xxxxxx(self):
    #     self.name = name
    #     self.lei = lei
    #     self.tm = tm

