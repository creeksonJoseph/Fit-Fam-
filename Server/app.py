from flask import Flask, request, jsonify, session
from flask_cors import CORS
from flask_restful import Api,Resource
from models import db
from routes import User_routes, Workout_routes, Progress_routes, Friends_routes

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///fitness_app.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY'] = 'your_secret_key'
    
    db.init_app(app)
    CORS(app)
    api = Api(app)

    with app.app_context():
        db.create_all()

    api.add_resource(User_routes.UserRegister, '/register')
    api.add_resource(User_routes.UserLogin, '/login')
    api.add_resource(User_routes.UserProfile, '/profile/<int:user_id>')
    
    api.add_resource(Workout_routes.WorkoutList, '/workouts')
    api.add_resource(Workout_routes.WorkoutDetail, '/workouts/<int:workout_id>')
    
    api.add_resource(Progress_routes.ProgressList, '/progress/<int:user_id>')
    api.add_resource(Progress_routes.ProgressDetail, '/progress/<int:user_id>/<int:progress_id>')
    
    api.add_resource(Friends_routes.FriendList, '/friends/<int:user_id>')
    api.add_resource(Friends_routes.FriendRequest, '/friends/request')
    
    return app


app = create_app()