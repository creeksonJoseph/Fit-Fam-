from flask import Flask, request, jsonify, session
from flask_cors import CORS
from flask_restful import Api,Resource
from models import db
from routes import User_routes, Workout_routes, Progress_routes, Friends_routes

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///fitness_app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'secret_key'
app.config['SESSION_TYPE'] = 'filesystem'


CORS(app)
api = Api(app)
db.init_app(app)
app.register_blueprint(User_routes, url_prefix='/users')
app.register_blueprint(Workout_routes, url_prefix='/workouts')
app.register_blueprint(Progress_routes, url_prefix='/progress')
app.register_blueprint(Friends_routes, url_prefix='/friends')


if __name__ == '__main__':
    app.run(debug=True)