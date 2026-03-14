# 用Flask作为后端服务器的开发
# pip install Flask==2.1.3
# pip install Flask-Cors==3.0.10
import requests
from flask import Flask, render_template, request

app = Flask("qiao")

# 编写函数, 当请求发送过来之后, 可以处理这个请求

# @app.route('/')   路由. 表示有人访问/的时候, 由qiao_func_1来完成请求的处理
@app.route("/")
def qiao_func_1():
    # 接收一些参数
    # args表示接收, url上面的?参数
    # http://xxx.xxx.com/s?username=xxx&password=xxxx
    # uname = request.args.get("username")
    # print("==========>", uname)

    # 请求头:
    print(request.headers)
    ua = request.headers.get("User-Agent")
    print(ua)
    if "python" in ua:
        return "滚"

    # 从服务器里查询出来一篇文章
    article = "哈哈哈哈哈"
    # f = open("index.html", mode='r', encoding="utf-8")
    # content = f.read()
    # # 做一下替换
    # content = content.replace("{{ wenzhang }}", article)
    # return content

    # 模板渲染
    # render_template默认读取的是templates文件夹
    # 读取index.html, 替换掉wenzhang, 更换成article
    # 此时, 数据是在服务器端, 放入html的. -> 服务器端渲染
    # 典型的: 豆瓣top250 -> 在抓包工具中能看到数据在页面源代码中的.
    return render_template("index.html", wenzhang=article)

# 请注意, 如果没有ajax, 页面上, 超链接, form表单. 这种东西
# 在被点击的时候, 向服务器发请求的逻辑, 都是全页面刷新.


# 为了防止出现跨域问题. 直接从服务器进入页面
@app.route("/goto_ajax_01")
def goto_ajax_01():
    return render_template("ajax_01.html")


@app.route("/ajax_01")
def ajax_01():
    print("你来了")
    return 'hello'


if __name__ == '__main__':
    # debug=True 修改代码后,会自动重启服务器, 偶尔会失效
    app.run(host='127.0.0.1', port=12581, debug=True)

# 发请求 -> 服务器 -> 返回页面
