from flask import Flask
from flask import Response

app = Flask(__name__)
@app.route('/api/hello')

def hello():
    return Response("Hello, World!", status=200)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)
