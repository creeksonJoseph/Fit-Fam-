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

        friends = Friends.query.filter_by(following_user_id=user_id).all()
        return [f.to_dict() for f in friends], 200

api.add_resource(FriendList, "/<int:user_id>")

class FriendRequest(Resource):
    def post(self):
        data = request.get_json()
        following_id = data.get("following_user_id")
        followed_id = data.get("followed_user_id")

        if following_id == followed_id:
            return {"error": "Cannot friend yourself"}, 400

        # check users exist
        if not User.query.get(following_id) or not User.query.get(followed_id):
            return {"error": "One or both users not found"}, 404

        friend = Friends(
            following_user_id=following_id,
            followed_user_id=followed_id,
            status=data.get("status", "pending")
        )
        db.session.add(friend)
        db.session.commit()
        return friend.to_dict(), 201
    
api.add_resource(FriendRequest, "/request")
