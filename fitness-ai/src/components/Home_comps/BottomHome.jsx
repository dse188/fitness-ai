import React from 'react'

function BottomHome() {
  return (
    <div>
        <div className='Content p-14 bg-gray-50'>
            <h1 className='text-black text-3xl font-bold text-center'>
                Ready to Start Tracking?
            </h1>
            <p className='text-gray-700 text-xl text-center mt-4'>
                Join thousands of fitness enthusiasts who are using FitnessAI to achieve their<br/>goals
            </p>
            <div className='flex justify-center p-6'>
                <button className='bg-sky-500 p-3 text-sm text-white font-bold rounded pl-7 pr-7
                hover:bg-blue-600'>Create Free Account</button>
            </div>
        </div>
    </div>
  )
}

export default BottomHome