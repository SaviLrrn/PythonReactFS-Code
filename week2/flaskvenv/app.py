from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

users =[
    {'id':1 , 'name': 'Alice'},
    {'id':2 , 'name': 'Bob'},
    {'id':3 , 'name': 'Charlie'}
]

@app.route('/users')
def get_users():
    return jsonify(users)

if __name__ == '__main__':
    app.run()