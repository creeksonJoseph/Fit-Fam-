from flask import Blueprint
from flask_restful import Api, Resource

workout_bp = Blueprint("workout", __name__)
api = Api(workout_bp)


class WorkoutList(Resource):
    def get(self):
        return {"workouts": ["Workout A", "Workout B"]}, 200

    def post(self):
        return {"message": "New workout created"}, 201


class WorkoutDetail(Resource):
    def get(self, workout_id):
        return {"message": f"Workout details for {workout_id}"}, 200

    def put(self, workout_id):
        return {"message": f"Workout {workout_id} updated"}, 200

    def delete(self, workout_id):
        return {"message": f"Workout {workout_id} deleted"}, 200


api.add_resource(WorkoutList, "/")
api.add_resource(WorkoutDetail, "/<int:workout_id>")
