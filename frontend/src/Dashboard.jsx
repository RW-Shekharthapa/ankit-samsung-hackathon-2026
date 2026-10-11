function Dashboard({ email, onLogout }) {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1>Dashboard</h1>
        <p>Welcome, {email}</p>
        <button type="button" className="auth-btn" onClick={onLogout}>
          Logout
        </button>
      </section>
    </main>
  )
}

export default Dashboard
