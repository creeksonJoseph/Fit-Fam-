from app import create_app, db
from models import User, Workout, UserProgress, Friends
from datetime import datetime, timedelta
import random

app = create_app()

with app.app_context():
    # Reset database
    db.drop_all()
    db.create_all()

    # ---------- Users ----------
    users = [
        User(username="alice", email="alice@example.com", profile_image="https://i.pravatar.cc/150?img=1"),
        User(username="bob", email="bob@example.com", profile_image="https://i.pravatar.cc/150?img=2"),
        User(username="charlie", email="charlie@example.com", profile_image="https://i.pravatar.cc/150?img=3"),
        User(username="diana", email="diana@example.com", profile_image="https://i.pravatar.cc/150?img=4"),
    ]

    # Set passwords
    for user in users:
        user.set_password("password123")
        db.session.add(user)

    db.session.commit()

    # ---------- Workouts ----------
    workouts = [
        Workout(name="Push Ups", description="Standard push ups", duration=10),
        Workout(name="Plank", description="Hold plank position", duration=5),
        Workout(name="Squats", description="Bodyweight squats", duration=15),
        Workout(name="Running", description="Run around track", duration=30),
        Workout(name="Burpees", description="High intensity burpees", duration=12),
    ]

    db.session.add_all(workouts)
    db.session.commit()

    # ---------- User Progress ----------
    progress_entries = []
    for i in range(1, 11):  # 10 progress logs
        progress_entries.append(
            UserProgress(
                user_id=random.choice(users).id,
                workout_id=random.choice(workouts).id,
                progress=random.choice(["completed", "in progress", "skipped"]),
                time_completed=datetime.utcnow() - timedelta(days=random.randint(1, 10)),
                notes=random.choice(["Felt great!", "Tough session", "Need to improve form", None])
            )
        )

    db.session.add_all(progress_entries)
    db.session.commit()

    # ---------- Friends ----------
    friends = [
        Friends(following_user_id=users[0].id, followed_user_id=users[1].id, status="accepted"),
        Friends(following_user_id=users[0].id, followed_user_id=users[2].id, status="pending"),
        Friends(following_user_id=users[1].id, followed_user_id=users[3].id, status="accepted"),
        Friends(following_user_id=users[2].id, followed_user_id=users[3].id, status="blocked"),
    ]

    db.session.add_all(friends)
    db.session.commit()

    print("✅ Database seeded with sample users, workouts, progress, and friends!")
