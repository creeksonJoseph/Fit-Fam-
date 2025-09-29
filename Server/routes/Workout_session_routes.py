from flask import Blueprint, request, jsonify
from models import db, Workout, UserProgress
from flask_restful import Api, Resource


workout_session_bp = Blueprint("workout_sessions", __name__, url_prefix="/workout-sessions")
api = Api(workout_session_bp)   


class WorkoutSession(Resource):
    def post(self):
        try:
            data = request.get_json()

            user_id = data.get("user_id")
            exercise_name = data.get("exercise_name")
            duration = data.get("duration")
            description = data.get("description", "")

            if not all([user_id, exercise_name, duration]):
                return {"error": "Missing required fields"}, 400

            workout = Workout.query.filter_by(name=exercise_name).first()

            if not workout:
                workout = Workout(
                    name=exercise_name, description=description, duration=duration
                )
                db.session.add(workout)
                db.session.flush() 

            user_progress = UserProgress(
                user_id=user_id,
                workout_id=workout.id,
                progress="completed",
                notes=f"Duration: {duration} minutes",

            )

            db.session.add(user_progress)
            db.session.commit()

            return {
                "success": True,
                "message": "Workout session saved successfully",
                "workout_id": workout.id,
            }, 201

        except Exception as e:
            db.session.rollback()
            return {"error": str(e)}, 500

api.add_resource(WorkoutSession, "/")


class GetUserWorkouts(Resource):
    def get(self, user_id):
        try:
            progress_records = (
                db.session.query(UserProgress, Workout)
                .join(Workout, UserProgress.workout_id == Workout.id)
                .filter(UserProgress.user_id == user_id)
                .all()
            )

            workouts = []
            for progress, workout in progress_records:
                workouts.append(
                    {
                        "id": workout.id,
                        "name": workout.name,
                        "description": workout.description,
                        "duration": workout.duration,
                        "time_completed": progress.time_completed.isoformat(),
                        "progress": progress.progress,
                        "notes": progress.notes,
                    }
                )

            return workouts, 200

        except Exception as e:
            return {"error": str(e)}, 500
        

api.add_resource(GetUserWorkouts, "/<int:user_id>")


class GetUserWorkoutStats(Resource):
    def get(self, user_id):
        try:
            progress_records = (
                db.session.query(UserProgress, Workout)
                .join(Workout, UserProgress.workout_id == Workout.id)
                .filter(UserProgress.user_id == user_id)
                .all()
            )

            if not progress_records:
                return {
                    "total_workouts": 0,
                    "avg_duration": 0,
                    "total_duration": 0,
                }, 200

            total_workouts = len(progress_records)
            total_duration = sum(workout.duration for _, workout in progress_records)
            avg_duration = total_duration // total_workouts if total_workouts > 0 else 0

            return {
                "total_workouts": total_workouts,
                "avg_duration": avg_duration,
                "total_duration": total_duration,
            }, 200

        except Exception as e:
            return {"error": str(e)}, 500



api.add_resource(GetUserWorkoutStats, "/<int:user_id>/stats")

