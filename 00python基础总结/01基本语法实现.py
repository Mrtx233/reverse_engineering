# 变量
a = 123
b = "string"
c = True
print(a)
print(b)
print(c)

name = "Python"
text = "我正在学习" + name
print(text)

keyword = "python"
page = 2
url = f"https://example.com/search?q={keyword}&page={page}"
print(url)

text = "Python"
print(text[0])
print(text[1])
print(text[-1]) ##最后一位

title = "  Python 爬虫教程  "
clean_title = title.strip()
print(clean_title)

titles = ["文章1", "文章2", "文章3"]
print(titles[0])
print(titles[1])
print(titles[-1])
titles.append("文章1")
titles.append("文章2")
titles.append("文章3")
print(titles)

titles[0] = "新文章1"
print(titles)

titles.remove("文章2")
print(titles)

count = len(titles)
print(count)

article = {
    "title": "Python 爬虫教程",
    "url": "https://example.com/python",
}
print(article)
print(article.get("title"))
print(article.get("author"))

article["author"] = "Alice"
print(article.get("author"))

del article["author"]
print(article)

if "title" in article:
    print("存在 title 字段")
else:
    print("不存在 title 字段")