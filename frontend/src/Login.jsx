import { useState } from 'react'

const VALID_EMAIL = 'ankit@hack2skill.com'
const VALID_PASSWORD = 'ankit@123'

function Login({ onSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim().toLowerCase() === VALID_EMAIL && password === VALID_PASSWORD) {
      setError('')
      onSuccess(email.trim().toLowerCase())
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <main className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="username"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="current-password"
            required
          />
        </label>
        {error && <p className="auth-error" role="alert">{error}</p>}
        <button type="submit" className="auth-btn">Login</button>
      </form>
    </main>
  )
}

export default Login
