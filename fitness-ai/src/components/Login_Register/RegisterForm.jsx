import React, { useState } from 'react'

function RegisterForm() {
    // This function will be called when the Registration is successful
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');


    // Validate password match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Perform login logic here
    try {
      // Simulate a login request
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password})
      });
      const data = await res.json();
      if (res.ok) {
        // Call the onSuccess function passed as a prop
        setSuccess('Registration successful! You can now log in.');
        setUsername('');
        setPassword('');
        setConfirmPassword('');
        onSuccess && onSuccess();
      } else {
        // Handle error
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      // Handle network error
      setError('Network error.');
    }
  };


  return (
    <form onSubmit={handleSubmit} className="register-form      bg-white p-6 rounded shadow-md max-w-sm mx-auto">
        <h2 className='text-xl font-bold mb-4'>Register</h2>
        <input
            className='block  w-full mb-2 p-2 border rounded'
            placeholder='Username'
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
        />
        <input
            className='block  w-full mb-2 p-2 border rounded'
            type='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
        />
        <input
            className='block  w-full mb-2 p-2 border rounded'
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
        />
        <button
            className='bg-blue-500 text-white p-2 rounded'
            type='submit'
        >
            Register
        </button>
        {error && <div className='text-red-500 mt-2'>{error}</div>}
        {success && <div className='text-green-500 mt-2'>{success}</div>}
    </form>
  )
}

export default RegisterForm