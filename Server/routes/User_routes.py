from flask import Blueprint, request, jsonify, session
from flask_restful import Api, Resource
from functools import wraps
from models import db, User

user_bp = Blueprint("user", __name__)
api = Api(user_bp)

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'user_id' not in session:
            return {'error': 'Authentication required'}, 401
        return f(*args, **kwargs)
    return decorated_function


class UserRegister(Resource):
    def post(self):
        try:
            data = request.get_json()
            if not data:
                return {"error": "No data provided"}, 400
                
            username = data.get("username")
            email = data.get("email")
            password = data.get("password")

            if not username or not email or not password:
                return {"error": "Username, email and password are required"}, 400

            if User.query.filter((User.username == username) | (User.email == email)).first():
                return {"error": "User with this username or email already exists"}, 400

            user = User(username=username, email=email)
            user.set_password(password)
            db.session.add(user)
            db.session.commit()
            
            session['user_id'] = user.id
            return user.to_dict(), 201
        except Exception as e:
            db.session.rollback()
            return {"error": f"Registration failed: {str(e)}"}, 500

api.add_resource(UserRegister, "/register")

class UserLogin(Resource):
    def post(self):
        data = request.get_json()
        email = data.get("email")
        username = data.get("username")  
        password = data.get("password")

        if not (email or username) or not password:
            return {"error": "Email/username and password are required"}, 400

        # Try to find user by email first, then username
        if email:
            user = User.query.filter_by(email=email).first()
        else:
            user = User.query.filter_by(username=username).first()
            
        if not user or not user.check_password(password):
            return {"error": "Invalid credentials"}, 401

        session['user_id'] = user.id
        return {"message": "Login successful", "user": user.to_dict()}, 200

api.add_resource(UserLogin, "/login")

class UserProfile(Resource):
    @login_required
    def get(self, user_id):
        if session['user_id'] != user_id:
            return {"error": "Unauthorized"}, 403
        user = User.query.get(user_id)
        return user.to_dict(), 200
    
    @login_required
    def put(self, user_id):
        if session['user_id'] != user_id:
            return {"error": "Unauthorized"}, 403
        
        user = User.query.get(user_id)
        data = request.get_json()
        if 'username' in data:
            user.username = data['username']
        if 'email' in data:
            user.email = data['email']
        if 'profile_image' in data:
            user.profile_image = data['profile_image']
        
        db.session.commit()
        return user.to_dict(), 200

class UserLogout(Resource):
    @login_required
    def post(self):
        session.pop('user_id', None)
        return {"message": "Logged out successfully"}, 200


class AllUsers(Resource):
    def get(self):
        users = User.query.all()
        return [user.to_dict() for user in users], 200

class SessionCheck(Resource):
    def get(self):
        if 'user_id' in session:
            user = User.query.get(session['user_id'])
            if user:
                return {'authenticated': True, 'user': user.to_dict()}, 200
        return {'authenticated': False}, 401

api.add_resource(AllUsers, "/")
api.add_resource(SessionCheck, "/session")
api.add_resource(UserProfile, "/<int:user_id>")
api.add_resource(UserLogout, "/logout")
