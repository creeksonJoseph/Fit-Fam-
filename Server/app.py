import os
from flask import Flask, jsonify
from flask_cors import CORS
from flask_restful import Api
from flask_migrate import Migrate
from models import db, User  # Add this import


from routes.User_routes import user_bp
from routes.Workout_routes import workout_bp
from routes.Progress_routes import progress_bp
from routes.Friends_routes import friends_bp
from workout_routes import workout_bp as workout_session_bp


def create_app():
    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv(
        "DATABASE_URL", "sqlite:///fitness_app.db"
    )
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY'] = os.getenv("SECRET_KEY", "dev_secret")

    app.config['SESSION_COOKIE_HTTPONLY'] = True
    app.config['SESSION_COOKIE_SAMESITE'] = 'Lax'
    if not app.debug: 
        app.config['SESSION_COOKIE_SECURE'] = True

    db.init_app(app)
    CORS(app, origins=["http://localhost:5173", "http://127.0.0.1:5173"])
    Api(app)
    Migrate(app, db)

    app.register_blueprint(user_bp, url_prefix="/users")
    app.register_blueprint(workout_bp, url_prefix="/workouts")
    app.register_blueprint(progress_bp, url_prefix="/progress")
    app.register_blueprint(friends_bp, url_prefix="/friends")
    app.register_blueprint(workout_session_bp, name='workout_sessions')

    @app.errorhandler(404)
    def not_found(e):
        return jsonify({"error": "Not Found"}), 404

    @app.errorhandler(500)
    def server_error(e):
        return jsonify({"error": "Internal Server Error"}), 500

    @app.route('/users')
    def get_users():
        users = User.query.all()
        users_list = [
            {
                "id": user.id,
                "username": user.username,
                "email": user.email,
                "profile_image": user.profile_image
            }
            for user in users
        ]
        return jsonify(users_list), 200

    return app


app = create_app()

# Create tables if they don't exist
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)