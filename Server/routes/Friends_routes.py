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
        friendships = Friends.query.filter(
            (Friends.following_user_id == user_id) | 
            (Friends.followed_user_id == user_id)
        ).all()
        
        friends_data = []
        for friendship in friendships:
            # Get the other user in the friendship
            other_user_id = friendship.followed_user_id if friendship.following_user_id == user_id else friendship.following_user_id
            other_user = User.query.get(other_user_id)
            
            if other_user:
                friends_data.append({
                    "id": other_user.id,
                    "username": other_user.username,
                    "email": other_user.email,
                    "profile_image": other_user.profile_image,
                    "status": friendship.status,
                    "following_user_id": friendship.following_user_id,
                    "followed_user_id": friendship.followed_user_id
                })
        
        return friends_data, 200

api.add_resource(FriendList, "/<int:user_id>")

class FriendCount(Resource):
    def get(self, user_id):
        user = User.query.get(user_id)
        if not user:
            return {"error": "User not found"}, 404

        # Count accepted friends
        friend_count = Friends.query.filter_by(
            following_user_id=user_id, 
            status='accepted'
        ).count()
        
        return {"total_friends": friend_count}, 200

api.add_resource(FriendCount, "/<int:user_id>/count")

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
