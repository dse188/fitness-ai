import React, { useState } from 'react'
import RegisterForm from '../Login_Register/RegisterForm'

function BottomHome() {
  const [showRegister, setShowRegister] = useState(false);

  const handleRegisterSuccess = () => {
    setShowRegister(false);
    // Optionally, you can show a login modal or a success message here
  };

  return (
    <div>
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

      <div className='Content pt-10 bg-gray-50'>
        <h1 className='text-black text-3xl font-bold text-center pt-4'>
          Ready to Start Tracking?
        </h1>
        <p className='text-gray-700 text-xl text-center mt-4'>
          Join thousands of fitness enthusiasts who are using FitLog to achieve their<br/>goals
        </p>
        <div className='flex justify-center p-6'>
          <button 
            className='bg-sky-500 p-3 text-sm text-white font-bold rounded pl-7 pr-7 hover:bg-blue-600 mb-28'
            onClick={() => setShowRegister(true)}
          >
            Create Free Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default BottomHome