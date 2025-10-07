import os
from flask import Flask, jsonify, session
from sqlalchemy import text
from flask_cors import CORS
from flask_restful import Api
from flask_migrate import Migrate
from flask_session import Session
from models import db, User

from routes.User_routes import user_bp
from routes.Workout_routes import  workout_bp
from routes.Progress_routes import progress_bp
from routes.Friends_routes import friends_bp
from routes.Workout_session_routes import workout_session_bp
from routes.Admin_routes import admin_bp


def create_app():
    app = Flask(__name__)

    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get(
        "DATABASE_URI")
    
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY'] = os.getenv("SECRET_KEY", "dev_secret")

    db.init_app(app)
    Migrate(app, db)

    app.config["SESSION_TYPE"] = "sqlalchemy"
    app.config['SESSION_PERMANENT'] = False
    app.config['SESSION_USE_SIGNER'] = True
    app.config['SESSION_KEY_PREFIX'] = 'fitfam:'
    app.config['SESSION_COOKIE_SECURE'] = True
    app.config['SESSION_COOKIE_HTTPONLY'] = True
    app.config['SESSION_COOKIE_SAMESITE'] = 'None'
    app.config["SESSION_SQLALCHEMY"] = db
    Session(app)

    CORS(app, 
         origins=[
             "http://localhost:3000",
             "http://127.0.0.1:3000",
             'https://fit-fam.onrender.com',
             'https://group-fitness-app.onrender.com',
             'https://fit-fam-eight.vercel.app',
             'https://fit-fam-six.vercel.app'], 
         supports_credentials=True, 
         allow_headers=['Content-Type', 'Authorization'],
         methods=['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'])
    Api(app)

    app.register_blueprint(user_bp, url_prefix="/users")
    app.register_blueprint(workout_bp, url_prefix="/workouts")
    app.register_blueprint(progress_bp, url_prefix="/progress")
    app.register_blueprint(friends_bp, url_prefix="/friends")
    app.register_blueprint(workout_session_bp, url_prefix="/workout-sessions")
    app.register_blueprint(admin_bp, url_prefix="/admin")

    @app.route('/health')
    def health_check():
        return jsonify({"status": "healthy", "message": "Server is running"}), 200

    @app.errorhandler(404)
    def not_found(e):
        return jsonify({"error": "Not Found"}), 404
    
    @app.route('/version')
    def version():
        return jsonify({"message": "Deployed on Sep 30 2025 at 12:00PM", "status": "new code"})
    
    @app.route('/setup-admin')
    def setup_admin():
        try:
            print("🔧 Starting admin setup...")
            
            # Check if is_admin column exists, if not add it
            from sqlalchemy import text
            result = db.session.execute(text(
                "SELECT column_name FROM information_schema.columns WHERE table_name='users' AND column_name='is_admin'"
            ))
            if not result.fetchone():
                print("📊 Adding is_admin column to users table...")
                db.session.execute(text("ALTER TABLE users ADD COLUMN is_admin BOOLEAN DEFAULT false NOT NULL"))
                db.session.commit()
                print("✅ is_admin column added successfully")
            else:
                print("ℹ️ is_admin column already exists")
            
            # Set admin role for charanajoseph@gmail.com
            print("👤 Looking for user charanajoseph@gmail.com...")
            admin_user = User.query.filter_by(email='charanajoseph@gmail.com').first()
            if admin_user:
                admin_user.is_admin = True
                db.session.commit()
                print("🎉 Admin role granted to charanajoseph@gmail.com")
                print("🗑️ SETUP COMPLETE - SAFE TO DELETE THIS ROUTE")
                return jsonify({
                    "message": "Admin setup complete - SAFE TO DELETE THIS ROUTE", 
                    "admin_email": "charanajoseph@gmail.com",
                    "status": "SUCCESS"
                }), 200
            else:
                print("❌ User charanajoseph@gmail.com not found")
                return jsonify({"error": "User charanajoseph@gmail.com not found"}), 404
        except Exception as e:
            print(f"💥 Error during setup: {str(e)}")
            db.session.rollback()
            return jsonify({"error": str(e)}), 500


    @app.errorhandler(500)
    def server_error(e):
        return jsonify({"error": "Internal Server Error"}), 500

    return app


app = create_app()


if __name__ == "__main__":
    app.run(debug=True)