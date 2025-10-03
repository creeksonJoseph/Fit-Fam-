# Group Fitness App 🏋️‍♂️

A full-stack fitness tracking application built with React and Flask that allows users to explore exercises, track workouts, and connect with friends.

## Features

### Authentication

- User registration and login with Formik validation
- Session-based authentication with secure cookies
- Password hashing with bcrypt
- Protected routes for authenticated users

### Workout Management

- Browse 1000+ exercises with GIFs and instructions
- Filter exercises by body part and search functionality
- Interactive workout timer with start/stop functionality
- Save workout sessions with duration tracking
- View workout history and statistics

### Social Features

- Send and receive friend requests
- Accept/decline friend requests
- View friends list with real-time status
- Friend-based leaderboard system

### Dashboard & Analytics

- Personal workout statistics (total time, workouts completed)
- Friends count and leaderboard
- Recent workout activity
- Time-based performance metrics

### Profile Management

- Update username and email
- Profile image upload via Cloudinary
- Personal workout statistics

## Tech Stack

### Frontend

- **React 18** - UI framework
- **React Router** - Client-side routing
- **Formik + Yup** - Form handling and validation
- **Tailwind CSS** - Styling and responsive design
- **Vite** - Build tool and development server

### Backend

- **Flask** - Web framework
- **Flask-RESTful** - REST API development
- **SQLAlchemy** - ORM and database management
- **Flask-Migrate** - Database migrations
- **Flask-CORS** - Cross-origin resource sharing
- **bcrypt** - Password hashing

### Database

- **SQLite** - Development database
- **PostgreSQL** - Production database (deployed)

### External APIs

- **Exercise API** - 1000+ exercises with GIFs and instructions
- **Cloudinary** - Image upload and storage

## Live Demo

- **Frontend**: [https://fit-fam-eight.vercel.app/](https://fit-fam-eight.vercel.app/)
- **Backend API**: [https://group-fitness-app.onrender.com](https://group-fitness-app.onrender.com)

## Prerequisites

- Node.js (v16 or higher)
- Python (v3.8 or higher)
- pip (Python package manager)

## ⚡ Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/ogzacky75/Group_fitness_app.git
cd Group_fitness_app
```

### 2. Backend Setup

```bash
cd Server
pip install -r requirements.txt

# Set environment variables
export DATABASE_URI="sqlite:///fitness_app.db"
export SECRET_KEY="your-secret-key"

# Initialize database
flask db upgrade
python seed.py  # Optional: seed with sample data

# Run the server
python app.py
```

### 3. Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

### 4. Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Database Schema

### Users

- id, username, email, password_hash, profile_image, created_at

### Workouts

- id, name, description, duration

### UserProgress

- id, user_id, workout_id, progress, notes, time_completed

### Friends

- id, following_user_id, followed_user_id, status, created_at

## API Endpoints

### Authentication

- `POST /users/register` - User registration
- `POST /users/login` - User login
- `POST /users/logout` - User logout
- `GET /users/session` - Check session status

### Users

- `GET /users/` - Get all users
- `GET /users/<id>` - Get user profile
- `PUT /users/<id>` - Update user profile

### Friends

- `GET /friends/<user_id>` - Get user's friends
- `POST /friends/request` - Send friend request
- `DELETE /friends/request` - Cancel friend request

### Workouts

- `POST /workout-sessions/` - Save workout session
- `GET /workout-sessions/<user_id>` - Get user workouts
- `GET /workout-sessions/<user_id>/stats` - Get workout statistics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developers

**Isaac Ogutu**

- GitHub: [@ogzacky75](https://github.com/ogzacky75)
- Email:

**Joseph Charana**

- GitHub: [@creeksonjoseph](https://github.com/creeksonJoseph/)
- Email: charanajoseph@gmail.com

## Acknowledgments

- Exercise data provided by ExerciseDB API
- Image hosting by Cloudinary
- Deployment by Render
- UI inspiration from modern fitness apps

## Future Enhancements

- Real-time chat between friends
- Workout challenges and competitions
- Mobile app development
- Advanced analytics and insights
- Integration with fitness wearables
- Nutrition tracking
- Personal trainer matching

---

**Built with ❤️ for fitness enthusiasts everywhere!**
