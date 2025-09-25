import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Friends from './pages/Friends'
import Workouts from './pages/Workouts'

import GroupWorkout from './pages/GroupWorkout'
import Settings from './pages/Settings'
import FriendsActivity from './pages/FriendsActivity'
import Notifications from './pages/Notifications'
import AddFriends from './pages/AddFriends'
import WorkoutDetail from './pages/WorkoutDetail'
import WorkoutSession from './pages/WorkoutSession'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/workouts" element={<Workouts />} />

        <Route path="/group-workout" element={<GroupWorkout />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/friends-activity" element={<FriendsActivity />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/add-friends" element={<AddFriends />} />
        <Route path="/workout-detail/:id" element={<WorkoutDetail />} />
        <Route path="/workout-session/:id" element={<WorkoutSession />} />
      </Routes>
    </Router>
  )
}

export default App
