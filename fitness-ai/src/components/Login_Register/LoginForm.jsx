import React, { useState } from 'react'

function LoginForm({ onSuccess }) {
  // This function will be called when the login is successful

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Perform login logic here
    try {
      // Simulate a login request
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (res.ok) {
        // Call the onSuccess function passed as a prop
        localStorage.setItem('token', data.token);
        onSuccess && onSuccess();
      } else {
        // Handle error
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      // Handle network error
      setError('Network error.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder='Username'/>
      <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password'/>
      <button type='submit'>Login</button>
      {error && <div>{error}</div>}
    </form>
  )
}

export default LoginForm