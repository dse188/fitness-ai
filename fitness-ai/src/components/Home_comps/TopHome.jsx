import React from 'react'

function TopHome() {
  return (
    <div className='text-white bg-gradient-to-b from-cyan-600 to-cyan-400 mt'>
        <div className='navbar      font-bold flex justify-between ml-8 mr-8 pt-3'>
            <span className=''>FitnessAI</span>
            <div>
                <button className='pr-1'>Login</button>
                <button className='pl-1'>Register</button>
            </div>
        </div>

        <div>
            <h1 
                className='text-4xl font-bold m-5 text-center'>
                Track Your Fitness Journey
            </h1>

            <p 
            className='text-xl text-center'>
                Log workouts, track progress, and achieve your fitness goals <br/>with FitnessAI
            </p>

            <div className='start button'>
                <div className='text-center p-5'>
                    <button className='pr-1'>Get Started</button>
                    <button className='pl-1'>Learn More</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default TopHome