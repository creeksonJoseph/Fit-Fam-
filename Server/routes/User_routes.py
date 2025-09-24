from flask import Blueprint, request, jsonify
from flask_restful import Api, Resource
from models import db, User

user_bp = Blueprint("user", __name__)
api = Api(user_bp)


class UserRegister(Resource):
    def post(self):
        data = request.get_json()
        username = data.get("username")
        email = data.get("email")

        if not username or not email:
            return {"error": "Username and email are required"}, 400

        if User.query.filter((User.username == username) | (User.email == email)).first():
            return {"error": "User with this username or email already exists"}, 400

        user = User(username=username, email=email)
        db.session.add(user)
        db.session.commit()

        return user.to_dict(), 201

api.add_resource(UserRegister, "/register")

class UserLogin(Resource):
    def post(self):
        data = request.get_json()
        username = data.get("username")

        user = User.query.filter_by(username=username).first()
        if not user:
            return {"error": "Invalid username"}, 401

        return {"message": "Login successful", "user": user.to_dict()}, 200

api.add_resource(UserLogin, "/login")

class UserProfile(Resource):
    def get(self, user_id):
        user = User.query.get(user_id)
        if not user:
            return {"error": "User not found"}, 404
        return user.to_dict(), 200


api.add_resource(UserProfile, "/<int:user_id>")
