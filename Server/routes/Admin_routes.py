from flask import Blueprint, request, session, jsonify
from flask_restful import Api, Resource
from models import db, User

admin_bp = Blueprint("admin", __name__)
api = Api(admin_bp)

def admin_required(f):
    def decorated_function(*args, **kwargs):
        if 'user_id' not in session:
            return {"error": "Authentication required"}, 401
        
        user = User.query.get(session['user_id'])
        if not user or not user.is_admin:
            return {"error": "Admin access required"}, 403
        
        return f(*args, **kwargs)
    return decorated_function

class AdminUsers(Resource):
    @admin_required
    def get(self):
        users = User.query.all()
        return [user.to_dict() for user in users], 200

    @admin_required  
    def delete(self, user_id):
        user = User.query.get(user_id)
        if not user:
            return {"error": "User not found"}, 404
        
        if user.is_admin:
            return {"error": "Cannot delete admin user"}, 403
            
        db.session.delete(user)
        db.session.commit()
        return {"message": "User deleted successfully"}, 200

api.add_resource(AdminUsers, "/users", "/users/<int:user_id>")