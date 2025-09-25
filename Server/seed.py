from app import app
from models import db, User, Workout, UserProgress, Friends

with app.app_context():
    # Reset database
    db.drop_all()
    db.create_all()

    # --- Users ---
    u1 = User(username="zacky", email="zacky@example.com")
    u2 = User(username="sarah", email="sarah@example.com")
    u3 = User(username="john", email="john@example.com")

    db.session.add_all([u1, u2, u3])
    db.session.commit()

    # --- Workouts ---
    w1 = Workout(name="Morning Run", description="5km jog around the park", duration=30)
    w2 = Workout(name="Yoga Session", description="30 mins of yoga flow", duration=30)
    w3 = Workout(name="Strength Training", description="Upper body workout", duration=45)

    db.session.add_all([w1, w2, w3])
    db.session.commit()

    # --- Progress (association objects) ---
    p1 = UserProgress(user_id=u1.id, workout_id=w1.id, progress="Completed", notes="Felt great!")
    p2 = UserProgress(user_id=u2.id, workout_id=w2.id, progress="In Progress", notes="Halfway done")
    p3 = UserProgress(user_id=u3.id, workout_id=w3.id, progress="Not Started", notes="Will start tomorrow")
    p4 = UserProgress(user_id=u1.id, workout_id=w3.id, progress="Completed", notes="Tough but rewarding")

    db.session.add_all([p1, p2, p3, p4])
    db.session.commit()

    # --- Friendships ---
    f1 = Friends(following_user_id=u1.id, followed_user_id=u2.id, status="accepted")
    f2 = Friends(following_user_id=u2.id, followed_user_id=u3.id, status="pending")
    f3 = Friends(following_user_id=u3.id, followed_user_id=u1.id, status="blocked")

    db.session.add_all([f1, f2, f3])
    db.session.commit()

    print("✅ Database seeded successfully!")
