import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Friends from './pages/Friends'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </Router>
  )
}

export default App
