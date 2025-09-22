from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
from sqlalchemy_serializer import SerializerMixin

db = SQLAlchemy()

class User(db.Model, SerializerMixin):
	__tablename__ = 'users'
	id = db.Column(db.Integer, primary_key=True)
	username = db.Column(db.String, unique=True, nullable=False)
	email = db.Column(db.String, unique=True, nullable=False)


class Workout(db.Model, SerializerMixin):
	__tablename__ = 'workouts'
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String, nullable=False)
	description = db.Column(db.String, nullable=True)
	duration = db.Column(db.Integer, nullable=False)  # duration in minutes
	status = db.Culomn(db.timestamp, server_default=text('CURRENT_TIMESTAMP'), nullable=False)


class UserProgress(db.Model, SerializerMixin):
	__tablename__ = 'user_progress'
	user_id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)
	workout_id = db.Column(db.Integer, db.ForeignKey('workouts.id'), primary_key=True)
	progress = db.Column(db.String, nullable=False)
	time_completed = db.Column(db.DateTime, server_default=text('CURRENT_TIMESTAMP'), onupdate=text('CURRENT_TIMESTAMP'), nullable=False)
	notes = db.Column(db.String, nullable=True)


class Friends(db.Model, SerializerMixin):
	__tablename__ = 'friends'
	following_user_id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)
	followed_user_id = db.Column(db.Integer, db.ForeignKey('users.id'), primary_key=True)
	status = db.Column(db.String, nullable=False)  #pending, accepted, blocked






