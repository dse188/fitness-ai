import React from 'react'

function Navbar() {
  return (
    <div>
        <div className='p-4 bg-white shadow-sm'>
            <div className='text-black flex justify-between '> {/* Places logo and buttons on both ends of the page */}
                <h1 className='ml-12 text-2xl font-bold text-sky-500'>FitnessAI</h1>
                <div className='flex justify-center gap-5 text-gray-600 font-semibold '>
                    <button className='hover:text-sky-500'>Dashboard</button>
                    <button className='hover:text-sky-500'>Log Workout</button>
                    <button className='hover:text-sky-500'>History</button>
                    <button className='hover:text-sky-500'>Progress</button>
                </div>
                <div className='buttons mr-12 font-semibold text-sm'>
                    <button className='p-2 pr-3 pl-3 mr-2 border bg-gray-100 border-white-100 rounded hover:text-black hover:bg-blue-500'>Login</button>
                    <button className='p-2 pr-3 pl-3  text-white border bg-sky-500 rounded hover:text-white hover:bg-sky-600 '>Register</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar