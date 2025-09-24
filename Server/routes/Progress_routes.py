from flask import Blueprint, request
from flask_restful import Api, Resource
from models import db, UserProgress, User, Workout

progress_bp = Blueprint("progress", __name__)
api = Api(progress_bp)


class ProgressList(Resource):
    def get(self, user_id):
        user = User.query.get(user_id)
        if not user:
            return {"error": "User not found"}, 404
        return [p.to_dict() for p in user.progress], 200

    def post(self, user_id):
        user = User.query.get(user_id)
        if not user:
            return {"error": "User not found"}, 404

        data = request.get_json()
        workout_id = data.get("workout_id")
        progress = data.get("progress")

        workout = Workout.query.get(workout_id)
        if not workout:
            return {"error": "Workout not found"}, 404

        user_progress = UserProgress(
            user_id=user_id,
            workout_id=workout_id,
            progress=progress,
            notes=data.get("notes"),
        )
        db.session.add(user_progress)
        db.session.commit()
        return user_progress.to_dict(), 201
    
api.add_resource(ProgressList, "/<int:user_id>")

class ProgressDetail(Resource):
    def get(self, user_id, progress_id):
        progress = UserProgress.query.filter_by(user_id=user_id, workout_id=progress_id).first()
        if not progress:
            return {"error": "Progress not found"}, 404
        return progress.to_dict(), 200

    def put(self, user_id, progress_id):
        progress = UserProgress.query.filter_by(user_id=user_id, workout_id=progress_id).first()
        if not progress:
            return {"error": "Progress not found"}, 404

        data = request.get_json()
        progress.progress = data.get("progress", progress.progress)
        progress.notes = data.get("notes", progress.notes)

        db.session.commit()
        return progress.to_dict(), 200

    def delete(self, user_id, progress_id):
        progress = UserProgress.query.filter_by(user_id=user_id, workout_id=progress_id).first()
        if not progress:
            return {"error": "Progress not found"}, 404

        db.session.delete(progress)
        db.session.commit()
        return {"message": "Progress deleted"}, 200


api.add_resource(ProgressDetail, "/<int:user_id>/<int:progress_id>")
