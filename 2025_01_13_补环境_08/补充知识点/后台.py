from sanic import Sanic, text
from sanic_cors import CORS

app = Sanic("haha")
CORS(app)

@app.route("/get")
def func(req):
    print(req.headers)
    return text("i love you!!!!")

@app.route("/post", methods=["POST"])
def func1(req):
    print(req.headers)
    print(req)
    return text("i love you!!!!")


if __name__ == '__main__':
    app.run()
