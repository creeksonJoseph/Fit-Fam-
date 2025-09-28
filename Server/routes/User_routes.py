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

    def put(self, user_id):
        try:
            print(f"PUT request received for user_id: {user_id}")
            user = User.query.get(user_id)
            if not user:
                print(f"User not found for id: {user_id}")
                return {"error": "User not found"}, 404

            data = request.get_json()
            print(f"Request data: {data}")
            
            # Update username if provided
            if "username" in data:
                print(f"Updating username to: {data['username']}")
                # Check if username is already taken by another user
                existing_user = User.query.filter(
                    User.username == data["username"],
                    User.id != user_id
                ).first()
                if existing_user:
                    print(f"Username already taken: {data['username']}")
                    return {"error": "Username already taken"}, 400
                user.username = data["username"]
            
            # Update email if provided
            if "email" in data:
                print(f"Updating email to: {data['email']}")
                # Check if email is already taken by another user
                existing_user = User.query.filter(
                    User.email == data["email"],
                    User.id != user_id
                ).first()
                if existing_user:
                    print(f"Email already taken: {data['email']}")
                    return {"error": "Email already taken"}, 400
                user.email = data["email"]
            
            # Update profile image if provided
            if "profile_image" in data:
                print(f"Updating profile_image to: {data['profile_image']}")
                user.profile_image = data["profile_image"]

            print("Committing changes to database...")
            db.session.commit()
            print("Database commit successful")
            
            result = user.to_dict()
            print(f"Returning updated user: {result}")
            return result, 200
            
        except Exception as e:
            print(f"Error in PUT /users/{user_id}: {str(e)}")
            print(f"Error type: {type(e)}")
            import traceback
            print(f"Traceback: {traceback.format_exc()}")
            db.session.rollback()
            return {"error": f"Internal server error: {str(e)}"}, 500


api.add_resource(UserProfile, "/<int:user_id>")
