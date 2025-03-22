from flask import Flask
from flask import Response
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/api/hello')
def hello():
    data = {
        "message": "Hello World!"
    }
    return Response(json.dumps(data), mimetype='application/json')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)
