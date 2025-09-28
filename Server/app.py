import os
from flask import Flask, jsonify, session
from flask_cors import CORS
from flask_restful import Api
from flask_migrate import Migrate
from flask_session import Session
from models import db, User

from routes.User_routes import user_bp
from routes.Workout_routes import workout_bp
from routes.Progress_routes import progress_bp
from routes.Friends_routes import friends_bp
from workout_routes import workout_bp as session_bp


def create_app():
    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv(
        "DATABASE_URL", "sqlite:///fitness_app.db"
    )
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY'] = os.getenv("SECRET_KEY", "dev_secret")

    # Standard Flask session configuration
    app.config['SESSION_PERMANENT'] = False
    app.config['SESSION_TYPE'] = 'filesystem'

    db.init_app(app)
    Session(app)  # Initialize Flask-Session
    CORS(app, origins=['http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:3000', 'http://localhost:5000'], supports_credentials=True, allow_headers=['Content-Type', 'Authorization'])
    Api(app)
    Migrate(app, db)

    app.register_blueprint(user_bp, url_prefix="/users")
    app.register_blueprint(workout_bp, url_prefix="/workouts")
    app.register_blueprint(progress_bp, url_prefix="/progress")
    app.register_blueprint(friends_bp, url_prefix="/friends")
    app.register_blueprint(session_bp)

    @app.errorhandler(404)
    def not_found(e):
        return jsonify({"error": "Not Found"}), 404

    @app.errorhandler(500)
    def server_error(e):
        return jsonify({"error": "Internal Server Error"}), 500

    return app


app = create_app()

# Create tables if they don't exist
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)