import { useState } from 'react'
import Login from './Login.jsx'
import Dashboard from './Dashboard.jsx'
import './App.css'

const STORAGE_KEY = 'user_email'

function App() {
  const [user, setUser] = useState(() => localStorage.getItem(STORAGE_KEY))

  const handleLogin = (email) => {
    localStorage.setItem(STORAGE_KEY, email)
    setUser(email)
  }

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }

  return user ? (
    <Dashboard email={user} onLogout={handleLogout} />
  ) : (
    <Login onSuccess={handleLogin} />
  )
}

export default App
