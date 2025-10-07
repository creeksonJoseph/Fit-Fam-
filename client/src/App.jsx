import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Friends from "./pages/Friends";
import Workouts from "./pages/Workouts";

// import GroupWorkout from './pages/GroupWorkout'
import Profile from "./pages/Profile";
// import FriendsActivity from "./pages/FriendsActivity";
import Notifications from "./pages/Notifications";
import AddFriends from "./pages/AddFriends";
import WorkoutDetail from "./pages/WorkoutDetail";
import WorkoutSession from "./pages/WorkoutSession";
import WorkoutHistory from "./pages/WorkoutHistory";
import Admin from "./pages/Admin";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/friends" element={<ProtectedRoute><Friends /></ProtectedRoute>} />
          <Route path="/workouts" element={<ProtectedRoute><Workouts /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
          <Route path="/add-friends" element={<ProtectedRoute><AddFriends /></ProtectedRoute>} />
          <Route path="/workout-detail/:id" element={<ProtectedRoute><WorkoutDetail /></ProtectedRoute>} />
          <Route path="/workout-session/:id" element={<ProtectedRoute><WorkoutSession /></ProtectedRoute>} />
          <Route path="/workout-history" element={<ProtectedRoute><WorkoutHistory /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
