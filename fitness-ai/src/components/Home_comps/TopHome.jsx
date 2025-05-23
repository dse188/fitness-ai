import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../Login_Register/LoginForm'
import RegisterForm from '../Login_Register/RegisterForm'

function TopHome() {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  const scrollToMiddle = () => {
    const middleSection = document.getElementById('middle-section')
    if (middleSection) {
      middleSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLoginSuccess = () => {
    setShowLogin(false)
    // You might want to redirect or update UI state here
  }

  const handleRegisterSuccess = () => {
    setShowRegister(false)
    // Optionally show login form after successful registration
    setShowLogin(true)
  }

  return (
    <div className='text-white bg-gradient-to-b from-sky-500 to-cyan-400 mt pb-16'>
      {/* Modal Overlays */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-zinc-100 p-6 rounded-lg max-w-md w-full">
            <LoginForm onSuccess={handleLoginSuccess} />
            <button 
              onClick={() => setShowLogin(false)}
              className="mt-4 w-full border p-1 text-black rounded-md hover:bg-red-500 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showRegister && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-zinc-100 p-6 rounded-lg max-w-md w-full">
            <RegisterForm onSuccess={handleRegisterSuccess} />
            <button 
              onClick={() => setShowRegister(false)}
              className="mt-4 w-full border p-1 text-black rounded-md bg-white shadow-sm hover:bg-red-500 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className='navbar font-bold flex justify-between ml-8 mr-8 pt-3'>
        <span className='text-xl'>FitnessAI</span>
        <div className='text-black font-normal text-sm'>
          <button 
            onClick={() => setShowLogin(true)}
            className='p-2 pr-3 pl-3 mr-2 border bg-sky-500 border-white-100 rounded hover:text-white hover:bg-blue-600 hover:border-none'
          >
            Login
          </button>
          <button 
            onClick={() => setShowRegister(true)}
            className='p-2 pr-3 pl-3 border bg-sky-500 rounded hover:text-white hover:bg-blue-600 hover:border-none'
          >
            Register
          </button>
        </div>
      </div>

      <div>
        <h1 className='text-5xl font-bold m-5 text-center pt-12'>
          Track Your Fitness Journey
        </h1>

        <p className='text-2xl text-center pb-4'>
          Log workouts, track progress, and achieve your fitness goals <br/>with FitnessAI
        </p>

        <div className='start button'>
          <div className='text-center text-sky-400 font-semibold text-sm p-5'>
            <Link to='/LogWorkout' className='pr-5 pt-2 pb-2 pl-5 border bg-white border-white-100 rounded-md mr-5 hover:text-black hover:bg-cyan-500'>
              Get Started
            </Link>
            <button
              onClick={scrollToMiddle}
              className='pr-5 pt-2 pb-2 pl-5 border bg-white rounded-md hover:text-black hover:bg-cyan-500'
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHome