import React from 'react'

function TopHome() {
  return (
    <div className='text-white bg-gradient-to-b from-sky-500 to-cyan-400 mt pb-16'>
        <div className='navbar      font-bold flex justify-between ml-8 mr-8 pt-3'>
            <span className='text-xl'>FitnessAI</span>
            <div className='text-black font-normal text-sm'>
                <button className='p-2 pr-3 pl-3 mr-2 border bg-sky-500 border-white-100 rounded hover:text-white hover:bg-blue-600 hover:border-none'>Login</button>
                <button className='p-2 pr-3 pl-3 border bg-sky-500 rounded hover:text-white hover:bg-blue-600 hover:border-none'>Register</button>
            </div>
        </div>

        <div>
            <h1 
                className='text-5xl font-bold m-5 text-center pt-12'>
                Track Your Fitness Journey
            </h1>

            <p 
            className='text-2xl text-center pb-4'>
                Log workouts, track progress, and achieve your fitness goals <br/>with FitnessAI
            </p>

            <div className='start button'>
                <div className='text-center text-sky-400 font-semibold text-sm p-5'>
                    <button className='pr-5 pt-2 pb-2 pl-5 border bg-white border-white-100 rounded mr-5 hover:text-black hover:bg-cyan-500'>Get Started</button>
                    <button className='pr-5 pt-2 pb-2 pl-5 border bg-white rounded hover:text-black hover:bg-cyan-500'>Learn More</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default TopHome