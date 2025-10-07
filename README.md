# FitFam 🏋️‍♂️

> _A full-stack fitness tracking application built with React and Flask that helps friends keep track of their fitness growth, creating motivation through community and friendly competition._

[![Live Demo](https://img.shields.io/badge/Live-Demo-34e0a1?style=for-the-badge)](https://fit-fam-eight.vercel.app/)
[![Server](https://img.shields.io/badge/API-Server-141d38?style=for-the-badge)](https://group-fitness-app.onrender.com)

---

## 📖 Table of Contents

1. [🌍 About the Project](#-about-the-project)
2. [✨ Features](#-features)
3. [🧰 Tech Stack](#-tech-stack)
4. [📸 UI Previews](#-ui-previews)
5. [🚀 Getting Started](#-getting-started)
6. [🔐 Authentication Flow](#-authentication-flow)
7. [📝 API Overview](#-api-overview)
8. [🔮 Future Improvements](#-future-improvements)
9. [📩 Contact](#-contact)

---

## 🌍 About the Project

**FitFam** is a comprehensive fitness tracking platform where friends can:

- **Track** their workout sessions and progress
- **Motivate** each other through social features
- **Compete** on leaderboards and challenges
- **Discover** new exercises and workout routines
- **Build** lasting fitness habits together

Think of it as your personal fitness coach meets social network - where every workout counts and every friend matters.

### 🎯 Problem Statement

Many people struggle to maintain consistent fitness routines due to lack of motivation, accountability, and social support. Traditional fitness apps focus on individual progress but miss the powerful motivational aspect of community and friendly competition.

### 💡 Solution

FitFam provides a social fitness platform where users can:

- Track workouts with friends for mutual accountability
- Share progress and celebrate achievements together
- Compete in friendly challenges and leaderboards
- Access a comprehensive exercise database with instructions
- Build sustainable fitness habits through community support

---

## ✨ Features

### 🏋️ Core Functionality

- **💪 Exercise Database** - 1000+ exercises with GIFs and detailed instructions
- **⏱️ Workout Timer** - Interactive timer with start/stop functionality
- **📊 Progress Tracking** - Save workout sessions with duration and notes
- **📈 Statistics** - Personal workout analytics and performance metrics
- **🔍 Exercise Search** - Filter exercises by body part and search functionality

### 👥 Social Features

- **👫 Friend System** - Send, accept, and manage friend requests
- **🏆 Leaderboards** - Friend-based ranking system for motivation
- **📱 Real-time Status** - See friends' workout activity and progress
- **🎯 Community Challenges** - Group fitness goals and competitions
- **💬 Social Interaction** - Share achievements and motivate friends

### 🔐 Authentication & Security

- **🔒 Secure Registration** - Email and password with Formik validation
- **🍪 Session Management** - Secure cookie-based authentication
- **🔐 Password Hashing** - bcrypt encryption for user security
- **🛡️ Protected Routes** - Authentication required for personal features
- **👤 Profile Management** - Update personal information and profile images

### 📊 Dashboard & Analytics

- **📈 Personal Stats** - Total workout time, sessions completed, and streaks
- **👥 Friends Overview** - Friends count and recent activity
- **🏅 Achievement System** - Badges and milestones for motivation
- **📅 Workout History** - Detailed log of all workout sessions
- **⚡ Quick Actions** - Easy access to start workouts and view progress

### 🎨 User Experience

- **📱 Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **🎨 Modern UI** - Clean design with Tailwind CSS styling
- **⚡ Fast Performance** - Optimized loading with Vite build tool
- **🔄 Real-time Updates** - Live data synchronization across devices
- **🌟 Intuitive Navigation** - Easy-to-use interface for all fitness levels

---

## 🧰 Tech Stack

### Frontend

- **⚛️ React 18** - Modern UI library with latest features
- **🎨 Tailwind CSS** - Utility-first CSS framework for styling
- **📋 Formik + Yup** - Form handling and validation
- **🧭 React Router** - Client-side routing and navigation
- **📡 Axios** - HTTP client for API communication
- **⚡ Vite** - Fast build tool and development server

### Backend

- **🐍 Flask** - Lightweight Python web framework
- **🚀 Flask-RESTful** - REST API development framework
- **🗃️ SQLAlchemy** - Python SQL toolkit and ORM
- **🔄 Flask-Migrate** - Database migration management
- **🌐 Flask-CORS** - Cross-origin resource sharing
- **🔐 bcrypt** - Password hashing and security

### Database

- **🐘 PostgreSQL** - Production database via Supabase
- **📊 Supabase** - Backend-as-a-Service platform
- **🔗 SQLite** - Development database option
- **📈 Database Migrations** - Version-controlled schema changes

### External APIs & Services

- **🏋️ ExerciseDB API** - Comprehensive exercise database
- **☁️ Cloudinary** - Image upload and storage
- **🔗 Supabase** - Database hosting and real-time features
- **📊 Analytics** - User engagement and performance tracking

### DevOps & Deployment

- **▲ Vercel** - Frontend hosting and deployment
- **🚂 Render** - Backend API hosting
- **🔧 GitHub Actions** - CI/CD pipeline
- **📦 npm** - Package management

---

## 📸 UI Previews

### 🏠 Landing Page

![Landing Page](client/public/LandingPage.png)

- Motivational fitness-themed design
- Clear call-to-action for registration
- Feature highlights with visual demonstrations

### 🏋️ Exercise Browser

![Exercise Browser](client/public/WorkoutsPage.png)

- Comprehensive exercise database with GIFs
- Advanced filtering by body part and equipment
- Detailed exercise instructions and tips

### 📊 Dashboard

![Dashboard](client/public/Dashboard.png)

- Personal workout statistics and progress
- Friends activity and leaderboard
- Quick access to start new workouts

### ⏱️ Workout Timer

![Workout Timer](client/public/WorkoutSession.png)

- Interactive workout session timer
- Exercise tracking and progress logging
- Real-time workout statistics

---

## 🚀 Getting Started

### Prerequisites

- **Python** (v3.8 or higher)
- **Node.js** (v16 or higher)
- **pip** (Python package manager)
- **npm** or **yarn**
- **PostgreSQL** database (or Supabase account)
- **Cloudinary** account (for image uploads)

### 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ogzacky75/Group_fitness_app.git
   cd Group_fitness_app
   ```

2. **Backend Setup**

   ```bash
   cd Server
   pip install -r requirements.txt

   # Set environment variables
   export DATABASE_URI="postgresql://user:password@host:port/database"
   export SECRET_KEY="your-secret-key"
   export SUPABASE_URL="your-supabase-url"
   export SUPABASE_ANON_KEY="your-supabase-anon-key"

   # Initialize database
   flask db upgrade
   python seed.py  # Optional: seed with sample data

   # Run the server
   python app.py
   ```

3. **Frontend Setup**

   ```bash
   cd ../client
   npm install
   npm run dev
   ```

4. **Environment Setup**

   **Server (.env)**

   ```env
   DATABASE_URI=postgresql://postgres:password@db.supabase.co:6543/postgres?sslmode=require
   SECRET_KEY=your-secret-key-here
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

   **Client (.env)**

   ```env
   VITE_API_URL=http://localhost:5000
   VITE_CLOUDINARY_NAME=your-cloudinary-name
   VITE_CLOUDINARY_PRESET=your-upload-preset
   ```

5. **Access the Application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000`

---

## 🔐 Authentication Flow

### 📧 Email/Password Authentication

1. User submits registration/login credentials
2. Server validates input with Formik/Yup validation
3. Password hashed using bcrypt
4. Session created with secure cookies
5. User redirected to dashboard
6. Session persisted across browser sessions

### 🔒 Protected Routes

- Dashboard, workout tracking, and social features require authentication
- Session-based authentication with secure HTTP-only cookies
- Automatic session validation on protected route access
- Graceful handling of expired sessions

---

## 📝 API Overview

### 🔐 Authentication Endpoints

```
POST /users/register          # User registration
POST /users/login             # User login
POST /users/logout            # User logout
GET  /users/session           # Check session status
```

### 👤 User Management

```
GET    /users/                # Get all users
GET    /users/<id>            # Get user profile
PUT    /users/<id>            # Update user profile
```

### 🏋️ Workout Management

```
POST   /workout-sessions/     # Save workout session
GET    /workout-sessions/<user_id>        # Get user workouts
GET    /workout-sessions/<user_id>/stats  # Get workout statistics
```

### 👥 Friends System

```
GET    /friends/<user_id>     # Get user's friends
POST   /friends/request       # Send friend request
DELETE /friends/request       # Cancel/decline friend request
```

### 📊 Progress Tracking

```
GET    /progress/<user_id>    # Get user progress
POST   /progress/             # Log workout progress
PUT    /progress/<id>         # Update progress entry
```

---

## 🔮 Future Improvements

### 🚀 Planned Features

- **🔔 Real-time Notifications** - Live workout updates and friend activity
- **🏆 Advanced Challenges** - Group challenges and competitions
- **📱 Mobile App** - Native iOS/Android applications
- **🎯 AI Workout Recommendations** - Personalized exercise suggestions
- **📊 Advanced Analytics** - Detailed performance insights
- **🍎 Nutrition Tracking** - Meal logging and dietary goals
- **💪 Personal Trainer Matching** - Connect with fitness professionals
- **🏃 Wearable Integration** - Sync with fitness trackers and smartwatches

### 🛠️ Technical Enhancements

- **⚡ Real-time Updates** - WebSocket integration for live data
- **📈 Performance Optimization** - Database indexing and caching
- **🔍 Advanced Search** - Enhanced exercise and user discovery
- **🌐 Internationalization** - Multi-language support
- **♿ Accessibility** - WCAG compliance improvements
- **🧪 Testing Suite** - Comprehensive unit and integration tests
- **🔐 Enhanced Security** - Two-factor authentication and OAuth

---

## 📩 Contact

### 👥 Development Team

- **Backend Developer**: [Isaac Ogutu](https://github.com/ogzacky75)
- **Frontend Developer**: [Joseph Charana](mailto:charanajoseph@gmail.com)

### 🔗 Links

- **🌐 Live Application**: [https://fit-fam-eight.vercel.app/](https://fit-fam-eight.vercel.app/)
- **📡 API Server**: [https://group-fitness-app.onrender.com](https://group-fitness-app.onrender.com)
- **📂 GitHub Repository**: [https://github.com/ogzacky75/Group_fitness_app](https://github.com/ogzacky75/Group_fitness_app)

### 🤝 Contributing

We welcome contributions! Please feel free to submit issues, feature requests, or pull requests.

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ for fitness enthusiasts everywhere!**

_Empowering friends to achieve their fitness goals together_ 💪🤝✨
