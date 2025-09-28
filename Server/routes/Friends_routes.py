from flask import Blueprint, request
from flask_restful import Api, Resource
from models import db, Friends, User

friends_bp = Blueprint("friends", __name__)
api = Api(friends_bp)


class FriendList(Resource):
    def get(self, user_id):
        user = User.query.get(user_id)
        if not user:
            return {"error": "User not found"}, 404

        # Get all friendships where user is either follower or followed
        friends = Friends.query.filter(
            (Friends.following_user_id == user_id) | 
            (Friends.followed_user_id == user_id)
        ).all()
        return [f.to_dict() for f in friends], 200

api.add_resource(FriendList, "/<int:user_id>")

class FriendRequest(Resource):
    def post(self):
        try:
            data = request.get_json()
            following_id = data.get("following_user_id")
            followed_id = data.get("followed_user_id")
            status = data.get("status", "pending")

            if following_id == followed_id:
                return {"error": "Cannot friend yourself"}, 400

            # check users exist
            if not User.query.get(following_id) or not User.query.get(followed_id):
                return {"error": "One or both users not found"}, 404

            # Check if friendship already exists
            existing = Friends.query.filter_by(
                following_user_id=following_id,
                followed_user_id=followed_id
            ).first()
            
            if existing:
                # Update status if accepting
                if status == "accepted":
                    existing.status = "accepted"
                    db.session.commit()
                    return existing.to_dict(), 200
                return existing.to_dict(), 200

            friend = Friends(
                following_user_id=following_id,
                followed_user_id=followed_id,
                status=status
            )
            db.session.add(friend)
            db.session.commit()
            return friend.to_dict(), 201
        except Exception as e:
            db.session.rollback()
            return {"error": str(e)}, 500
    
    def delete(self):
        try:
            data = request.get_json()
            following_id = data.get("following_user_id")
            followed_id = data.get("followed_user_id")
            
            if not following_id or not followed_id:
                return {"error": "Missing required fields"}, 400
            
            # Find and delete the friend request
            friend_request = Friends.query.filter_by(
                following_user_id=following_id,
                followed_user_id=followed_id
            ).first()
            
            if not friend_request:
                return {"error": "Friend request not found"}, 404
            
            db.session.delete(friend_request)
            db.session.commit()
            return {"message": "Friend request cancelled"}, 200
        except Exception as e:
            db.session.rollback()
            return {"error": str(e)}, 500
    
api.add_resource(FriendRequest, "/request", "/request/")
