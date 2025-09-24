from flask import Blueprint
from flask_restful import Api, Resource

progress_bp = Blueprint("progress", __name__)
api = Api(progress_bp)


class ProgressList(Resource):
    def get(self, user_id):
        return {"progress": f"All progress records for user {user_id}"}, 200

    def post(self, user_id):
        return {"message": f"New progress entry added for user {user_id}"}, 201


class ProgressDetail(Resource):
    def get(self, user_id, progress_id):
        return {"message": f"Progress {progress_id} for user {user_id}"}, 200

    def put(self, user_id, progress_id):
        return {"message": f"Progress {progress_id} for user {user_id} updated"}, 200

    def delete(self, user_id, progress_id):
        return {"message": f"Progress {progress_id} for user {user_id} deleted"}, 200


api.add_resource(ProgressList, "/<int:user_id>")
api.add_resource(ProgressDetail, "/<int:user_id>/<int:progress_id>")
