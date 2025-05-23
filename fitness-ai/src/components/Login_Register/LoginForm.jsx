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
      <div className='flex flex-col gap-2 mb-4'> 
        <input value={username} onChange={e => setUsername(e.target.value)} className='text-black p-1 bg-gray-200 rounded-md' placeholder='Username'/>
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} className='text-black p-1 bg-gray-200 rounded-md' placeholder='Password'/>
      </div>
      
      <button type='submit' className='w-full text-black border p-1 rounded-md hover:bg-sky-300'>Login</button>
      {error && <div className='text-black'>{error}</div>}
    </form>
  )
}

export default LoginForm