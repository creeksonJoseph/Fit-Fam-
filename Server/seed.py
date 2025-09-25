# seed.py
import random
from app import app
from models import db, User, Workout, UserProgress, Friends

random.seed(42)  # Optional: for reproducibility

# Sample data
USERNAMES = [
    "zacky", "sarah", "john", "alice", "bob", "charlie", "diana", "eric", "fiona", "george",
    "hannah", "ian", "julia", "kevin", "laura", "mike", "nina", "oliver", "paula", "quinn",
    "rachel", "sam", "tina", "ursula", "victor", "wendy", "xander", "yasmin", "zane", "amy",
    "brian", "claire", "derek", "eva", "fred"
]

WORKOUTS = [
    {"name": "Morning Run", "description": "5km jog around the park", "duration": 30},
    {"name": "Yoga Session", "description": "30 mins of yoga flow", "duration": 30},
    {"name": "Strength Training", "description": "Upper body workout", "duration": 45}
]

PROGRESS_STATUSES = ["Not Started", "In Progress", "Completed"]
FRIENDSHIP_STATUSES = ["accepted", "pending", "blocked"]

with app.app_context():
    # Reset the database
    db.drop_all()
    db.create_all()

    #Create Users
    users = []
    for username in USERNAMES:
        email = f"{username}@example.com"
        user = User(username=username, email=email)
        db.session.add(user)
        users.append(user)

    db.session.commit()
    print(f"✅ Created {len(users)} users.")

    #Create Workouts
    workouts = []
    for w in WORKOUTS:
        workout = Workout(**w)
        db.session.add(workout)
        workouts.append(workout)

    db.session.commit()
    print(f"✅ Created {len(workouts)} workouts.")

    #Create Random User Progress
    progress_entries = []
    for user in users:
        for workout in workouts:
            if random.random() < 0.4: #40% chance to have progress
                progress = UserProgress(
                    user_id=user.id,
                    workout_id=workout.id,
                    progress=random.choice(PROGRESS_STATUSES),
                    notes=f"Progress for {workout.name.lower()}"
                )
                db.session.add(progress)
                progress_entries.append(progress)

    db.session.commit()
    print(f"✅ Created {len(progress_entries)} user progress entries.")

    #Create Random Friendships
    friend_links = set()
    friends = []

    while len(friends) < 50:
        u1, u2 = random.sample(users, 2)
        key = (u1.id, u2.id)
        if u1.id != u2.id and key not in friend_links:
            friend_links.add(key)
            f = Friends(
                following_user_id=u1.id,
                followed_user_id=u2.id,
                status=random.choice(FRIENDSHIP_STATUSES)
            )
            db.session.add(f)
            friends.append(f)

    db.session.commit()
    print(f"✅ Created {len(friends)} friend relationships.")

    print("🎉 Database seeded successfully!")
