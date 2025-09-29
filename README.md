# Group_fitness_app

A fitness web application that tracks progress of workouts for an individual or as a group of friends

# File-structure
# Client
client/
│
├── public/                     
│   ├── android-chrome-192x192.png              
│   ├── android-chrome-512x512.png
│   ├── apple-touch-icon.png
│	├── april-laugh.jpg
│	├── ben-weber-.jpg
│	├── bruce-mars.jpg
│	├── candra-winanta.jpg
│	├── fat-lads.jpg
│	├── favicon-16x16.png
│	├── favicon-32x32.png
│	├── facicon.ico
│   └── site.webamanifest           
│
├── src/                        
│   ├── assets/ 
│   │   ├── android-chrome-192x192.png              
│   │   ├── android-chrome-512x512.png
│   │   ├── apple-touch-icon.png                
│   │   ├── logo.png
│	│   ├── favicon-16x16.png
│	│   ├── favicon-32x32.png
│	│   ├── facicon.ico
│   │   └── site.webamanifest
│   │
│   ├── components/             
│   │   ├── AppHeader.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Logo.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── SearchInput.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Toast.jsx
│   │   └── WorkoutCard.jsx
│   ├── context/                
│   │   └── AuthContext.jsx
│   │
│   ├── pages/                  
│   │   ├── AddFriends.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Friends.jsx
│   │   ├── LandingPage.jsx
│   │   ├── Login.jsx
│   │   ├── Notifications.jsx
│   │   ├── Profile.jsx
│   │   ├── SignUp.jsx
│   │   ├── WorkoutDetail.jsx
│   │   ├── WorkoutHistory.jsx
│   │   ├── Workouts.jsx
│   │   └── WorkoutSession.jsx
│   │
│   │
│   ├── App.jsx 
│   └── main.jsx
│
├── package-lock.json
├── tailwind.config.js
├── index.html
├── eslint.config.js
├── .gitignore                        
├── package.json
├── vite.config.js              
└── README.md

# Server
Server/
├──flask_session/
│
├── migrations/                 
│
├── routes/                     
│   ├── __pycache__/
│   ├── User_routes.py
│   ├── Workout_routes.py
│   ├── Progress_routes.py
│   ├── Friends_routes.py
│   └── Workout_session_routes.py
│
├── models
├── seed.py               
├── app.py                
├── config.py             
└── requirements.txt               

.gitignore
LICENSE
README.md

# URL's for client and server

🌐 client = https://fit-fam.onrender.com
🌐 server = https://group-fitness-app.onrender.com

# How to run client locally

- Go to the client side and npm install
- After you have installed the necessary packages, run: npm run dev 

# How to run server locally

- You need to run: python3 -m venv/bin/activate to install virtual environment
- Next you pip install all packages in requirements.txt eg: pip install flask
- After you finish, run: flask run to deploy server locally

# How the 🌐 web application works

- You first start by signing up an account using your email account and you will be needed to create a strong password with requirements stated as you type
- Once you have logged in your account is saved in the database and you can sign in again with the same email and password
- Next you go to workouts section and grind a workout of your choosing, the workouts targets specific musclegroups so you can get the workout you want
- After you have finished with the workout your progress is shown on the dashboard
- You can add friends to help in participating in the workouts
- There is a ranking system to see what your friends performance is like compared to yours in the dashboard