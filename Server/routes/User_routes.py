from flask import Blueprint
from flask_restful import Api, Resource

user_bp = Blueprint("user", __name__)
api = Api(user_bp)


class UserRegister(Resource):
    def post(self):
        return {"message": "User registered successfully"}, 201


class UserLogin(Resource):
    def post(self):
        return {"message": "Login successful"}, 200


class UserProfile(Resource):
    def get(self, user_id):
        return {"message": f"Profile data for user {user_id}"}, 200


# Register resources on this blueprint
api.add_resource(UserRegister, "/register")
api.add_resource(UserLogin, "/login")
api.add_resource(UserProfile, "/<int:user_id>")