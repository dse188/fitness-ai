import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LoginForm from '../Login_Register/LoginForm';
import RegisterForm from '../Login_Register/RegisterForm';

function Navbar() {

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

  return (
    <div className=''>
        <div className='p-4 bg-white shadow-sm'>
            <div className='text-black grid grid-flow-col-dense justify-between mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-12'> {/* Places logo and buttons on both ends of the page */}
                <Link to='/' className='ml-12 text-2xl font-bold text-sky-500 hover:text-sky-600'>FitnessAI</Link>
                <div className='grid grid-flow-col-dense justify-center gap-5 text-gray-700 font-semibold pt-2'>
                    <Link to='/Dashboard' className='hover:text-sky-500'>Dashboard</Link>
                    <Link to='/LogWorkout' className='hover:text-sky-500'>Log Workout</Link>
                    <Link to='/History' className='hover:text-sky-500'>History</Link>
                    <Link to='/Progress' className='hover:text-sky-500'>Progress</Link>
                </div>
                <div className='buttons mr-12 font-semibold text-sm'>
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
                    {showLogin && <LoginForm onSuccess={() => setShowLogin(false)} />}
                    {showRegister && <RegisterForm onSuccess={() => setShowRegister(false)} />}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navbar