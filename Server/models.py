from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
from sqlalchemy_serializer import SerializerMixin
import bcrypt

db = SQLAlchemy()


class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    profile_image = db.Column(db.String(500), nullable=True)
    is_admin = db.Column(db.Boolean, default=False, nullable=False)
    
    def set_password(self, password):
        self.password_hash = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
    
    def check_password(self, password):
        return bcrypt.checkpw(password.encode('utf-8'), self.password_hash.encode('utf-8'))

    # Relationships
    progress = db.relationship(
        "UserProgress",
        back_populates="user",
        cascade="all, delete-orphan"
    )

    friends = db.relationship(
        "Friends",
        foreign_keys="[Friends.following_user_id]",
        back_populates="follower",
        cascade="all, delete-orphan"
    )

    serialize_only = ("id", "username", "email", "profile_image", "is_admin")


class Workout(db.Model, SerializerMixin):
    __tablename__ = 'workouts'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String, nullable=True)
    duration = db.Column(db.Integer, nullable=False)  # duration in minutes
    created_at = db.Column(db.DateTime, server_default=text('CURRENT_TIMESTAMP'), nullable=False)

    # Relationships
    progress = db.relationship(
        "UserProgress",
        back_populates="workout",
        cascade="all, delete-orphan"
    )

    serialize_only = ("id", "name", "description", "duration", "created_at")


class UserProgress(db.Model, SerializerMixin):
    __tablename__ = 'user_progress'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    workout_id = db.Column(db.Integer, db.ForeignKey('workouts.id'), nullable=False)
    progress = db.Column(db.String, nullable=False)
    time_completed = db.Column(
        db.DateTime,
        server_default=text('CURRENT_TIMESTAMP'),
        nullable=False
    )
    notes = db.Column(db.String, nullable=True)

    # Relationships
    user = db.relationship("User", back_populates="progress")
    workout = db.relationship("Workout", back_populates="progress")

    serialize_only = ("id", "user_id", "workout_id", "progress", "time_completed", "notes")


class Friends(db.Model, SerializerMixin):
    __tablename__ = 'friends'

    following_user_id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)
    followed_user_id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)
    status = db.Column(db.String, nullable=False)  # pending, accepted, blocked

    # Relationships
    follower = db.relationship("User", foreign_keys=[following_user_id], back_populates="friends")
    followed = db.relationship("User", foreign_keys=[followed_user_id])

    serialize_only = ("following_user_id", "followed_user_id", "status")
