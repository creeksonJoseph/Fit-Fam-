from flask import Blueprint, request, jsonify
from models import db, Workout, UserProgress

workout_bp = Blueprint('workout_sessions', __name__)

@workout_bp.route('/workout-sessions', methods=['POST'])
def save_workout_session():
    try:
        data = request.get_json()
        
        # Extract data from request
        user_id = data.get('user_id')
        exercise_name = data.get('exercise_name')
        duration = data.get('duration')
        description = data.get('description', '')
        
        if not all([user_id, exercise_name, duration]):
            return jsonify({'error': 'Missing required fields'}), 400
        
        # Check if workout exists, create if not
        workout = Workout.query.filter_by(name=exercise_name).first()
        
        if not workout:
            workout = Workout(
                name=exercise_name,
                description=description,
                duration=duration
            )
            db.session.add(workout)
            db.session.flush()  # Get the ID without committing
        
        # Create user progress record
        user_progress = UserProgress(
            user_id=user_id,
            workout_id=workout.id,
            progress='completed',
            notes=f'Duration: {duration} minutes'
        )
        
        db.session.add(user_progress)
        db.session.commit()
        
        return jsonify({
            'success': True,
            'message': 'Workout session saved successfully',
            'workout_id': workout.id
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@workout_bp.route('/workout-sessions/<int:user_id>', methods=['GET'])
def get_user_workouts(user_id):
    try:
        # Get user's workout history with workout details
        progress_records = db.session.query(UserProgress, Workout).join(
            Workout, UserProgress.workout_id == Workout.id
        ).filter(UserProgress.user_id == user_id).all()
        
        workouts = []
        for progress, workout in progress_records:
            workouts.append({
                'id': workout.id,
                'name': workout.name,
                'description': workout.description,
                'duration': workout.duration,
                'time_completed': progress.time_completed.isoformat(),
                'progress': progress.progress,
                'notes': progress.notes
            })
        
        return jsonify(workouts), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@workout_bp.route('/workout-sessions/<int:user_id>/stats', methods=['GET'])
def get_user_workout_stats(user_id):
    try:
        # Get all user progress records
        progress_records = db.session.query(UserProgress, Workout).join(
            Workout, UserProgress.workout_id == Workout.id
        ).filter(UserProgress.user_id == user_id).all()
        
        if not progress_records:
            return jsonify({
                'total_workouts': 0,
                'avg_duration': 0,
                'total_duration': 0
            }), 200
        
        total_workouts = len(progress_records)
        total_duration = sum(workout.duration for _, workout in progress_records)
        avg_duration = total_duration // total_workouts if total_workouts > 0 else 0
        
        return jsonify({
            'total_workouts': total_workouts,
            'avg_duration': avg_duration,
            'total_duration': total_duration
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500