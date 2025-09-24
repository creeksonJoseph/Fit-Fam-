from flask import Blueprint
from flask_restful import Api, Resource

friends_bp = Blueprint("friends", __name__)
api = Api(friends_bp)


class FriendList(Resource):
    def get(self, user_id):
        return {"friends": f"All friends of user {user_id}"}, 200


class FriendRequest(Resource):
    def post(self):
        return {"message": "Friend request sent"}, 201


api.add_resource(FriendList, "/<int:user_id>")
api.add_resource(FriendRequest, "/request")
