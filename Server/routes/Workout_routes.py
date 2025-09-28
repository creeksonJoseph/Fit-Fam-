from flask import Blueprint, request
from flask_restful import Api, Resource
from models import db, Workout

workout_bp = Blueprint("workout", __name__, url_prefix="/workouts")
api = Api(workout_bp)


class WorkoutList(Resource):
    def get(self):
        workouts = Workout.query.all()
        return [w.to_dict() for w in workouts], 200

    def post(self):
        data = request.get_json()
        workout = Workout(
            name=data.get("name"),
            description=data.get("description"),
            duration=data.get("duration"),
        )
        db.session.add(workout)
        db.session.commit()
        return workout.to_dict(), 201
    
api.add_resource(WorkoutList, "/")


class WorkoutDetail(Resource):
    def get(self, workout_id):
        workout = Workout.query.get(workout_id)
        if not workout:
            return {"error": "Workout not found"}, 404
        return workout.to_dict(), 200

    def put(self, workout_id):
        workout = Workout.query.get(workout_id)
        if not workout:
            return {"error": "Workout not found"}, 404

        data = request.get_json()
        workout.name = data.get("name", workout.name)
        workout.description = data.get("description", workout.description)
        workout.duration = data.get("duration", workout.duration)

        db.session.commit()
        return workout.to_dict(), 200

    def delete(self, workout_id):
        workout = Workout.query.get(workout_id)
        if not workout:
            return {"error": "Workout not found"}, 404

        db.session.delete(workout)
        db.session.commit()
        return {"message": "Workout deleted"}, 200


api.add_resource(WorkoutDetail, "/<int:workout_id>")
