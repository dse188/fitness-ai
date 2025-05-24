import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginForm from '../Login_Register/LoginForm';
import RegisterForm from '../Login_Register/RegisterForm';

function Navbar() {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const navigate = useNavigate();

    const handleLoginSuccess = () => {
      setShowLogin(false)
      navigate('/Dashboard'); // Redirect to Dashboard after login
    }

    const handleRegisterSuccess = () => {
      setShowRegister(false)
      setShowLogin(true)
    }

    const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      navigate('/');
    };

    const isLoggedIn = !!localStorage.getItem('token');

    return (
      <div className=''>
        {/* Modal Overlays */}
        {showLogin && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
              <LoginForm onSuccess={handleLoginSuccess} />
              <button 
                onClick={() => setShowLogin(false)}
                className="mt-4 text-gray-600 hover:text-red-600"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {showRegister && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
              <RegisterForm onSuccess={handleRegisterSuccess} />
              <button 
                onClick={() => setShowRegister(false)}
                className="mt-4 text-gray-600 hover:text-gray-800"
              >
                Close
              </button>
            </div>
          </div>
        )}
        <div className='p-4 bg-white shadow-sm'>
          <div className='text-black grid grid-flow-col-dense justify-between mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-12'>
            <Link to='/Dashboard' className='ml-12 text-2xl font-bold text-sky-500 hover:text-sky-600'>FitLog</Link>
            <div className='grid grid-flow-col-dense justify-center gap-5 text-gray-700 font-semibold pt-2'>
              <Link to='/Dashboard' className='hover:text-sky-500'>Dashboard</Link>
              <Link to='/LogWorkout' className='hover:text-sky-500'>Log Workout</Link>
              <Link to='/History' className='hover:text-sky-500'>History</Link>
              <Link to='/Progress' className='hover:text-sky-500'>Progress</Link>
            </div>
            <div className='buttons mr-12 font-semibold text-sm'>
              {isLoggedIn ? (
                <button 
                  className='p-2 pr-3 pl-3 border bg-sky-500 rounded hover:text-white hover:bg-blue-600'
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <>
                  <button 
                    className='p-2 pr-3 pl-3 mr-2 border bg-gray-100 border-white-100 rounded hover:text-black hover:bg-blue-500'
                    onClick={() => setShowLogin(true)}
                  >
                    Login
                  </button>
                  <button 
                    className='p-2 pr-3 pl-3  text-white border bg-sky-500 rounded hover:text-white hover:bg-sky-600 '
                    onClick={() => setShowRegister(true)}
                  >
                    Register
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Navbar